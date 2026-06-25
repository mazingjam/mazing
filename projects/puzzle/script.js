const SIZE = 5;
const UNKNOWN = -1;
const SEA = 0;
const ISLAND = 1;

const boardEl = document.querySelector("#board");
const newButton = document.querySelector("#newButton");
const resetButton = document.querySelector("#resetButton");
const paintIsland = document.querySelector("#paintIsland");
const paintSea = document.querySelector("#paintSea");
const checkButton = document.querySelector("#checkButton");
const showButton = document.querySelector("#showButton");
const message = document.querySelector("#message");
const stats = document.querySelector("#stats");
const puzzleLabel = document.querySelector("#puzzleLabel");

const state = {
  puzzle: null,
  marks: [],
  tool: ISLAND,
  generation: 0,
};

function idx(x, y, size = SIZE) {
  return y * size + x;
}

function xy(index, size = SIZE) {
  return [index % size, Math.floor(index / size)];
}

function neighbors(index, size = SIZE) {
  const [x, y] = xy(index, size);
  const out = [];
  if (x > 0) out.push(idx(x - 1, y, size));
  if (x < size - 1) out.push(idx(x + 1, y, size));
  if (y > 0) out.push(idx(x, y - 1, size));
  if (y < size - 1) out.push(idx(x, y + 1, size));
  return out;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetMarks() {
  state.marks = Array(SIZE * SIZE).fill(UNKNOWN);
  Object.keys(state.puzzle.clues).forEach((key) => {
    state.marks[Number(key)] = ISLAND;
  });
}

function generateSolutionCandidate() {
  const cells = Array(SIZE * SIZE).fill(SEA);
  const all = shuffle([...Array(SIZE * SIZE).keys()]);
  const islandCount = 4 + Math.floor(Math.random() * 2);
  const seeds = [];

  for (const cell of all) {
    if (seeds.length >= islandCount) break;
    if (seeds.some((seed) => neighbors(seed).includes(cell))) continue;
    seeds.push(cell);
    cells[cell] = ISLAND;
  }

  if (seeds.length < islandCount) return null;

  const islands = seeds.map((seed, id) => ({
    id,
    clue: seed,
    cells: new Set([seed]),
    target: 1 + Math.floor(Math.random() * 4),
  }));

  let changed = true;
  while (changed) {
    changed = false;
    for (const island of shuffle(islands)) {
      if (island.cells.size >= island.target) continue;
      const frontier = shuffle(
        [...island.cells].flatMap((cell) => neighbors(cell)).filter((cell) => cells[cell] === SEA),
      );
      for (const next of frontier) {
        const touchesOtherIsland = neighbors(next).some(
          (neighbor) => cells[neighbor] === ISLAND && !island.cells.has(neighbor),
        );
        if (touchesOtherIsland) continue;
        cells[next] = ISLAND;
        island.cells.add(next);
        changed = true;
        break;
      }
    }
  }

  if (islands.some((island) => island.cells.size !== island.target)) return null;
  if (!isValidComplete(cells, cluesFromIslands(islands))) return null;

  return { cells, islands };
}

function cluesFromIslands(islands) {
  const clues = {};
  islands.forEach((island) => {
    clues[island.clue] = island.cells.size;
  });
  return clues;
}

function hasSeaBlock(cells, size = SIZE) {
  for (let y = 0; y < size - 1; y += 1) {
    for (let x = 0; x < size - 1; x += 1) {
      const block = [idx(x, y, size), idx(x + 1, y, size), idx(x, y + 1, size), idx(x + 1, y + 1, size)];
      if (block.every((cell) => cells[cell] === SEA)) return true;
    }
  }
  return false;
}

function components(cells, wanted, size = SIZE) {
  const seen = new Set();
  const groups = [];
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i] !== wanted || seen.has(i)) continue;
    const group = [];
    const queue = [i];
    seen.add(i);
    while (queue.length) {
      const next = queue.shift();
      group.push(next);
      neighbors(next, size).forEach((neighbor) => {
        if (cells[neighbor] === wanted && !seen.has(neighbor)) {
          seen.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    groups.push(group);
  }
  return groups;
}

function isValidComplete(cells, clues, size = SIZE) {
  if (hasSeaBlock(cells, size)) return false;

  const seaGroups = components(cells, SEA, size);
  if (seaGroups.length !== 1) return false;

  const islandGroups = components(cells, ISLAND, size);
  const clueEntries = Object.entries(clues).map(([cell, value]) => [Number(cell), value]);

  if (islandGroups.length !== clueEntries.length) return false;

  return islandGroups.every((group) => {
    const groupClues = clueEntries.filter(([cell]) => group.includes(cell));
    return groupClues.length === 1 && group.length === groupClues[0][1];
  });
}

function partialValid(cells, clues, size = SIZE) {
  if (hasSeaBlock(cells, size)) return false;

  const clueEntries = Object.entries(clues).map(([cell, value]) => [Number(cell), value]);
  const islandGroups = components(cells, ISLAND, size);

  for (const group of islandGroups) {
    const groupClues = clueEntries.filter(([cell]) => group.includes(cell));
    if (groupClues.length > 1) return false;
    if (groupClues.length === 1 && group.length > groupClues[0][1]) return false;
  }

  for (const [clueCell, clueSize] of clueEntries) {
    const reachable = new Set();
    const queue = [clueCell];
    while (queue.length) {
      const next = queue.shift();
      if (reachable.has(next) || cells[next] === SEA) continue;
      reachable.add(next);
      neighbors(next, size).forEach((neighbor) => queue.push(neighbor));
    }
    if (reachable.size < clueSize) return false;
  }

  return true;
}

function chooseUnknown(cells, clues) {
  const clueCells = Object.keys(clues).map(Number);
  let best = -1;
  let bestScore = Infinity;
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i] !== UNKNOWN) continue;
    const [x, y] = xy(i);
    const score = Math.min(
      ...clueCells.map((cell) => {
        const [cx, cy] = xy(cell);
        return Math.abs(x - cx) + Math.abs(y - cy);
      }),
    );
    if (score < bestScore) {
      best = i;
      bestScore = score;
    }
  }
  return best;
}

