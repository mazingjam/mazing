const levels = [
  {
    name: "The First Crucible",
    moves: 8,
    targets: ["sunflower", "blackmail", "ghostwriter", "waterfall"],
    tiles: [
      t("SUN", "nature"),
      t("FLOWER", "nature"),
      t("BLACK", "shadow"),
      t("MAIL", "civic"),
      t("GHOST", "ghost"),
      t("WRITER", "mind", { locked: true }),
      t("WATER", "water"),
      t("FALL", "nature"),
      t("FIRE", "fire"),
      t("ROOT", "root"),
      t("MOON", "nature"),
      t("LIGHT", "mind"),
      t("STONE", "civic", { cracked: true }),
      t("BIRD", "nature"),
      t("HOUSE", "civic"),
      t("DREAM", "mind"),
      t("KEY", "civic", { locked: true }),
      t("BLOOD", "shadow"),
      t("STAR", "nature"),
      t("GATE", "civic"),
    ],
  },
  {
    name: "City of Small Lies",
    moves: 9,
    targets: ["firelight", "keystone", "moonbird", "bloodroot", "dreamhouse"],
    tiles: [
      t("FIRE", "fire"),
      t("LIGHT", "mind"),
      t("KEY", "civic", { locked: true }),
      t("STONE", "civic", { cracked: true }),
      t("MOON", "nature"),
      t("BIRD", "nature"),
      t("BLOOD", "shadow"),
      t("ROOT", "root"),
      t("DREAM", "mind"),
      t("HOUSE", "civic"),
      t("WATER", "water"),
      t("GHOST", "ghost"),
      t("MAIL", "civic"),
      t("BLACK", "shadow"),
      t("SUN", "nature"),
      t("FLOWER", "nature"),
      t("STAR", "nature"),
      t("FALL", "nature"),
      t("WRITER", "mind", { locked: true }),
      t("GATE", "civic"),
    ],
  },
  {
    name: "The Locked Garden",
    moves: 10,
    targets: ["starlight", "waterhouse", "firebird", "rootgate", "blackstone"],
    tiles: [
      t("STAR", "nature"),
      t("LIGHT", "mind"),
      t("WATER", "water"),
      t("HOUSE", "civic"),
      t("FIRE", "fire"),
      t("BIRD", "nature"),
      t("ROOT", "root"),
      t("GATE", "civic", { locked: true }),
      t("BLACK", "shadow"),
      t("STONE", "civic", { cracked: true }),
      t("GHOST", "ghost"),
      t("MAIL", "civic"),
      t("MOON", "nature"),
      t("DREAM", "mind"),
      t("BLOOD", "shadow"),
      t("KEY", "civic", { locked: true }),
      t("SUN", "nature"),
      t("FLOWER", "nature"),
      t("WRITER", "mind"),
      t("FALL", "nature"),
    ],
  },
];

const combos = new Map([
  ["SUN+FLOWER", "sunflower"],
  ["BLACK+MAIL", "blackmail"],
  ["GHOST+WRITER", "ghostwriter"],
  ["WATER+FALL", "waterfall"],
  ["FIRE+LIGHT", "firelight"],
  ["KEY+STONE", "keystone"],
  ["MOON+BIRD", "moonbird"],
  ["BLOOD+ROOT", "bloodroot"],
  ["DREAM+HOUSE", "dreamhouse"],
  ["STAR+LIGHT", "starlight"],
  ["WATER+HOUSE", "waterhouse"],
  ["FIRE+BIRD", "firebird"],
  ["ROOT+GATE", "rootgate"],
  ["BLACK+STONE", "blackstone"],
]);

const state = {
  levelIndex: 0,
  tiles: [],
  selected: [],
  found: new Set(),
  movesLeft: 0,
  score: 0,
  history: [],
  ghostCharge: false,
};

const el = {
  levelName: document.querySelector("#levelName"),
  moves: document.querySelector("#moves"),
  score: document.querySelector("#score"),
  targets: document.querySelector("#targets"),
  selection: document.querySelector("#selection"),
  message: document.querySelector("#message"),
  board: document.querySelector("#board"),
  brewButton: document.querySelector("#brewButton"),
  undoButton: document.querySelector("#undoButton"),
  clearButton: document.querySelector("#clearButton"),
  nextButton: document.querySelector("#nextButton"),
  restartButton: document.querySelector("#restartButton"),
};

el.board.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-tile-id]");
  if (!tile) return;
  selectTile(Number(tile.dataset.tileId));
});
el.brewButton.addEventListener("click", brew);
el.undoButton.addEventListener("click", undo);
el.clearButton.addEventListener("click", clearSelection);
el.nextButton.addEventListener("click", nextLevel);
el.restartButton.addEventListener("click", () => loadLevel(state.levelIndex));

loadLevel(0);

function t(word, kind, flags = {}) {
  return { word, kind, used: false, locked: false, cracked: false, ...flags };
}

function loadLevel(index) {
  const level = levels[index];
  state.levelIndex = index;
  state.tiles = level.tiles.map((tile, id) => ({ ...tile, id }));
  state.selected = [];
  state.found = new Set();
  state.movesLeft = level.moves;
  state.score = 0;
  state.history = [];
  state.ghostCharge = false;
  el.message.textContent = "Build compound words from meaning fragments.";
  render();
}

