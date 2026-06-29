const text = {
  en: {
    chooseLanguage: "Choose Language",
    createHero: "Create Hero",
    gender: "Gender",
    style: "Style",
    race: "Race",
    class: "Class",
    name: "Name",
    party: "Party",
    back: "Back",
    next: "Next",
    add: "Add",
    start: "Start",
    map: "Map",
    location: "Location",
    gold: "Gold",
    items: "Items",
    heart: "Heart",
    action: "Action",
    luck: "Luck",
    locked: "Later",
    current: "Here",
    travel: "Travel",
    firstMarker: "First Marker",
    firstMarkerSummary: "Your party begins at the First Marker. Two roads are open.",
    chooseRoad: "Choose one of the two open roads.",
    ready: "ready at the First Marker.",
    noEncounter: "This place is quiet for now.",
    rewardGold: "Gold",
    rewardItem: "Item",
    rewardStat: "Training",
    noItems: "No items",
  },
  sv: {
    chooseLanguage: "Välj språk",
    createHero: "Skapa hjälte",
    gender: "Kön",
    style: "Stil",
    race: "Folk",
    class: "Klass",
    name: "Namn",
    party: "Grupp",
    back: "Tillbaka",
    next: "Nästa",
    add: "Lägg till",
    start: "Starta",
    map: "Karta",
    location: "Plats",
    gold: "Guld",
    items: "Saker",
    heart: "Hjärta",
    action: "Handling",
    luck: "Tur",
    locked: "Senare",
    current: "Här",
    travel: "Res",
    firstMarker: "Första märket",
    firstMarkerSummary: "Gruppen börjar vid Första märket. Två vägar är öppna.",
    chooseRoad: "Välj en av de två öppna vägarna.",
    ready: "redo vid Första märket.",
    noEncounter: "Den här platsen är lugn just nu.",
    rewardGold: "Guld",
    rewardItem: "Sak",
    rewardStat: "Träning",
    noItems: "Inga saker",
  },
};

const options = {
  race: [
    { id: "human", label: { en: "Human", sv: "Människa" }, stats: { heart: 1, action: 0, luck: 1 } },
    { id: "elf", label: { en: "Elf", sv: "Alv" }, stats: { heart: 0, action: 1, luck: 1 } },
    { id: "dwarf", label: { en: "Dwarf", sv: "Dvärg" }, stats: { heart: 2, action: 0, luck: 0 } },
    { id: "goblin", label: { en: "Goblin", sv: "Goblin" }, stats: { heart: 0, action: 0, luck: 2 } },
  ],
  gender: [
    { id: "female", label: { en: "Female", sv: "Kvinna" } },
    { id: "male", label: { en: "Male", sv: "Man" } },
  ],
  class: [
    {
      id: "fighter",
      label: { en: "Fighter", sv: "Kämpe" },
      name: { en: "The Ready Blade", sv: "Det redo bladet" },
      stats: { heart: 2, action: 1, luck: 0 },
    },
    {
      id: "mage",
      label: { en: "Mage", sv: "Magiker" },
      name: { en: "The Lantern Mind", sv: "Lyktans sinne" },
      stats: { heart: 0, action: 2, luck: 1 },
    },
    {
      id: "ranger",
      label: { en: "Ranger", sv: "Vägvisare" },
      name: { en: "The Green Trail", sv: "Den gröna stigen" },
      stats: { heart: 1, action: 1, luck: 1 },
    },
    {
      id: "rogue",
      label: { en: "Rogue", sv: "Skugga" },
      name: { en: "The Locksmile", sv: "Låsets leende" },
      stats: { heart: 0, action: 1, luck: 2 },
    },
  ],
  style: [
    { id: "ember", label: { en: "Ember", sv: "Glöd" }, aura: "#e85f4f" },
    { id: "moss", label: { en: "Moss", sv: "Mossa" }, aura: "#75c778" },
    { id: "moon", label: { en: "Moon", sv: "Måne" }, aura: "#6eb5ff" },
    { id: "sun", label: { en: "Sun", sv: "Sol" }, aura: "#e9d68b" },
  ],
};

