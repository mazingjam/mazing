const cards = [
  {
    id: "vanguard",
    name: "Vanguard",
    role: "Shield anchor",
    cost: 2,
    hp: 920,
    damage: 62,
    range: 2.2,
    speed: 0.34,
    attackType: "melee",
    sprite: "assets/sprites/normalized/vanguard.png",
    spriteBack: "assets/sprites/normalized/vanguard-back.png"
  },
  {
    id: "lancer",
    name: "Lancer",
    role: "Bridge pressure",
    cost: 3,
    hp: 620,
    damage: 118,
    range: 2.5,
    speed: 0.54,
    attackType: "melee",
    sprite: "assets/sprites/normalized/lancer.png",
    spriteBack: "assets/sprites/normalized/lancer-back.png"
  },
  {
    id: "arbalest",
    name: "Arbalest",
    role: "Backline control",
    cost: 2,
    hp: 430,
    damage: 86,
    range: 24,
    speed: 0.26,
    attackType: "ranged",
    sprite: "assets/sprites/normalized/arbalest.png",
    spriteBack: "assets/sprites/normalized/arbalest-back.png"
  },
  {
    id: "ember",
    name: "Ember Adept",
    role: "Burst caster",
    cost: 3,
    hp: 480,
    damage: 132,
    range: 13,
    speed: 0.3,
    attackType: "ranged",
    sprite: "assets/sprites/normalized/ember.png",
    spriteBack: "assets/sprites/normalized/ember-back.png"
  }
];

const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const arena = document.querySelector("#arena");
const preview = document.querySelector("#preview");
const hand = document.querySelector("#hand");
const towersEl = document.querySelector("#towers");
const unitsEl = document.querySelector("#units");
const effectsEl = document.querySelector("#effects");
const logEl = document.querySelector("#log");
const startOverlay = document.querySelector("#startOverlay");
const statusEl = document.querySelector("#status");
const frameReadout = document.querySelector("#frameReadout");
const hashReadout = document.querySelector("#hashReadout");
const inputReadout = document.querySelector("#inputReadout");
const etherReadout = document.querySelector("#etherReadout");
const etherFill = document.querySelector("#etherFill");
const clockEl = document.querySelector("#clock");
const blueScore = document.querySelector("#blueScore");
const redScore = document.querySelector("#redScore");

const MATCH_SECONDS = 120;
const SIM_STEP = 1 / 30;
const ETHER_PER_SECOND = 0.42;
const OPPONENT_FIRST_SPAWN = 7;
const OPPONENT_SPAWN_INTERVAL = 8.5;

const state = {
  running: false,
  frame: 0,
  elapsedSeconds: 0,
  accumulator: 0,
  inputs: [],
  ether: 0,
  maxEther: 10,
  units: [],
  towers: [],
  nextOpponent: OPPONENT_FIRST_SPAWN,
  opponentIndex: 0,
  lastTime: 0,
  drag: null
};

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).slice(0, 6).padStart(6, "0");
}

function log(text) {
  const item = document.createElement("li");
  item.textContent = text;
  logEl.appendChild(item);
}

function spriteStyle(card) {
  return `background-image:url('${card.sprite}')`;
}

function unitSpriteStyle(card, unit) {
  const asset = unit.facing === "back" ? card.spriteBack : card.sprite;
  return `background-image:url('${asset}')`;
}

function createTowers() {
  const tower = (id, side, x, y, king = false) => ({
    id,
    side,
    x,
    y,
    hp: king ? 2600 : 1800,
    maxHp: king ? 2600 : 1800,
    king,
    range: king ? 24 : 20,
    damage: king ? 92 : 74,
    reload: king ? 0.9 : 0.78,
    cooldown: king ? 0.24 : 0,
    attackFrame: -100
  });

  return [
    tower("red-left", "red", 28, 18),
    tower("red-king", "red", 50, 9, true),
    tower("red-right", "red", 72, 18),
    tower("blue-left", "blue", 28, 82),
    tower("blue-king", "blue", 50, 91, true),
    tower("blue-right", "blue", 72, 82)
  ];
}

function getDeck() {
  return cards;
}

function renderHand() {
  hand.innerHTML = "";
  const deck = getDeck();
  if (!deck.length) {
    return;
  }
  deck.forEach((card) => {
    const button = document.createElement("button");
    const disabled = !state.running || state.ether < card.cost;
    button.type = "button";
    button.className = `hand-card ${disabled ? "disabled" : ""}`;
    button.dataset.card = card.id;
    button.innerHTML = `
      <span class="hand-cost">${card.cost}</span>
      <span class="hand-art"><span class="hand-sprite" style="${spriteStyle(card)}"></span></span>
      <span class="hand-copy"><strong>${card.name}</strong><span>${card.role}</span></span>
    `;
    button.addEventListener("pointerdown", (event) => beginDrag(event, card, button));
    hand.appendChild(button);
  });
}

