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

const locations = [
  {
    id: "sunspire",
    name: "Sunspire",
    type: "Town",
    image: "assets/images/adventure/sunspire-town.png",
    x: 50,
    y: 34,
    description: "A bright hill town of banners, warm stone, and roadward towers.",
  },
  {
    id: "mistmarket",
    name: "Mistmarket",
    type: "Town",
    image: "assets/images/adventure/mistmarket-town.png",
    x: 24,
    y: 42,
    description: "A riverside market where lanterns burn through morning fog.",
  },
  {
    id: "harborbell",
    name: "Harborbell",
    type: "Town",
    image: "assets/images/adventure/harborbell-town.png",
    x: 25,
    y: 74,
    description: "A cliffside harbor town where bright sails ring the bay.",
  },
  {
    id: "stormcrown",
    name: "Stormcrown Peak",
    type: "Mountain",
    image: "assets/images/adventure/stormcrown-mountain.png",
    x: 48,
    y: 17,
    description: "A crystal mountain pass under rolling thunder and clean snow.",
  },
  {
    id: "mirrorwake",
    name: "Mirrorwake Lake",
    type: "Lake",
    image: "assets/images/adventure/mirrorwake-lake.png",
    x: 59,
    y: 65,
    description: "A clear magical lake reflecting lights that are not in the sky.",
  },
  {
    id: "emberwild",
    name: "Emberwild",
    type: "Forest",
    image: "assets/images/adventure/emberwild-forest.png",
    x: 85,
    y: 48,
    description: "A strange warm forest of red leaves, giant flowers, and hidden paths.",
  },
  {
    id: "starfall",
    name: "Starfall Ruins",
    type: "Ruins",
    image: "assets/images/adventure/starfall-ruins.png",
    x: 76,
    y: 80,
    description: "An overgrown observatory built around a fallen crystal star.",
  },
];

const panels = ["gender", "style", "race", "class"];
const maxPartySize = 4;
const state = {
  panel: "gender",
  race: "human",
  gender: "female",
  class: "fighter",
  style: "ember",
  party: loadParty(),
  adventureView: "party",
  location: "sunspire",
};

const choicePanel = document.querySelector("#choicePanel");
const portraitImage = document.querySelector("#portraitImage");
const styleAura = document.querySelector("#styleAura");
const heroKicker = document.querySelector("#heroKicker");
const heroName = document.querySelector("#heroName");
const characterName = document.querySelector("#characterName");
const heartStat = document.querySelector("#heartStat");
const actionStat = document.querySelector("#actionStat");
const luckStat = document.querySelector("#luckStat");
const partyCount = document.querySelector("#partyCount");
const partySlots = document.querySelector("#partySlots");
const saveHeroButton = document.querySelector("#saveHeroButton");
const startAdventureButton = document.querySelector("#startAdventureButton");
const creatorStage = document.querySelector("#creatorStage");
const creatorControls = document.querySelector("#creatorControls");
const adventureStage = document.querySelector("#adventureStage");
const adventureBg = document.querySelector("#adventureBg");
const adventureTitle = document.querySelector("#adventureTitle");
const adventureParty = document.querySelector("#adventureParty");
const adventureSummary = document.querySelector("#adventureSummary");
const adventureTabs = [...document.querySelectorAll(".adventure-tab")];
const partyView = document.querySelector("#partyView");
const mapView = document.querySelector("#mapView");
const locationView = document.querySelector("#locationView");
const mapPoints = document.querySelector("#mapPoints");
const locationType = document.querySelector("#locationType");
const locationName = document.querySelector("#locationName");
const locationDescription = document.querySelector("#locationDescription");
const tabs = [...document.querySelectorAll(".tab")];

function loadParty() {
  try {
    const saved = JSON.parse(localStorage.getItem("dnd-light-party") ?? "[]");
    return Array.isArray(saved) ? saved.slice(0, maxPartySize) : [];
  } catch {
    return [];
  }
}

function saveParty() {
  localStorage.setItem("dnd-light-party", JSON.stringify(state.party));
}

function selected(kind) {
  return options[kind].find((item) => item.id === state[kind]);
}

function characterImage(character = state) {
  return `assets/images/characters/${character.race}-${character.class}-${character.gender}-${character.style}.png`;
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
  image.src = characterImage({ race, class: heroClass, gender, style });
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

  portraitImage.src = characterImage();
  styleAura.style.setProperty("--aura", style.aura);
  heroKicker.textContent = `${race.label} ${gender.label} ${style.label} ${heroClass.label}`;
  heroName.textContent = heroClass.name;
  heartStat.textContent = stats.heart;
  actionStat.textContent = stats.action;
  luckStat.textContent = stats.luck;
}