const locations = [
  {
    id: "first-marker",
    name: { en: "First Marker", sv: "Första märket" },
    type: { en: "Start", sv: "Start" },
    image: "assets/images/adventure/party-road.png",
    x: 50,
    y: 91,
    description: {
      en: "A painted roadstone points toward two possible first journeys.",
      sv: "En målad vägsten pekar mot två möjliga första färder.",
    },
  },
  {
    id: "mistmarket",
    name: { en: "Mistmarket", sv: "Dimmhamn" },
    type: { en: "Town", sv: "Stad" },
    image: "assets/images/adventure/mistmarket-town.png",
    x: 26,
    y: 64,
    description: {
      en: "A lantern market of fog, bridges, missing parcels, and rumors.",
      sv: "En lykttänd marknad av dimma, broar, saknade paket och rykten.",
    },
  },
  {
    id: "emberwild",
    name: { en: "Emberwild", sv: "Glödskogen" },
    type: { en: "Forest", sv: "Skog" },
    image: "assets/images/adventure/emberwild-forest.png",
    x: 65,
    y: 56,
    description: {
      en: "A warm forest where glowing roots move when nobody watches.",
      sv: "En varm skog där lysande rötter rör sig när ingen tittar.",
    },
  },
  {
    id: "sunspire",
    name: { en: "Sunspire", sv: "Solspira" },
    type: { en: "Town", sv: "Stad" },
    image: "assets/images/adventure/sunspire-town.png",
    x: 30,
    y: 29,
    description: {
      en: "A bright hill town of banners, warm stone, and roadward towers.",
      sv: "En ljus kullstad med fanor, varm sten och torn mot vägarna.",
    },
  },
  {
    id: "mirrorwake",
    name: { en: "Mirrorwake Lake", sv: "Spegelvaksjön" },
    type: { en: "Lake", sv: "Sjö" },
    image: "assets/images/adventure/mirrorwake-lake.png",
    x: 47,
    y: 39,
    description: {
      en: "A clear magical lake reflecting lights that are not in the sky.",
      sv: "En klar magisk sjö som speglar ljus som inte finns på himlen.",
    },
  },
  {
    id: "stormcrown",
    name: { en: "Stormcrown Peak", sv: "Stormkronan" },
    type: { en: "Mountain", sv: "Berg" },
    image: "assets/images/adventure/stormcrown-mountain.png",
    x: 51,
    y: 14,
    description: {
      en: "A crystal mountain pass under rolling thunder and clean snow.",
      sv: "Ett kristallpass under mullrande åska och ren snö.",
    },
  },
  {
    id: "harborbell",
    name: { en: "Harborbell", sv: "Hamarklocka" },
    type: { en: "Town", sv: "Stad" },
    image: "assets/images/adventure/harborbell-town.png",
    x: 73,
    y: 74,
    description: {
      en: "A cliffside harbor town where bright sails ring the bay.",
      sv: "En hamnstad vid klippor där ljusa segel fyller viken.",
    },
  },
  {
    id: "starfall",
    name: { en: "Starfall Ruins", sv: "Stjärnfallsruinen" },
    type: { en: "Ruins", sv: "Ruin" },
    image: "assets/images/adventure/starfall-ruins.png",
    x: 50,
    y: 71,
    description: {
      en: "An overgrown observatory built around a fallen crystal star.",
      sv: "Ett övervuxet observatorium byggt kring en fallen kristallstjärna.",
    },
  },
];