function selectTile(id) {
  const tile = state.tiles[id];
  if (!tile || tile.used) return;
  if (tile.locked && !state.ghostCharge && tile.kind !== "ghost") {
    setMessage(`${tile.word} is locked. Brew GHOST to phase through one lock.`);
    return;
  }

  const existing = state.selected.indexOf(id);
  if (existing >= 0) {
    state.selected.splice(existing, 1);
  } else if (state.selected.length < 2) {
    state.selected.push(id);
  } else {
    state.selected.shift();
    state.selected.push(id);
  }
  render();
}

function brew() {
  if (state.selected.length !== 2 || state.movesLeft <= 0) return;
  saveHistory();

  const selectedTiles = state.selected.map((id) => state.tiles[id]);
  const key = selectedTiles.map((tile) => tile.word).join("+");
  const reverseKey = selectedTiles.map((tile) => tile.word).reverse().join("+");
  const word = combos.get(key) || combos.get(reverseKey);

  state.movesLeft -= 1;
  selectedTiles.forEach((tile) => {
    tile.used = true;
    if (tile.locked && state.ghostCharge) {
      tile.locked = false;
      state.ghostCharge = false;
    }
  });

  applyEffects(selectedTiles);

  if (word && levels[state.levelIndex].targets.includes(word)) {
    if (!state.found.has(word)) {
      state.found.add(word);
      state.score += 100 + state.movesLeft * 10;
      setMessage(`Brewed ${word}.`);
    } else {
      setMessage(`${word} was already found.`);
    }
  } else if (word) {
    state.score += 20;
    setMessage(`${word} is valid, but not a target here.`);
  } else {
    setMessage("The fragments spark, but no stable word forms.");
  }

  state.selected = [];
  checkEnd();
  render();
}

function applyEffects(selectedTiles) {
  for (const tile of selectedTiles) {
    if (tile.kind === "fire") {
      const cracked = state.tiles.find((candidate) => candidate.cracked && !candidate.used);
      if (cracked) {
        cracked.cracked = false;
        cracked.used = false;
      }
    }

    if (tile.kind === "water") {
      const used = [...state.tiles].reverse().find((candidate) => candidate.used && candidate.id !== tile.id);
      if (used) used.used = false;
    }

    if (tile.kind === "ghost") {
      state.ghostCharge = true;
    }

    if (tile.kind === "root") {
      const nature = state.tiles.find((candidate) => candidate.kind === "nature" && candidate.used);
      if (nature) nature.used = false;
    }
  }
}

function checkEnd() {
  const level = levels[state.levelIndex];
  if (state.found.size === level.targets.length) {
    setMessage("Level complete. The crucible holds.");
  } else if (state.movesLeft <= 0) {
    setMessage("No moves left. Restart or try another level.");
  }
}

function undo() {
  const previous = state.history.pop();
  if (!previous) return;
  state.tiles = previous.tiles;
  state.selected = previous.selected;
  state.found = new Set(previous.found);
  state.movesLeft = previous.movesLeft;
  state.score = previous.score;
  state.ghostCharge = previous.ghostCharge;
  setMessage("Undone.");
  render();
}

function saveHistory() {
  state.history.push({
    tiles: state.tiles.map((tile) => ({ ...tile })),
    selected: [...state.selected],
    found: [...state.found],
    movesLeft: state.movesLeft,
    score: state.score,
    ghostCharge: state.ghostCharge,
  });
}

function clearSelection() {
  state.selected = [];
  render();
}

function nextLevel() {
  loadLevel((state.levelIndex + 1) % levels.length);
}

function render() {
  const level = levels[state.levelIndex];
  el.levelName.textContent = level.name;
  el.moves.textContent = `${state.movesLeft} moves`;
  el.score.textContent = `${state.score}`;
  el.targets.innerHTML = level.targets.map((target) => (
    `<span class="target ${state.found.has(target) ? "done" : ""}">${target}</span>`
  )).join("");

  const selectedWords = state.selected.map((id) => state.tiles[id].word);
  el.selection.textContent = selectedWords.length ? selectedWords.join(" + ") : "Choose fragments";
  el.brewButton.disabled = state.selected.length !== 2 || state.movesLeft <= 0;
  el.undoButton.disabled = state.history.length === 0;

  el.board.innerHTML = state.tiles.map((tile) => {
    const selected = state.selected.includes(tile.id);
    const classes = [
      "tile",
      tile.kind,
      selected ? "selected" : "",
      tile.used ? "used" : "",
      tile.locked ? "locked" : "",
      tile.cracked ? "cracked" : "",
    ].filter(Boolean).join(" ");

    return `
      <button class="${classes}" type="button" data-tile-id="${tile.id}" ${tile.used ? "aria-disabled=\"true\"" : ""}>
        <span class="tile-word">${tile.word}</span>
        <span class="tile-kind">${tile.kind}</span>
      </button>
    `;
  }).join("");
}

function setMessage(text) {
  el.message.textContent = text;
}

