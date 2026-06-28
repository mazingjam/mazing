const UNKNOWN = -1;
const SEA = 0;
const ISLAND = 1;
const HOLE = 2;

const profiles = [
  {
    id: "small",
    label: "Small",
    size: 4,
    holes: 0,
    islands: [3, 4],
    islandSizeMax: 3,
    maxAttempts: 3000,
  },
  {
    id: "medium",
    label: "Medium",
    size: 5,
    holes: 2,
    islands: [4, 5],
    islandSizeMax: 4,
    maxAttempts: 6500,
  },
  {
    id: "large",
    label: "Large",
    size: 6,
    holes: 4,
    islands: [5, 6],
    islandSizeMax: 4,
    maxAttempts: 18000,
  },
];

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
const difficulty = document.querySelector("#difficulty");
const profileTabs = document.querySelector("#profileTabs");

const state = {
  profileIndex: 0,
  puzzle: null,
  marks: [],
  tool: ISLAND,
  generation: 0,
};

function currentProfile() {
  return profiles[state.profileIndex];
}

function idx(x, y, size) {
  return y * size + x;
}

function xy(index, size) {
  return [index % size, Math.floor(index / size)];
}

function neighbors(index, size, holes = new Set()) {
  const [x, y] = xy(index, size);
  const out = [];
  if (x > 0) out.push(idx(x - 1, y, size));
  if (x < size - 1) out.push(idx(x + 1, y, size));
  if (y > 0) out.push(idx(x, y - 1, size));
  if (y < size - 1) out.push(idx(x, y + 1, size));
  return out.filter((cell) => !holes.has(cell));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function activeCells(size, holes) {
  return [...Array(size * size).keys()].filter((cell) => !holes.has(cell));
}

function isConnected(cells, size, holes) {
  if (!cells.length) return false;
  const wanted = new Set(cells);
  const seen = new Set();
  const queue = [cells[0]];
  while (queue.length) {
    const next = queue.shift();
    if (seen.has(next)) continue;
    seen.add(next);
    neighbors(next, size, holes).forEach((neighbor) => {
      if (wanted.has(neighbor) && !seen.has(neighbor)) queue.push(neighbor);
    });
  }
  return seen.size === wanted.size;
}

function createHoles(profile) {
  if (!profile.holes) return new Set();

  for (let attempt = 0; attempt < 200; attempt += 1) {
    const holes = new Set();
    const candidates = shuffle([...Array(profile.size * profile.size).keys()]);
    for (const cell of candidates) {
      if (holes.size >= profile.holes) break;
      const [x, y] = xy(cell, profile.size);
      const isCorner = (x === 0 || x === profile.size - 1) && (y === 0 || y === profile.size - 1);
      if (isCorner) continue;
      holes.add(cell);
      const active = activeCells(profile.size, holes);
      if (!isConnected(active, profile.size, holes)) holes.delete(cell);
    }
    if (holes.size === profile.holes) return holes;
  }

  return new Set();
}

function resetMarks() {
  const { size, holes, clues } = state.puzzle;
  state.marks = Array(size * size).fill(UNKNOWN);
  holes.forEach((cell) => {
    state.marks[cell] = HOLE;
  });
  Object.keys(clues).forEach((key) => {
    state.marks[Number(key)] = ISLAND;
  });
}

function generateSolutionCandidate(profile) {
  const holes = createHoles(profile);
  const cells = Array(profile.size * profile.size).fill(SEA);
  holes.forEach((cell) => {
    cells[cell] = HOLE;
  });

  const usable = shuffle(activeCells(profile.size, holes));
  const islandCount =
    profile.islands[0] + Math.floor(Math.random() * (profile.islands[1] - profile.islands[0] + 1));
  const seeds = [];

  for (const cell of usable) {
    if (seeds.length >= islandCount) break;
    if (seeds.some((seed) => neighbors(seed, profile.size, holes).includes(cell))) continue;
    seeds.push(cell);
    cells[cell] = ISLAND;
  }

  if (seeds.length < islandCount) return null;

  const islands = seeds.map((seed, id) => ({
    id,
    clue: seed,
    cells: new Set([seed]),
    target: 1 + Math.floor(Math.random() * profile.islandSizeMax),
  }));

  let changed = true;
  while (changed) {
    changed = false;
    for (const island of shuffle(islands)) {
      if (island.cells.size >= island.target) continue;
      const frontier = shuffle(
        [...island.cells]
          .flatMap((cell) => neighbors(cell, profile.size, holes))
          .filter((cell) => cells[cell] === SEA),
      );
      for (const next of frontier) {
        const touchesOtherIsland = neighbors(next, profile.size, holes).some(
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

  const clues = cluesFromIslands(islands);
  if (!isValidComplete(cells, clues, profile.size, holes)) return null;

  return { cells, holes, islands, clues };
}

function cluesFromIslands(islands) {
  const clues = {};
  islands.forEach((island) => {
    clues[island.clue] = island.cells.size;
  });
  return clues;
}

function hasSeaBlock(cells, size, holes) {
  for (let y = 0; y < size - 1; y += 1) {
    for (let x = 0; x < size - 1; x += 1) {
      const block = [idx(x, y, size), idx(x + 1, y, size), idx(x, y + 1, size), idx(x + 1, y + 1, size)];
      if (block.some((cell) => holes.has(cell))) continue;
      if (block.every((cell) => cells[cell] === SEA)) return true;
    }
  }
  return false;
}

function components(cells, wanted, size, holes) {
  const seen = new Set();
  const groups = [];
  for (const cell of activeCells(size, holes)) {
    if (cells[cell] !== wanted || seen.has(cell)) continue;
    const group = [];
    const queue = [cell];
    seen.add(cell);
    while (queue.length) {
      const next = queue.shift();
      group.push(next);
      neighbors(next, size, holes).forEach((neighbor) => {
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

function isValidComplete(cells, clues, size, holes) {
  if (hasSeaBlock(cells, size, holes)) return false;

  const seaGroups = components(cells, SEA, size, holes);
  if (seaGroups.length !== 1) return false;

  const islandGroups = components(cells, ISLAND, size, holes);
  const clueEntries = Object.entries(clues).map(([cell, value]) => [Number(cell), value]);

  if (islandGroups.length !== clueEntries.length) return false;

  return islandGroups.every((group) => {
    const groupClues = clueEntries.filter(([cell]) => group.includes(cell));
    return groupClues.length === 1 && group.length === groupClues[0][1];
  });
}

function partialValid(cells, clues, size, holes) {
  if (hasSeaBlock(cells, size, holes)) return false;

  const clueEntries = Object.entries(clues).map(([cell, value]) => [Number(cell), value]);
  const islandGroups = components(cells, ISLAND, size, holes);

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
      if (reachable.has(next) || cells[next] === SEA || cells[next] === HOLE) continue;
      reachable.add(next);
      neighbors(next, size, holes).forEach((neighbor) => queue.push(neighbor));
    }
    if (reachable.size < clueSize) return false;
  }

  return true;
}

function chooseUnknown(cells, clues, size, holes) {
  const clueCells = Object.keys(clues).map(Number);
  let best = -1;
  let bestScore = Infinity;
  for (const cell of activeCells(size, holes)) {
    if (cells[cell] !== UNKNOWN) continue;
    const [x, y] = xy(cell, size);
    const clueDistance = Math.min(
      ...clueCells.map((clueCell) => {
        const [cx, cy] = xy(clueCell, size);
        return Math.abs(x - cx) + Math.abs(y - cy);
      }),
    );
    const openNeighbors = neighbors(cell, size, holes).filter((neighbor) => cells[neighbor] === UNKNOWN).length;
    const score = clueDistance * 4 + openNeighbors;
    if (score < bestScore) {
      best = cell;
      bestScore = score;
    }
  }
  return best;
}

function countSolutions(clues, holes, size, limit = 2) {
  const cells = Array(size * size).fill(UNKNOWN);
  holes.forEach((cell) => {
    cells[cell] = HOLE;
  });
  Object.keys(clues).forEach((cell) => {
    cells[Number(cell)] = ISLAND;
  });

  let count = 0;
  let nodes = 0;

  function search() {
    nodes += 1;
    if (count >= limit) return;
    if (!partialValid(cells, clues, size, holes)) return;

    const next = chooseUnknown(cells, clues, size, holes);
    if (next === -1) {
      if (isValidComplete(cells, clues, size, holes)) count += 1;
      return;
    }

    cells[next] = SEA;
    search();
    cells[next] = ISLAND;
    search();
    cells[next] = UNKNOWN;
  }

  search();
  return { count, nodes };
}

function scoreDifficulty({ size, holes, clues, solution, solverNodes }) {
  const activeCount = activeCells(size, holes).length;
  const clueValues = Object.values(clues);
  const islandCells = solution.filter((cell) => cell === ISLAND).length;
  const clueDensity = clueValues.length / activeCount;
  const avgIsland = islandCells / clueValues.length;

  let score = 0;
  score += Math.max(0, activeCount - 16) * 1.4;
  score += holes.size * 3.2;
  score += Math.max(0, avgIsland - 2) * 5;
  score += Math.max(0, 0.22 - clueDensity) * 45;
  score += Math.log10(Math.max(1, solverNodes)) * 4;

  if (score < 22) return { label: "Easy", score: Math.round(score) };
  if (score < 38) return { label: "Medium", score: Math.round(score) };
  return { label: "Hard", score: Math.round(score) };
}

function generatePuzzle() {
  const profile = currentProfile();
  const started = performance.now();

  for (let attempt = 1; attempt <= profile.maxAttempts; attempt += 1) {
    const candidate = generateSolutionCandidate(profile);
    if (!candidate) continue;
    const solver = countSolutions(candidate.clues, candidate.holes, profile.size, 2);
    if (solver.count === 1) {
      const difficultyInfo = scoreDifficulty({
        size: profile.size,
        holes: candidate.holes,
        clues: candidate.clues,
        solution: candidate.cells,
        solverNodes: solver.nodes,
      });
      return {
        size: profile.size,
        holes: candidate.holes,
        clues: candidate.clues,
        solution: candidate.cells,
        attempts: attempt,
        ms: Math.round(performance.now() - started),
        solverNodes: solver.nodes,
        difficulty: difficultyInfo,
      };
    }
  }

  return null;
}

function renderProfiles() {
  profileTabs.innerHTML = "";
  profiles.forEach((profile, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `profile-tab ${index === state.profileIndex ? "is-active" : ""}`;
    button.textContent = `${profile.label} ${profile.size}x${profile.size}`;
    if (profile.holes) button.textContent += ` + ${profile.holes} holes`;
    button.addEventListener("click", () => {
      state.profileIndex = index;
      newPuzzle();
    });
    profileTabs.append(button);
  });
}

function renderDifficulty() {
  const label = state.puzzle?.difficulty?.label ?? currentProfile().label;
  difficulty.textContent = label;
  difficulty.className = "counter";
  difficulty.classList.add(`is-${label.toLowerCase()}`);
}

function render() {
  renderProfiles();
  renderDifficulty();
  boardEl.innerHTML = "";

  const size = state.puzzle?.size ?? currentProfile().size;
  const holes = state.puzzle?.holes ?? new Set();
  const clues = state.puzzle?.clues ?? {};
  boardEl.style.setProperty("--size", size);

  for (let i = 0; i < size * size; i += 1) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "cell";

    if (holes.has(i)) {
      cell.classList.add("is-hole");
      cell.disabled = true;
    } else if (clues[i]) {
      cell.classList.add("is-clue");
      cell.textContent = clues[i];
    } else {
      if (state.marks[i] === ISLAND) cell.classList.add("is-island");
      if (state.marks[i] === SEA) cell.classList.add("is-sea");
      cell.addEventListener("click", () => paintCell(i));
    }
    boardEl.append(cell);
  }
}

function paintCell(cell) {
  if (!state.puzzle?.clues || state.puzzle.holes.has(cell)) return;
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
  if (!state.puzzle) return;
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

  const complete = state.marks.every((mark) => mark !== UNKNOWN);
  if (complete) {
    message.textContent = "Solved.";
    message.className = "message is-win";
    return;
  }

  message.textContent = "No marked mistakes so far.";
  message.className = "message";
}

function showSolution() {
  if (!state.puzzle) return;
  state.marks = [...state.puzzle.solution];
  Object.keys(state.puzzle.clues).forEach((cell) => {
    state.marks[Number(cell)] = ISLAND;
  });
  state.puzzle.holes.forEach((cell) => {
    state.marks[cell] = HOLE;
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

function setLoading() {
  newButton.disabled = true;
  puzzleLabel.textContent = "Generating";
  stats.textContent = "checking";
  difficulty.textContent = "...";
  difficulty.className = "counter";
  message.textContent = "Searching for a unique puzzle...";
  message.className = "message";
}

function setGeneratedPuzzle(puzzle) {
  state.puzzle = puzzle;
  resetMarks();
  puzzleLabel.textContent = `Unique ${puzzle.size}x${puzzle.size}`;
  stats.textContent = `${puzzle.attempts} tries`;
  message.textContent = `${puzzle.difficulty.label} (${puzzle.difficulty.score}). ${puzzle.holes.size} holes, ${puzzle.solverNodes} solver nodes, ${puzzle.ms}ms.`;
  message.className = "message is-win";
  render();
}

function setGenerationFailure() {
  state.puzzle = null;
  state.marks = [];
  boardEl.innerHTML = "";
  puzzleLabel.textContent = "Failed";
  stats.textContent = "retry";
  renderDifficulty();
  message.textContent = "No unique board found in this run. Generate again.";
  message.className = "message is-warn";
}

function newPuzzle() {
  const generation = state.generation + 1;
  state.generation = generation;
  setLoading();
  renderProfiles();

  window.setTimeout(() => {
    if (generation !== state.generation) return;
    const puzzle = generatePuzzle();
    newButton.disabled = false;

    if (!puzzle) {
      setGenerationFailure();
      return;
    }

    setGeneratedPuzzle(puzzle);
  }, 30);
}

newButton.addEventListener("click", newPuzzle);
resetButton.addEventListener("click", resetBoard);
paintIsland.addEventListener("click", () => setTool(ISLAND));
paintSea.addEventListener("click", () => setTool(SEA));
checkButton.addEventListener("click", checkBoard);
showButton.addEventListener("click", showSolution);

setTool(ISLAND);
renderProfiles();
newPuzzle();