const encounterTemplates = [
  {
    key: "stranger",
    kind: { en: "Social", sv: "Socialt" },
    title: { en: "A stranger asks for help", sv: "En främling ber om hjälp" },
    text: {
      en: "A hooded traveler holds a cracked compass and points toward trouble.",
      sv: "En huvad vandrare håller en sprucken kompass och pekar mot problem.",
    },
    choices: [
      { label: { en: "Offer help", sv: "Erbjud hjälp" }, result: { en: "The traveler pays in advance.", sv: "Vandraren betalar i förskott." }, gold: 2, item: "Compass Favor" },
      { label: { en: "Ask questions", sv: "Ställ frågor" }, result: { en: "You learn the shortest safe route.", sv: "Ni lär er den kortaste säkra vägen." }, stat: "luck", item: "Route Note" },
      { label: { en: "Set a trap", sv: "Gillra en fälla" }, result: { en: "The stranger was bait for bandits; you turn it around.", sv: "Främlingen var lockbete för banditer; ni vänder det." }, gold: 1, stat: "action" },
    ],
  },
  {
    key: "chest",
    kind: { en: "Puzzle", sv: "Pussel" },
    title: { en: "A singing chest blocks the path", sv: "En sjungande kista spärrar vägen" },
    text: {
      en: "Three rune plates hum. The chest opens only if the party picks the matching rhythm.",
      sv: "Tre runplattor nynnar. Kistan öppnas bara om gruppen väljer rätt rytm.",
    },
    choices: [
      { label: { en: "Tap the blue rune", sv: "Tryck på blå runan" }, result: { en: "The lock clicks open with a bright note.", sv: "Låset klickar upp med en klar ton." }, gold: 3, item: "Blue Rune Key" },
      { label: { en: "Force the lid", sv: "Bänd upp locket" }, result: { en: "It opens, but everyone has to brace the snapback.", sv: "Den öppnas, men alla måste ta emot bakslaget." }, gold: 1, stat: "heart" },
      { label: { en: "Listen first", sv: "Lyssna först" }, result: { en: "The melody teaches a useful pattern.", sv: "Melodin lär ut ett användbart mönster." }, stat: "luck", item: "Hummed Password" },
    ],
  },
  {
    key: "bandits",
    kind: { en: "Fight", sv: "Strid" },
    title: { en: "Bandits demand road tax", sv: "Banditer kräver vägskatt" },
    text: {
      en: "A small crew steps from cover with shields painted like coins.",
      sv: "Ett litet gäng kliver fram med sköldar målade som mynt.",
    },
    choices: [
      { label: { en: "Duel the leader", sv: "Duellera ledaren" }, result: { en: "The leader yields and leaves a blade token.", sv: "Ledaren ger sig och lämnar en klingmarkör." }, stat: "action", item: "Blade Token" },
      { label: { en: "Pay and follow", sv: "Betala och följ efter" }, result: { en: "You lose a coin but find their stash.", sv: "Ni förlorar ett mynt men hittar deras gömma." }, gold: 2, item: "Bandit Map" },
      { label: { en: "Scatter them", sv: "Skingra dem" }, result: { en: "A loud trick sends them running.", sv: "Ett högljutt knep får dem att springa." }, stat: "luck" },
    ],
  },
  {
    key: "dragon",
    kind: { en: "Boss", sv: "Boss" },
    title: { en: "A young dragon blocks the view", sv: "En ung drake skymmer sikten" },
    text: {
      en: "It is not huge yet, but it is already convinced the horizon belongs to it.",
      sv: "Den är inte enorm än, men är redan övertygad om att horisonten tillhör den.",
    },
    choices: [
      { label: { en: "Challenge it", sv: "Utmana den" }, result: { en: "The dragon laughs, then respects the attempt.", sv: "Draken skrattar och respekterar sedan försöket." }, stat: "heart", item: "Warm Scale" },
      { label: { en: "Offer treasure", sv: "Erbjud skatt" }, result: { en: "It trades a clue for a glittering coin.", sv: "Den byter en ledtråd mot ett glänsande mynt." }, gold: -1, item: "Dragon Clue" },
      { label: { en: "Find its rhyme", sv: "Hitta dess rim" }, result: { en: "The dragon cannot resist a good puzzle.", sv: "Draken kan inte motstå ett bra pussel." }, stat: "luck", gold: 2 },
    ],
  },
  {
    key: "waldo",
    kind: { en: "Search", sv: "Leta" },
    title: { en: "Find the hidden courier", sv: "Hitta den gömda kuriren" },
    text: {
      en: "A packed scene of stalls, hats, banners, barrels, and one courier trying not to be seen.",
      sv: "En tät scen av stånd, hattar, fanor, tunnor och en kurir som försöker undgå blickar.",
    },
    choices: [
      { label: { en: "Check red hats", sv: "Kolla röda hattar" }, result: { en: "Wrong hat, right pocket. You find a coin.", sv: "Fel hatt, rätt ficka. Ni hittar ett mynt." }, gold: 1 },
      { label: { en: "Watch the exits", sv: "Bevaka utgångarna" }, result: { en: "The courier walks straight into you.", sv: "Kuriren går rakt in i er." }, item: "Sealed Letter", stat: "action" },
      { label: { en: "Use a bird's-eye clue", sv: "Använd ledtråd ovanifrån" }, result: { en: "The pattern reveals the hidden person.", sv: "Mönstret avslöjar den gömda personen." }, stat: "luck", item: "Courier Token" },
    ],
  },
  {
    key: "key",
    kind: { en: "Logic", sv: "Logik" },
    title: { en: "Three doors share one key", sv: "Tre dörrar delar en nyckel" },
    text: {
      en: "A brass key turns only once. The symbols are crown, wave, and root.",
      sv: "En mässingsnyckel vrids bara en gång. Symbolerna är krona, våg och rot.",
    },
    choices: [
      { label: { en: "Crown door", sv: "Krondörren" }, result: { en: "A formal chamber hides a useful charm.", sv: "En högtidlig kammare gömmer en användbar amulett." }, item: "Crown Charm", stat: "heart" },
      { label: { en: "Wave door", sv: "Vågdörren" }, result: { en: "Cold water carries a pouch to your feet.", sv: "Kallt vatten för en pung till era fötter." }, gold: 2 },
      { label: { en: "Root door", sv: "Rotdörren" }, result: { en: "Roots part and reveal a safe path.", sv: "Rötterna delar sig och visar en säker stig." }, item: "Root Key", stat: "luck" },
    ],
  },
];