function renderTowers() {
  towersEl.innerHTML = "";
  state.towers.forEach((tower) => {
    const el = document.createElement("div");
    const hp = Math.max(0, tower.hp);
    el.className = `tower ${tower.side} ${tower.king ? "king" : ""} ${tower.attackFrame > state.frame - 9 ? "attacking" : ""}`;
    el.style.left = `${tower.x}%`;
    el.style.top = `${tower.y}%`;
    el.innerHTML = `
      <span class="tower-shadow"></span>
      <span class="tower-art"></span>
      <span class="tower-team-mark"></span>
      <span class="hp"><i style="width:${(hp / tower.maxHp) * 100}%"></i></span>
    `;
    towersEl.appendChild(el);
  });
}

function renderUnits() {
  unitsEl.innerHTML = "";
  state.units.forEach((unit) => {
    const card = cards.find((entry) => entry.id === unit.cardId);
    const el = document.createElement("div");
    el.className = `unit ${unit.side} ${unit.mode} ${unit.hitFrame > state.frame - 8 ? "hit" : ""}`;
    el.style.left = `${unit.x}%`;
    el.style.top = `${unit.y}%`;
    el.style.zIndex = String(100 + Math.round(unit.y * 10));
    el.innerHTML = `<span class="team-shadow"></span><span class="team-mark"></span><span class="unit-sprite" style="${unitSpriteStyle(card, unit)};background-position:${spriteFramePosition(unit)}"></span><span class="hp"><i style="width:${Math.max(0, unit.hp / unit.maxHp) * 100}%"></i></span>`;
    unitsEl.appendChild(el);
  });
}

function spriteFramePosition(unit) {
  const walkFrames = [0, 1, 2, 3, 4, 5].map(framePosition);
  const combatFrames = [6, 7, 8, 9, 10, 11].map(framePosition);
  const frames = unit.mode === "attack" ? combatFrames : walkFrames;
  const cadence = unit.mode === "attack" ? 3 : 4;
  const index = Math.floor(state.frame / cadence) % frames.length;
  return `${frames[index]} 0`;
}

function framePosition(index) {
  return `${(index / 11) * 100}%`;
}

function beginDrag(event, card, source) {
  if (!state.running || state.ether < card.cost) return;
  event.preventDefault();
  source.classList.add("dragging-source");
  const ghost = document.createElement("div");
  ghost.className = "drag-ghost";
  ghost.innerHTML = `
    <span class="hand-cost">${card.cost}</span>
    <span class="hand-art"><span class="hand-sprite" style="${spriteStyle(card)}"></span></span>
    <span class="hand-copy"><strong>${card.name}</strong><span>${card.role}</span></span>
  `;
  document.body.appendChild(ghost);
  state.drag = { card, source, ghost, valid: false, x: 0, y: 0 };
  moveDrag(event);
  window.addEventListener("pointermove", moveDrag);
  window.addEventListener("pointerup", endDrag, { once: true });
}

function moveDrag(event) {
  if (!state.drag) return;
  const { ghost } = state.drag;
  ghost.style.left = `${event.clientX}px`;
  ghost.style.top = `${event.clientY}px`;
  const place = clientToArena(event.clientX, event.clientY);
  state.drag.x = place.x;
  state.drag.y = place.y;
  state.drag.valid = place.inside && place.y >= 56 && place.y <= 94 && state.ether >= state.drag.card.cost;
  preview.hidden = !place.inside;
  preview.classList.toggle("invalid", !state.drag.valid);
  preview.style.left = `${place.x}%`;
  preview.style.top = `${place.y}%`;
}

function endDrag() {
  if (!state.drag) return;
  window.removeEventListener("pointermove", moveDrag);
  const drag = state.drag;
  drag.source.classList.remove("dragging-source");
  drag.ghost.remove();
  preview.hidden = true;
  state.drag = null;
  if (drag.valid) deploy("blue", drag.card, drag.x, drag.y, true);
  else log("Card returned. Deploy inside the blue half with enough ether.");
}

function clientToArena(clientX, clientY) {
  const rect = arena.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * 100;
  const y = ((clientY - rect.top) / rect.height) * 100;
  return {
    x: Math.max(4, Math.min(96, x)),
    y: Math.max(4, Math.min(96, y)),
    inside: clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom
  };
}

