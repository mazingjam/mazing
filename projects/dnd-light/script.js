const options = {
  race: [
    {
      id: "human",
      label: "Human",
      detail: "Balanced, adaptable, easy first choice.",
      stats: { heart: 1, action: 0, luck: 1 },
    },
    {
      id: "elf",
      label: "Elf",
      detail: "Quick, perceptive, good with magic.",
      stats: { heart: 0, action: 1, luck: 1 },
    },
    {
      id: "dwarf",
      label: "Dwarf",
      detail: "Sturdy, practical, hard to knock down.",
      stats: { heart: 2, action: 0, luck: 0 },
    },
    {
      id: "goblin",
      label: "Goblin",
      detail: "Small, lucky, dangerous when underestimated.",
      stats: { heart: 0, action: 0, luck: 2 },
    },
  ],
  gender: [
    { id: "female", label: "Female", detail: "Feminine presentation." },
    { id: "male", label: "Male", detail: "Masculine presentation." },
  ],
  class: [
    {
      id: "fighter",
      label: "Fighter",
      detail: "Simple attacks and reliable defense.",
      name: "The Ready Blade",
      stats: { heart: 2, action: 1, luck: 0 },
    },
    {
      id: "mage",
      label: "Mage",
      detail: "Bright spells and clever answers.",
      name: "The Lantern Mind",
      stats: { heart: 0, action: 2, luck: 1 },
    },
    {
      id: "ranger",
      label: "Ranger",
      detail: "Exploration, ranged pressure, survival.",
      name: "The Green Trail",
      stats: { heart: 1, action: 1, luck: 1 },
    },
    {
      id: "rogue",
      label: "Rogue",
      detail: "Sneaky solutions and high-risk turns.",
      name: "The Locksmile",
      stats: { heart: 0, action: 1, luck: 2 },
    },
  ],
  style: [
    { id: "ember", label: "Ember", detail: "Red cloth, brass details, auburn hair.", aura: "#e85f4f" },
    { id: "moss", label: "Moss", detail: "Green cloth, leather details, brown hair.", aura: "#75c778" },
    { id: "moon", label: "Moon", detail: "Blue cloth, silver details, black hair.", aura: "#6eb5ff" },
    { id: "sun", label: "Sun", detail: "Gold cloth, white details, blond hair.", aura: "#e9d68b" },
  ],
};

const panels = ["gender", "style", "race", "class"];
const state = {
  panel: "gender",
  race: "human",
  gender: "female",
  class: "fighter",
  style: "ember",
};

const choicePanel = document.querySelector("#choicePanel");
const portraitImage = document.querySelector("#portraitImage");
const styleAura = document.querySelector("#styleAura");
const heroKicker = document.querySelector("#heroKicker");
const heroName = document.querySelector("#heroName");
const heartStat = document.querySelector("#heartStat");
const actionStat = document.querySelector("#actionStat");
const luckStat = document.querySelector("#luckStat");
const tabs = [...document.querySelectorAll(".tab")];

function selected(kind) {
  return options[kind].find((item) => item.id === state[kind]);
}

function renderChoices() {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.panel === state.panel));
  choicePanel.innerHTML = "";

  options[state.panel].forEach((item) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.classList.toggle("is-selected", item.id === state[state.panel]);
    button.append(choiceThumb(state.panel, item), choiceLabel(item.label));
    button.addEventListener("click", () => {
      state[state.panel] = item.id;
      render();
    });
    choicePanel.append(button);
  });
}

function choiceLabel(label) {
  const strong = document.createElement("strong");
  strong.textContent = label;
  return strong;
}

function choiceThumb(kind, item) {
  const thumb = document.createElement("span");
  thumb.className = "choice-thumb";

  if (kind === "style") {
    thumb.classList.add("is-swatch");
    thumb.style.setProperty("--swatch", item.aura);
    return thumb;
  }

  const race = kind === "race" ? item.id : state.race;
  const heroClass = kind === "class" ? item.id : state.class;
  const gender = kind === "gender" ? item.id : state.gender;
  const style = state.style;
  const image = document.createElement("img");
  image.src = `assets/images/characters/${race}-${heroClass}-${gender}-${style}.png`;
  image.alt = "";
  thumb.append(image);
  return thumb;
}

function totalStats() {
  const base = { heart: 5, action: 1, luck: 0 };
  [selected("race"), selected("class")].forEach((item) => {
    Object.entries(item.stats ?? {}).forEach(([key, value]) => {
      base[key] += value;
    });
  });
  return base;
}

function renderHero() {
  const race = selected("race");
  const gender = selected("gender");
  const heroClass = selected("class");
  const style = selected("style");
  const stats = totalStats();

  portraitImage.src = `assets/images/characters/${race.id}-${heroClass.id}-${gender.id}-${style.id}.png`;
  styleAura.style.setProperty("--aura", style.aura);
  heroKicker.textContent = `${race.label} ${gender.label} ${style.label} ${heroClass.label}`;
  heroName.textContent = heroClass.name;
  heartStat.textContent = stats.heart;
  actionStat.textContent = stats.action;
  luckStat.textContent = stats.luck;
}

function setPanel(panel) {
  state.panel = panel;
  render();
}

function step(offset) {
  const index = panels.indexOf(state.panel);
  setPanel(panels[Math.max(0, Math.min(panels.length - 1, index + offset))]);
}

function randomize() {
  Object.keys(options).forEach((kind) => {
    const list = options[kind];
    state[kind] = list[Math.floor(Math.random() * list.length)].id;
  });
  render();
}

function render() {
  renderChoices();
  renderHero();
}

tabs.forEach((tab) => tab.addEventListener("click", () => setPanel(tab.dataset.panel)));
document.querySelector("#backButton").addEventListener("click", () => step(-1));
document.querySelector("#nextButton").addEventListener("click", () => step(1));
document.querySelector("#randomButton").addEventListener("click", randomize);

render();