const locationEncounters = Object.fromEntries(
  locations
    .filter((location) => location.id !== "first-marker")
    .map((location, index) => [
      location.id,
      [encounterTemplates[index % encounterTemplates.length], encounterTemplates[(index + 1) % encounterTemplates.length], encounterTemplates[(index + 2) % encounterTemplates.length]],
    ]),
);

const panels = ["gender", "style", "race", "class"];
const maxPartySize = 4;
const startUnlocked = ["mistmarket", "emberwild"];
const state = {
  language: localStorage.getItem("dnd-light-language") || "",
  panel: "gender",
  race: "human",
  gender: "female",
  class: "fighter",
  style: "ember",
  party: loadParty(),
  gold: Number(localStorage.getItem("dnd-light-gold") || 0),
  inventory: loadJson("dnd-light-inventory", []),
  unlocked: loadJson("dnd-light-unlocked", startUnlocked),
  adventureView: "party",
  location: "first-marker",
  encounterIndex: 0,
  encounterResult: "",
};

const els = {
  languageGate: document.querySelector("#languageGate"),
  characterName: document.querySelector("#characterName"),
  choicePanel: document.querySelector("#choicePanel"),
  portraitImage: document.querySelector("#portraitImage"),
  styleAura: document.querySelector("#styleAura"),
  heroKicker: document.querySelector("#heroKicker"),
  heroName: document.querySelector("#heroName"),
  heartStat: document.querySelector("#heartStat"),
  actionStat: document.querySelector("#actionStat"),
  luckStat: document.querySelector("#luckStat"),
  partyCount: document.querySelector("#partyCount"),
  partySlots: document.querySelector("#partySlots"),
  saveHeroButton: document.querySelector("#saveHeroButton"),
  startAdventureButton: document.querySelector("#startAdventureButton"),
  creatorStage: document.querySelector("#creatorStage"),
  creatorControls: document.querySelector("#creatorControls"),
  adventureStage: document.querySelector("#adventureStage"),
  adventureBg: document.querySelector("#adventureBg"),
  adventureTitle: document.querySelector("#adventureTitle"),
  adventureParty: document.querySelector("#adventureParty"),
  adventureSummary: document.querySelector("#adventureSummary"),
  partyGold: document.querySelector("#partyGold"),
  partyItemCount: document.querySelector("#partyItemCount"),
  partyView: document.querySelector("#partyView"),
  mapView: document.querySelector("#mapView"),
  locationView: document.querySelector("#locationView"),
  mapPoints: document.querySelector("#mapPoints"),
  locationType: document.querySelector("#locationType"),
  locationName: document.querySelector("#locationName"),
  locationDescription: document.querySelector("#locationDescription"),
  encounterKind: document.querySelector("#encounterKind"),
  encounterTitle: document.querySelector("#encounterTitle"),
  encounterText: document.querySelector("#encounterText"),
  encounterChoices: document.querySelector("#encounterChoices"),
  encounterResult: document.querySelector("#encounterResult"),
};