function deploy(side, card, x, y, isInput) {
  if (isInput) {
    state.ether = Math.max(0, state.ether - card.cost);
    state.inputs.push({ frame: state.frame, time: Number(state.elapsedSeconds.toFixed(2)), card: card.id, x: Math.round(x), y: Math.round(y) });
  }
  state.units.push({
    id: `${side}-${state.frame}-${card.id}-${state.units.length}`,
    side,
    cardId: card.id,
    x,
    y,
    hp: card.hp,
    maxHp: card.hp,
    damage: card.damage,
    range: card.range,
    speed: card.speed,
    attackType: card.attackType,
    cooldown: 0,
    mode: "idle",
    facing: side === "blue" ? "back" : "front",
    hitFrame: -100
  });
  effect("deploy", x, y);
  log(`${side === "blue" ? "You deploy" : "Opponent deploys"} ${card.name}.`);
  renderHand();
}

function effect(type, x, y) {
  const el = document.createElement("div");
  el.className = `effect ${type}`;
  el.style.left = `${x}%`;
  el.style.top = `${y}%`;
  effectsEl.appendChild(el);
  window.setTimeout(() => el.remove(), 520);
}

function projectile(fromX, fromY, toX, toY, side) {
  return fireProjectile(fromX, fromY, toX, toY, side, "unit-shot");
}

function fireProjectile(fromX, fromY, toX, toY, side, kind) {
  const el = document.createElement("div");
  const dx = toX - fromX;
  const dy = toY - fromY;
  const length = Math.max(1, Math.hypot(dx, dy));
  el.className = `projectile ${side} ${kind}`;
  el.style.left = `${fromX}%`;
  el.style.top = `${fromY}%`;
  el.style.width = `${length}%`;
  el.style.transform = `translate(0, -50%) rotate(${Math.atan2(dy, dx)}rad)`;
  effectsEl.appendChild(el);
  effect("hit", toX, toY);
  window.setTimeout(() => el.remove(), kind === "tower-shot" ? 360 : 460);
}

function start() {
  state.running = true;
  state.frame = 0;
  state.elapsedSeconds = 0;
  state.accumulator = 0;
  state.inputs = [];
  state.ether = 10;
  state.units = [];
  state.towers = createTowers();
  state.nextOpponent = OPPONENT_FIRST_SPAWN;
  state.opponentIndex = 0;
  state.lastTime = 0;
  statusEl.textContent = "Playing";
  startOverlay.classList.add("hidden");
  startBtn.disabled = true;
  startBtn.textContent = "Playing";
  logEl.innerHTML = "";
  log("Slice started. Drag from hand into the blue half.");
  renderTowers();
  renderHand();
  requestAnimationFrame(loop);
}

function reset() {
  state.running = false;
  state.frame = 0;
  state.elapsedSeconds = 0;
  state.accumulator = 0;
  state.inputs = [];
  state.ether = 0;
  state.units = [];
  state.towers = createTowers();
  state.nextOpponent = OPPONENT_FIRST_SPAWN;
  state.opponentIndex = 0;
  state.lastTime = 0;
  statusEl.textContent = "Ready";
  startBtn.textContent = "Start Slice";
  startBtn.disabled = false;
  startOverlay.classList.remove("hidden");
  logEl.innerHTML = "";
  log("Ready. Press Start, then drag cards from your hand.");
  renderTowers();
  renderUnits();
  renderHand();
  updateReadouts();
}

function loop(time) {
  if (!state.running) return;
  const now = time / 1000;
  if (!state.lastTime) state.lastTime = now;
  const delta = Math.min(0.12, now - state.lastTime);
  state.lastTime = now;
  state.elapsedSeconds = Math.min(MATCH_SECONDS, state.elapsedSeconds + delta);
  state.accumulator += delta;
  while (state.accumulator >= SIM_STEP && state.running) {
    tick(SIM_STEP);
    state.accumulator -= SIM_STEP;
  }
  renderTowers();
  renderUnits();
  updateReadouts();
  if (state.running) requestAnimationFrame(loop);
}

function tick(dt) {
  state.frame += 1;
  state.ether = Math.min(state.maxEther, state.ether + ETHER_PER_SECOND * dt);
  if (state.elapsedSeconds >= state.nextOpponent) {
    const card = cards[state.opponentIndex % cards.length];
    const lane = state.opponentIndex % 2 === 0 ? 31 : 69;
    deploy("red", card, lane, 44, false);
    state.opponentIndex += 1;
    state.nextOpponent += OPPONENT_SPAWN_INTERVAL;
  }
  state.units.forEach((unit) => updateUnit(unit, dt));
  updateTowers(dt);
  resolveUnitSpacing();
  state.units = state.units.filter((unit) => unit.hp > 0 && unit.y > 1 && unit.y < 99);
  if (state.elapsedSeconds >= MATCH_SECONDS) {
    state.running = false;
    statusEl.textContent = "Complete";
    log(`Slice complete. Final hash ${computeHash()}.`);
    renderHand();
  }
}