function countSolutions(clues, limit = 2, size = SIZE) {
  const cells = Array(size * size).fill(UNKNOWN);
  Object.keys(clues).forEach((cell) => {
    cells[Number(cell)] = ISLAND;
  });

  let count = 0;

  function search() {
    if (count >= limit) return;
    if (!partialValid(cells, clues, size)) return;

    const next = chooseUnknown(cells, clues);
    if (next === -1) {
      if (isValidComplete(cells, clues, size)) count += 1;
      return;
    }

    cells[next] = SEA;
    search();
    cells[next] = ISLAND;
    search();
    cells[next] = UNKNOWN;
  }

  search();
  return count;
}

function generatePuzzle() {
  const maxAttempts = 5000;
  const started = performance.now();

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const candidate = generateSolutionCandidate();
    if (!candidate) continue;
    const clues = cluesFromIslands(candidate.islands);
    const solutionCount = countSolutions(clues, 2);
    if (solutionCount === 1) {
      return {
        clues,
        solution: candidate.cells,
        attempts: attempt,
        ms: Math.round(performance.now() - started),
      };
    }
  }

  return null;
}

function render() {
  boardEl.innerHTML = "";
  boardEl.style.setProperty("--size", SIZE);

  const clues = state.puzzle?.clues ?? {};
  for (let i = 0; i < SIZE * SIZE; i += 1) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "cell";
    const clue = clues[i];
    if (clue) {
      cell.classList.add("is-clue");
      cell.textContent = clue;
    } else {
      if (state.marks[i] === ISLAND) cell.classList.add("is-island");
      if (state.marks[i] === SEA) cell.classList.add("is-sea");
      cell.addEventListener("click", () => paintCell(i));
    }
    boardEl.append(cell);
  }
}

function paintCell(cell) {
  if (!state.puzzle?.clues) return;
  state.marks[cell] = state.marks[cell] === state.tool ? UNKNOWN : state.tool;
  message.textContent = "";
  message.className = "message";
  render();
}

function setTool(tool) {
  state.tool = tool;
  paintIsland.classList.toggle("is-active", tool === ISLAND);
  paintSea.classList.toggle("is-active", tool === SEA);
}

function checkBoard() {
  const bad = [];
  state.marks.forEach((mark, index) => {
    if (mark !== UNKNOWN && mark !== state.puzzle.solution[index]) bad.push(index);
  });

  render();
  [...boardEl.children].forEach((cell, index) => {
    if (bad.includes(index)) cell.classList.add("is-bad");
  });

  if (bad.length) {
    message.textContent = `${bad.length} marked cells disagree with the generated solution.`;
    message.className = "message is-warn";
    return;
  }

  if (state.marks.every((mark) => mark !== UNKNOWN)) {
    message.textContent = "Solved.";
    message.className = "message is-win";
    return;
  }

  message.textContent = "No marked mistakes so far.";
  message.className = "message";
}

function showSolution() {
  state.marks = [...state.puzzle.solution];
  Object.keys(state.puzzle.clues).forEach((cell) => {
    state.marks[Number(cell)] = ISLAND;
  });
  message.textContent = "Showing the unique generated solution.";
  message.className = "message";
  render();
}

function resetBoard() {
  if (!state.puzzle) return;
  resetMarks();
  message.textContent = "Board reset.";
  message.className = "message";
  render();
}

function newPuzzle() {
  const generation = state.generation + 1;
  state.generation = generation;
  newButton.disabled = true;
  puzzleLabel.textContent = "Generating";
  stats.textContent = "checking";
  message.textContent = "Searching for a unique puzzle...";
  message.className = "message";

  window.setTimeout(() => {
    if (generation !== state.generation) return;
    const puzzle = generatePuzzle();
    newButton.disabled = false;

    if (!puzzle) {
      state.puzzle = null;
      state.marks = [];
      boardEl.innerHTML = "";
      puzzleLabel.textContent = "Failed";
      stats.textContent = "retry";
      message.textContent = "No unique board found in this run. Generate again.";
      message.className = "message is-warn";
      return;
    }

    state.puzzle = puzzle;
    resetMarks();
    puzzleLabel.textContent = `Unique puzzle`;
    stats.textContent = `${puzzle.attempts} tries`;
    message.textContent = `Generated in ${puzzle.ms}ms. Solver found exactly one solution.`;
    message.className = "message is-win";
    render();
  }, 30);
}

newButton.addEventListener("click", newPuzzle);
resetButton.addEventListener("click", resetBoard);
paintIsland.addEventListener("click", () => setTool(ISLAND));
paintSea.addEventListener("click", () => setTool(SEA));
checkButton.addEventListener("click", checkBoard);
showButton.addEventListener("click", showSolution);

setTool(ISLAND);
newPuzzle();