const tabs = [...document.querySelectorAll(".tab")];
const adventureTabs = [...document.querySelectorAll(".adventure-tab")];

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) ?? "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function loadParty() {
  const saved = loadJson("dnd-light-party", []);
  return Array.isArray(saved) ? saved.slice(0, maxPartySize) : [];
}

function saveProgress() {
  localStorage.setItem("dnd-light-party", JSON.stringify(state.party));
  localStorage.setItem("dnd-light-gold", String(state.gold));
  localStorage.setItem("dnd-light-inventory", JSON.stringify(state.inventory));
  localStorage.setItem("dnd-light-unlocked", JSON.stringify(state.unlocked));
}

function t(key) {
  return text[state.language || "en"][key] ?? text.en[key] ?? key;
}

function local(value) {
  if (typeof value === "string") return value;
  return value[state.language || "en"] ?? value.en;
}

function selected(kind) {
  return options[kind].find((item) => item.id === state[kind]);
}

function selectedLocation() {
  return locations.find((location) => location.id === state.location) ?? locations[0];
}

function characterImage(character = state) {
  return `assets/images/characters/${character.race}-${character.class}-${character.gender}-${character.style}.png`;
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

function setLanguage(language) {
  state.language = language;
  localStorage.setItem("dnd-light-language", language);
  els.languageGate.hidden = true;
  document.documentElement.lang = language;
  render();
}

function applyLanguage() {
  document.documentElement.lang = state.language || "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelector("#characterName").placeholder = state.language === "sv" ? "Hjältens namn" : "Hero name";
}

function renderChoices() {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.panel === state.panel));
  els.choicePanel.innerHTML = "";

  options[state.panel].forEach((item) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.classList.toggle("is-selected", item.id === state[state.panel]);
    button.append(choiceThumb(state.panel, item), choiceLabel(local(item.label)));
    button.addEventListener("click", () => {
      state[state.panel] = item.id;
      render();
    });
    els.choicePanel.append(button);
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
  const image = document.createElement("img");
  image.src = characterImage({ race, class: heroClass, gender, style: state.style });
  image.alt = "";
  thumb.append(image);
  return thumb;
}

function renderHero() {
  const race = selected("race");
  const gender = selected("gender");
  const heroClass = selected("class");
  const style = selected("style");
  const stats = totalStats();

  els.portraitImage.src = characterImage();
  els.styleAura.style.setProperty("--aura", style.aura);
  els.heroKicker.textContent = `${local(race.label)} ${local(gender.label)} ${local(style.label)} ${local(heroClass.label)}`;
  els.heroName.textContent = local(heroClass.name);
  els.heartStat.textContent = stats.heart;
  els.actionStat.textContent = stats.action;
  els.luckStat.textContent = stats.luck;
}