function updateUnit(unit, dt) {
  if (unit.cooldown > 0) unit.cooldown -= dt;
  const target = nearestTarget(unit);
  if (!target) {
    unit.mode = "idle";
    return;
  }
  const gap = distance(unit, target);
  unit.facing = target.y < unit.y ? "back" : "front";
  if (gap <= unit.range) {
    unit.mode = "attack";
    if (unit.cooldown <= 0) {
      target.hp -= unit.damage;
      target.hitFrame = state.frame;
      unit.cooldown = unit.attackType === "ranged" ? 1.45 : 1.05;
      if (unit.attackType === "ranged") projectile(unit.x, unit.y, target.x, target.y, unit.side);
      else effect("hit", target.x, target.y);
    }
    return;
  }
  unit.mode = "walk";
  const dx = target.x - unit.x;
  const dy = target.y - unit.y;
  const length = Math.max(0.001, Math.hypot(dx, dy));
  const movement = unit.speed * 4.2 * dt;
  unit.x += (dx / length) * movement;
  unit.y += (dy / length) * movement;
}

function updateTowers(dt) {
  state.towers.forEach((tower) => {
    if (tower.hp <= 0) return;
    if (tower.cooldown > 0) tower.cooldown -= dt;
    const target = nearestEnemyUnit(tower);
    if (!target || distance(tower, target) > tower.range || tower.cooldown > 0) return;
    target.hp -= tower.damage;
    target.hitFrame = state.frame;
    tower.cooldown = tower.reload;
    tower.attackFrame = state.frame;
    fireProjectile(tower.x, tower.y - (tower.king ? 1.7 : 1.2), target.x, target.y - 1.2, tower.side, "tower-shot");
  });
}

function nearestEnemyUnit(source) {
  return state.units
    .filter((unit) => unit.side !== source.side && unit.hp > 0)
    .sort((a, b) => distance(source, a) - distance(source, b))[0];
}

function resolveUnitSpacing() {
  const minGap = 2.5;
  for (let i = 0; i < state.units.length; i += 1) {
    for (let j = i + 1; j < state.units.length; j += 1) {
      const a = state.units[i];
      const b = state.units[j];
      if (a.hp <= 0 || b.hp <= 0) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const gap = Math.hypot(dx, dy);
      if (gap <= 0.001 || gap >= minGap) continue;
      const push = (minGap - gap) * 0.035;
      const nx = dx / gap;
      const ny = dy / gap;
      a.x = Math.max(5, Math.min(95, a.x - nx * push));
      a.y = Math.max(5, Math.min(95, a.y - ny * push));
      b.x = Math.max(5, Math.min(95, b.x + nx * push));
      b.y = Math.max(5, Math.min(95, b.y + ny * push));
    }
  }
}

function nearestTarget(unit) {
  const enemyUnits = state.units.filter((other) => other.side !== unit.side && other.hp > 0);
  const enemyTowers = state.towers.filter((tower) => tower.side !== unit.side && tower.hp > 0);
  return [...enemyUnits, ...enemyTowers].sort((a, b) => distance(unit, a) - distance(unit, b))[0];
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function updateReadouts() {
  frameReadout.textContent = String(state.frame);
  hashReadout.textContent = computeHash();
  inputReadout.textContent = String(state.inputs.length);
  etherReadout.textContent = state.ether.toFixed(1);
  etherFill.style.width = `${(state.ether / state.maxEther) * 100}%`;
  const seconds = Math.max(0, Math.ceil(MATCH_SECONDS - state.elapsedSeconds));
  clockEl.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  const blue = state.towers.filter((tower) => tower.side === "blue" && tower.hp > 0).length;
  const red = state.towers.filter((tower) => tower.side === "red" && tower.hp > 0).length;
  blueScore.textContent = `${blue} tower${blue === 1 ? "" : "s"}`;
  redScore.textContent = `${red} tower${red === 1 ? "" : "s"}`;
  if (state.frame % 12 === 0) renderHand();
}

function computeHash() {
  const source = [
    state.frame,
    state.elapsedSeconds.toFixed(2),
    state.inputs.map((entry) => `${entry.frame}:${entry.time}:${entry.card}:${entry.x}:${entry.y}`).join(","),
    state.towers.map((tower) => `${tower.id}:${Math.round(tower.hp)}`).join(","),
    state.units.map((unit) => `${unit.cardId}:${unit.side}:${Math.round(unit.x)}:${Math.round(unit.y)}:${Math.round(unit.hp)}`).join(",")
  ].join("|");
  return hashString(source);
}

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);

reset();