function createPartyMember() {
  const stats = totalStats();
  const race = selected("race");
  const gender = selected("gender");
  const heroClass = selected("class");
  const style = selected("style");
  const fallbackName = `${style.label} ${heroClass.label}`;

  return {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: characterName.value.trim() || fallbackName,
    race: race.id,
    gender: gender.id,
    class: heroClass.id,
    style: style.id,
    title: heroClass.name,
    summary: `${race.label} ${gender.label} ${style.label} ${heroClass.label}`,
    stats,
  };
}

function renderParty() {
  partyCount.textContent = `${state.party.length}/${maxPartySize}`;
  saveHeroButton.disabled = state.party.length >= maxPartySize;
  startAdventureButton.disabled = state.party.length === 0;
  partySlots.innerHTML = "";

  for (let index = 0; index < maxPartySize; index++) {
    const member = state.party[index];
    const slot = document.createElement("article");
    slot.className = "party-slot";

    if (member) {
      const image = document.createElement("img");
      image.src = characterImage(member);
      image.alt = "";
      const label = document.createElement("strong");
      label.textContent = member.name;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.setAttribute("aria-label", `Remove ${member.name}`);
      remove.textContent = "x";
      remove.addEventListener("click", () => removePartyMember(member.id));
      slot.append(image, label, remove);
    } else {
      const empty = document.createElement("span");
      empty.textContent = "+";
      slot.classList.add("is-empty");
      slot.append(empty);
    }

    partySlots.append(slot);
  }
}

function addCurrentHero() {
  if (state.party.length >= maxPartySize) return;
  state.party.push(createPartyMember());
  characterName.value = "";
  saveParty();
  render();
}

function removePartyMember(id) {
  state.party = state.party.filter((member) => member.id !== id);
  saveParty();
  render();
}

function startAdventure() {
  if (state.party.length === 0) return;
  creatorStage.hidden = true;
  creatorControls.hidden = true;
  adventureStage.hidden = false;
  renderAdventure();
}

function backToCreator() {
  adventureStage.hidden = true;
  creatorStage.hidden = false;
  creatorControls.hidden = false;
}

function selectedLocation() {
  return locations.find((location) => location.id === state.location) ?? locations[0];
}

function setAdventureView(view) {
  state.adventureView = view;
  renderAdventure();
}

function travelTo(locationId) {
  state.location = locationId;
  state.adventureView = "location";
  renderAdventure();
}

function renderAdventure() {
  const location = selectedLocation();
  const viewConfig = {
    party: {
      title: "The Old Road",
      image: "assets/images/adventure/party-road.png",
      summary: `${state.party.length} hero${state.party.length === 1 ? "" : "es"} stand ready at the first marker.`,
    },
    map: {
      title: "Brightreach",
      image: "assets/images/adventure/fantasyland-map.png",
      summary: "Choose a place on the map to travel there.",
    },
    location: {
      title: location.name,
      image: location.image,
      summary: `${location.name}: ${location.description}`,
    },
  }[state.adventureView];

  adventureTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.adventureView === state.adventureView);
  });
  partyView.hidden = state.adventureView !== "party";
  mapView.hidden = state.adventureView !== "map";
  locationView.hidden = state.adventureView !== "location";
  adventureTitle.textContent = viewConfig.title;
  adventureBg.src = viewConfig.image;
  adventureSummary.textContent = viewConfig.summary;

  adventureParty.innerHTML = "";
  state.party.forEach((member) => {
    const card = document.createElement("article");
    card.className = "adventure-member";
    const image = document.createElement("img");
    image.src = characterImage(member);
    image.alt = "";
    const label = document.createElement("strong");
    label.textContent = member.name;
    const meta = document.createElement("span");
    meta.textContent = member.summary;
    card.append(image, label, meta);
    adventureParty.append(card);
  });

  mapPoints.innerHTML = "";
  locations.forEach((item) => {
    const button = document.createElement("button");
    button.className = "map-point";
    button.type = "button";
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.setAttribute("aria-label", `Travel to ${item.name}`);
    const label = document.createElement("span");
    label.textContent = item.name;
    button.append(label);
    button.addEventListener("click", () => travelTo(item.id));
    mapPoints.append(button);
  });

  locationType.textContent = location.type;
  locationName.textContent = location.name;
  locationDescription.textContent = location.description;
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
  renderParty();
}

tabs.forEach((tab) => tab.addEventListener("click", () => setPanel(tab.dataset.panel)));
document.querySelector("#backButton").addEventListener("click", () => step(-1));
document.querySelector("#nextButton").addEventListener("click", () => step(1));
document.querySelector("#randomButton").addEventListener("click", randomize);
saveHeroButton.addEventListener("click", addCurrentHero);
startAdventureButton.addEventListener("click", startAdventure);
document.querySelector("#backToCreatorButton").addEventListener("click", backToCreator);
adventureTabs.forEach((tab) => {
  tab.addEventListener("click", () => setAdventureView(tab.dataset.adventureView));
});

render();