function createPartyMember() {
  const race = selected("race");
  const gender = selected("gender");
  const heroClass = selected("class");
  const style = selected("style");
  const fallbackName = `${local(style.label)} ${local(heroClass.label)}`;
  return {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: els.characterName.value.trim() || fallbackName,
    race: race.id,
    gender: gender.id,
    class: heroClass.id,
    style: style.id,
    title: local(heroClass.name),
    summary: `${local(race.label)} ${local(gender.label)} ${local(style.label)} ${local(heroClass.label)}`,
    stats: totalStats(),
    items: [],
  };
}

function addCurrentHero() {
  if (state.party.length >= maxPartySize) return;
  state.party.push(createPartyMember());
  els.characterName.value = "";
  saveProgress();
  render();
}

function removePartyMember(id) {
  state.party = state.party.filter((member) => member.id !== id);
  saveProgress();
  render();
}

function renderPartyStrip() {
  els.partyCount.textContent = `${state.party.length}/${maxPartySize}`;
  els.saveHeroButton.disabled = state.party.length >= maxPartySize;
  els.startAdventureButton.disabled = state.party.length === 0;
  els.partySlots.innerHTML = "";

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
    els.partySlots.append(slot);
  }
}

function startAdventure() {
  if (state.party.length === 0) return;
  els.creatorStage.hidden = true;
  els.creatorControls.hidden = true;
  els.adventureStage.hidden = false;
  state.adventureView = "party";
  state.location = "first-marker";
  renderAdventure();
}

function backToCreator() {
  els.adventureStage.hidden = true;
  els.creatorStage.hidden = false;
  els.creatorControls.hidden = false;
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

function setAdventureView(view) {
  state.adventureView = view;
  renderAdventure();
}

function isUnlocked(locationId) {
  return locationId === "first-marker" || state.unlocked.includes(locationId);
}

function travelTo(locationId) {
  if (!isUnlocked(locationId)) return;
  state.location = locationId;
  state.adventureView = locationId === "first-marker" ? "map" : "location";
  state.encounterIndex = 0;
  state.encounterResult = "";
  if (state.unlocked.length <= startUnlocked.length) {
    state.unlocked = [...new Set([...state.unlocked, ...locations.filter((location) => location.id !== "first-marker").map((location) => location.id)])];
    saveProgress();
  }
  renderAdventure();
}

function currentEncounter() {
  const list = locationEncounters[state.location] ?? [];
  return list[state.encounterIndex % Math.max(list.length, 1)];
}

function applyChoice(choice, choiceIndex) {
  if (typeof choice.gold === "number") state.gold = Math.max(0, state.gold + choice.gold);
  if (choice.item) {
    state.inventory.push(choice.item);
    const member = state.party[state.encounterIndex % Math.max(state.party.length, 1)];
    if (member) {
      member.items = member.items ?? [];
      member.items.push(choice.item);
    }
  }
  if (choice.stat && state.party.length) {
    const member = state.party[state.encounterIndex % state.party.length];
    member.stats[choice.stat] = (member.stats[choice.stat] ?? 0) + 1;
  }
  const reward = [
    typeof choice.gold === "number" ? `${t("rewardGold")} ${choice.gold > 0 ? "+" : ""}${choice.gold}` : "",
    choice.item ? `${t("rewardItem")}: ${choice.item}` : "",
    choice.stat ? `${t("rewardStat")}: ${choice.stat} +1` : "",
  ].filter(Boolean).join(" | ");
  state.encounterResult = `${local(choice.result)}${reward ? ` (${reward})` : ""}`;
  state.encounterIndex = (state.encounterIndex + 1 + choiceIndex) % 3;
  saveProgress();
  renderAdventure();
}

function renderAdventure() {
  const location = selectedLocation();
  const locationMode = state.adventureView === "location";
  const mapMode = state.adventureView === "map";
  const partyMode = state.adventureView === "party";

  const title = partyMode ? t("firstMarker") : mapMode ? "Brightreach" : local(location.name);
  const image = partyMode ? "assets/images/adventure/party-road.png" : mapMode ? "assets/images/adventure/fantasyland-map-portrait.png" : location.image;
  const summary = partyMode ? `${state.party.length} ${t("ready")}` : mapMode ? t("chooseRoad") : local(location.description);

  adventureTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.adventureView === state.adventureView));
  els.partyView.hidden = !partyMode;
  els.mapView.hidden = !mapMode;
  els.locationView.hidden = !locationMode;
  els.adventureTitle.textContent = title;
  els.adventureBg.src = image;
  els.adventureSummary.textContent = summary;
  els.partyGold.textContent = state.gold;
  els.partyItemCount.textContent = state.inventory.length;

  renderAdventureParty();
  renderMap();
  renderLocation(location);
}

function renderAdventureParty() {
  els.adventureParty.innerHTML = "";
  state.party.forEach((member) => {
    const card = document.createElement("article");
    card.className = "adventure-member";
    const image = document.createElement("img");
    image.src = characterImage(member);
    image.alt = "";
    const label = document.createElement("strong");
    label.textContent = member.name;
    const meta = document.createElement("span");
    meta.textContent = `${t("heart")} ${member.stats.heart} | ${t("action")} ${member.stats.action} | ${t("luck")} ${member.stats.luck}`;
    const item = document.createElement("small");
    item.textContent = (member.items ?? []).slice(-2).join(", ") || t("noItems");
    card.append(image, label, meta, item);
    els.adventureParty.append(card);
  });
}

function renderMap() {
  els.mapPoints.innerHTML = "";
  locations.forEach((item) => {
    const unlocked = isUnlocked(item.id);
    const current = item.id === state.location;
    const button = document.createElement("button");
    button.className = "map-point";
    button.type = "button";
    button.disabled = !unlocked;
    button.classList.toggle("is-current", current);
    button.classList.toggle("is-locked", !unlocked);
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.setAttribute("aria-label", `${unlocked ? t("travel") : t("locked")}: ${local(item.name)}`);
    const label = document.createElement("span");
    label.textContent = current ? t("current") : unlocked ? local(item.name) : t("locked");
    button.append(label);
    button.addEventListener("click", () => travelTo(item.id));
    els.mapPoints.append(button);
  });
}

function renderLocation(location) {
  els.locationType.textContent = local(location.type);
  els.locationName.textContent = local(location.name);
  els.locationDescription.textContent = local(location.description);

  const encounter = currentEncounter();
  if (!encounter || location.id === "first-marker") {
    els.encounterKind.textContent = "";
    els.encounterTitle.textContent = t("noEncounter");
    els.encounterText.textContent = "";
    els.encounterChoices.innerHTML = "";
    els.encounterResult.textContent = "";
    return;
  }

  els.encounterKind.textContent = local(encounter.kind);
  els.encounterTitle.textContent = local(encounter.title);
  els.encounterText.textContent = local(encounter.text);
  els.encounterResult.textContent = state.encounterResult;
  els.encounterChoices.innerHTML = "";
  encounter.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "encounter-choice";
    button.type = "button";
    button.textContent = local(choice.label);
    button.addEventListener("click", () => applyChoice(choice, index));
    els.encounterChoices.append(button);
  });
}

function render() {
  applyLanguage();
  els.languageGate.hidden = Boolean(state.language);
  renderChoices();
  renderHero();
  renderPartyStrip();
  if (!els.adventureStage.hidden) renderAdventure();
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
tabs.forEach((tab) => tab.addEventListener("click", () => setPanel(tab.dataset.panel)));
document.querySelector("#backButton").addEventListener("click", () => step(-1));
document.querySelector("#nextButton").addEventListener("click", () => step(1));
document.querySelector("#randomButton").addEventListener("click", randomize);
els.saveHeroButton.addEventListener("click", addCurrentHero);
els.startAdventureButton.addEventListener("click", startAdventure);
document.querySelector("#backToCreatorButton").addEventListener("click", backToCreator);
adventureTabs.forEach((tab) => tab.addEventListener("click", () => setAdventureView(tab.dataset.adventureView)));

render();
