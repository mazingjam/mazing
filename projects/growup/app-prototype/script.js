const STORAGE_KEY = "growup-companion-prototype-v1";

const eventTypes = {
  wake: { label: "Wake up", icon: "🌅", color: "#f5bd63" },
  nap: { label: "Nap", icon: "🌙", color: "#9b8cff" },
  bedtime: { label: "Bedtime", icon: "🌇", color: "#f59c63" },
  nightWaking: { label: "Night waking", icon: "⛈️", color: "#ff7f72" },
  nursing: { label: "Nursing", icon: "🟢", color: "#67e2bd" },
  bottle: { label: "Bottle feeding", icon: "🍼", color: "#67e2bd" },
  pumping: { label: "Pumping", icon: "💧", color: "#77c8ff" },
  solids: { label: "Solids", icon: "🥣", color: "#67e2bd" },
  diaper: { label: "Diaper change", icon: "🩷", color: "#ee8adf" },
  temperature: { label: "Temperature", icon: "🌡️", color: "#77c8ff" },
  medicine: { label: "Medicine", icon: "💊", color: "#f5df63" },
  milestone: { label: "Milestone", icon: "⭐", color: "#f5bd63" },
  preference: { label: "Favorite today", icon: "♡", color: "#c6b5ff" }
};

const animalChoices = ["Kanin", "Björn", "Räv", "Elefant", "Katt", "Hund"];

const now = new Date();
const todayIso = toDateInputValue(now);

const defaultState = {
  child: {
    id: "child-1",
    name: "Alma",
    birthDate: "2025-08-27",
    avatar: {
      skinTone: "varm persika",
      hairStyle: "lite hår",
      outfitColor: "sage"
    },
    preferences: {
      animals: ["Kanin"],
      songs: ["Lugn vaggsång"],
      colors: ["Sage"],
      objects: [],
      foods: ["Gröt"],
      words: []
    },
    clothing: {
      size: "74/80",
      fitNotes: ""
    },
    family: []
  },
  selectedScreen: "home",
  selectedAnimal: "Kanin",
  runningTimer: null,
  events: seedEvents()
};

let state = loadState();
let activeDetailType = null;
let detailMetadata = {};
let timerInterval = null;

const els = {
  screenTitle: document.querySelector("#screenTitle"),
  screenSubtitle: document.querySelector("#screenSubtitle"),
  ageDays: document.querySelector("#ageDays"),
  currentState: document.querySelector("#currentState"),
  stateDetail: document.querySelector("#stateDetail"),
  ringEvents: document.querySelector("#ringEvents"),
  ringMain: document.querySelector("#ringMain"),
  ringTime: document.querySelector("#ringTime"),
  predictionWindow: document.querySelector("#predictionWindow"),
  predictionReason: document.querySelector("#predictionReason"),
  predictionConfidence: document.querySelector("#predictionConfidence"),
  runningTimerCard: document.querySelector("#runningTimerCard"),
  timerElapsed: document.querySelector("#timerElapsed"),
  timerLabel: document.querySelector("#timerLabel"),
  timelineList: document.querySelector("#timelineList"),
  dateStrip: document.querySelector("#dateStrip"),
  totalSleepStat: document.querySelector("#totalSleepStat"),
  daySleepStat: document.querySelector("#daySleepStat"),
  napCountStat: document.querySelector("#napCountStat"),
  feedCountStat: document.querySelector("#feedCountStat"),
  sleepChart: document.querySelector("#sleepChart"),
  profileTitle: document.querySelector("#profileTitle"),
  profileMeta: document.querySelector("#profileMeta"),
  childNameInput: document.querySelector("#childNameInput"),
  birthDateInput: document.querySelector("#birthDateInput"),
  preferenceTags: document.querySelector("#preferenceTags"),
  personalizationInsight: document.querySelector("#personalizationInsight"),
  animalChoices: document.querySelector("#animalChoices"),
  productChecklist: document.querySelector("#productChecklist"),
  eventGrid: document.querySelector("#eventGrid"),
  addSheet: document.querySelector("#addSheet"),
  detailSheet: document.querySelector("#detailSheet"),
  sheetBackdrop: document.querySelector("#sheetBackdrop"),
  detailIcon: document.querySelector("#detailIcon"),
  detailTitle: document.querySelector("#detailTitle"),
  eventStartInput: document.querySelector("#eventStartInput"),
  eventEndInput: document.querySelector("#eventEndInput"),
  detailOptions: document.querySelector("#detailOptions")
};

init();

function init() {
  renderEventGrid();
  renderDateStrip();
  renderAnimalChoices();
  bindNavigation();
  bindSheets();
  bindProfile();
  bindTimerControls();
  startTimerTicker();
  render();
}

function bindNavigation() {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.nav));
  });
  document.querySelector("#profileShortcut").addEventListener("click", () => navigate("profile"));
  document.querySelector("#boxShortcut").addEventListener("click", () => navigate("box"));
}

function navigate(screen) {
  state.selectedScreen = screen;
  document.querySelectorAll(".screen").forEach((node) => {
    node.classList.toggle("active", node.dataset.screen === screen);
  });
  document.querySelectorAll(".bottom-nav [data-nav]").forEach((node) => {
    node.classList.toggle("active", node.dataset.nav === screen);
  });
  const titles = {
    home: ["Idag", "GrowUp companion"],
    sounds: ["Ljud", "Sömnljud och bokljud"],
    insights: ["Insikter", "Trender och statistik"],
    profile: ["Profil", "Barn och personalisering"],
    box: ["Boxresa", "Subscription och val"],
    timeline: ["Dagbok", "Dagens händelser"]
  };
  const [title, subtitle] = titles[screen] || titles.home;
  els.screenTitle.textContent = title;
  els.screenSubtitle.textContent = subtitle;
  saveState();
}

function bindSheets() {
  document.querySelector("#openAddSheet").addEventListener("click", openAddSheet);
  els.sheetBackdrop.addEventListener("click", closeSheets);
  document.querySelector("#saveEventButton").addEventListener("click", saveDetailEvent);
  document.querySelector("#quickSleepButton").addEventListener("click", () => startTimer("nap"));
}

function bindProfile() {
  els.childNameInput.addEventListener("input", (event) => {
    state.child.name = event.target.value || "Barnet";
    saveState();
    render();
  });
  els.birthDateInput.addEventListener("change", (event) => {
    state.child.birthDate = event.target.value;
    saveState();
    render();
  });
  document.querySelectorAll("#skinSwatches .swatch").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#skinSwatches .swatch").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      state.child.avatar.skinTone = button.dataset.value;
      saveState();
      render();
    });
  });
  document.querySelectorAll("#hairOptions button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#hairOptions button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      state.child.avatar.hairStyle = button.dataset.value;
      saveState();
      render();
    });
  });
  document.querySelector("#addPreferenceButton").addEventListener("click", () => {
    openDetailSheet("preference");
  });
}

function bindTimerControls() {
  document.querySelector("#pauseTimerButton").addEventListener("click", () => {
    if (!state.runningTimer) return;
    state.runningTimer.paused = !state.runningTimer.paused;
    state.runningTimer.pausedAt = state.runningTimer.paused ? new Date().toISOString() : null;
    document.querySelector("#pauseTimerButton").textContent = state.runningTimer.paused ? "Fortsätt" : "Paus";
    saveState();
    renderTimer();
  });
  document.querySelector("#stopTimerButton").addEventListener("click", stopTimer);
}

function render() {
  renderProfile();
  renderHome();
  renderTimeline();
  renderInsights();
  renderChecklist();
  renderTimer();
}

function renderHome() {
  const prediction = predictNextSleepWindow();
  const activeSleep = state.runningTimer || getActiveSleepEvent();
  const lastEvent = getSortedEvents()[0];
  const age = ageParts(state.child.birthDate);

  els.ageDays.textContent = age.months < 1 ? age.days : `${age.months}m`;
  els.currentState.textContent = activeSleep ? "Sover" : "Vaken";
  els.stateDetail.textContent = activeSleep
    ? `${state.child.name} har sovit i ${formatDuration(minutesBetween(new Date(activeSleep.startTime), new Date()))}.`
    : lastEvent
      ? `Senaste händelse: ${eventTypes[lastEvent.type].label.toLowerCase()} ${formatClock(new Date(lastEvent.startTime))}.`
      : "Lägg till första händelsen för dagen.";

  els.ringMain.textContent = activeSleep ? "Asleep for" : "Nästa nap";
  els.ringTime.textContent = activeSleep
    ? formatDuration(minutesBetween(new Date(activeSleep.startTime), new Date()))
    : formatClock(prediction.target);
  els.predictionWindow.textContent = `${formatClock(prediction.earliest)} - ${formatClock(prediction.latest)}`;
  els.predictionReason.textContent = prediction.reasons.join(" ");
  els.predictionConfidence.textContent = prediction.confidence;
  renderRing();
}

function renderRing() {
  const events = todayEvents().filter((event) => ["wake", "nap", "bedtime", "nightWaking", "solids", "bottle", "nursing"].includes(event.type));
  els.ringEvents.innerHTML = events
    .map((event) => {
      const point = pointForTime(new Date(event.startTime));
      const type = eventTypes[event.type];
      return `
        <g class="ring-event">
          <circle class="ring-dot" cx="${point.x}" cy="${point.y}" r="18" fill="rgba(17,16,41,0.9)" stroke="${type.color}"></circle>
          <text x="${point.x}" y="${point.y + 6}" text-anchor="middle" font-size="17">${type.icon}</text>
        </g>
      `;
    })
    .join("");
}

function renderTimeline() {
  const events = getSortedEvents().filter((event) => sameDay(new Date(event.startTime), now));
  if (!events.length) {
    els.timelineList.innerHTML = `<p class="empty">Inga händelser loggade idag.</p>`;
    return;
  }
  els.timelineList.innerHTML = events
    .map((event) => {
      const type = eventTypes[event.type];
      const end = event.endTime ? ` - ${formatClock(new Date(event.endTime))}` : "";
      const detail = eventDetail(event);
      return `
        <article class="event-card" style="--event-color:${type.color}">
          <span class="event-icon">${type.icon}</span>
          <div>
            <strong>${type.label}</strong>
            <span>${detail}</span>
          </div>
          <time>${formatClock(new Date(event.startTime))}${end}</time>
        </article>
      `;
    })
    .join("");
}

function renderInsights() {
  const today = todayEvents();
  const sleepEvents = today.filter((event) => ["nap", "bedtime"].includes(event.type) && event.endTime);
  const daySleep = sleepEvents.filter((event) => event.type === "nap").reduce((sum, event) => sum + eventMinutes(event), 0);
  const nightSleep = sleepEvents.filter((event) => event.type === "bedtime").reduce((sum, event) => sum + eventMinutes(event), 0);
  const totalSleep = daySleep + nightSleep;
  const feedCount = today.filter((event) => ["nursing", "bottle", "solids"].includes(event.type)).length;

  els.totalSleepStat.textContent = formatDuration(totalSleep);
  els.daySleepStat.textContent = formatDuration(daySleep);
  els.napCountStat.textContent = String(today.filter((event) => event.type === "nap").length);
  els.feedCountStat.textContent = String(feedCount);
  renderSleepChart();

  const missing = personalizationChecklist().filter((item) => !item.done);
  els.personalizationInsight.textContent = missing.length
    ? `${missing.length} profilval saknas innan alla kommande produkter är redo.`
    : "Alla viktiga produktinputs är klara för kommande personliga produkter.";
}

function renderSleepChart() {
  const data = lastSevenDays().map((date, index) => {
    const minutes = state.events
      .filter((event) => event.endTime && sameDay(new Date(event.startTime), date) && ["nap", "bedtime"].includes(event.type))
      .reduce((sum, event) => sum + eventMinutes(event), 0);
    return { index, minutes: minutes || [720, 690, 760, 650, 610, 500, 590][index] };
  });
  const max = 840;
  const min = 180;
  const points = data
    .map((item, i) => {
      const x = 28 + i * 47;
      const y = 154 - ((item.minutes - min) / (max - min)) * 120;
      return `${x},${Math.max(24, Math.min(154, y))}`;
    })
    .join(" ");
  els.sleepChart.innerHTML = `
    <line x1="28" x2="315" y1="40" y2="40" stroke="rgba(255,255,255,.1)" />
    <line x1="28" x2="315" y1="96" y2="96" stroke="rgba(255,255,255,.1)" />
    <line x1="28" x2="315" y1="154" y2="154" stroke="rgba(255,255,255,.18)" />
    <polyline points="${points}" fill="none" stroke="#9b8cff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    <polygon points="${points} 310,170 28,170" fill="rgba(155,140,255,.16)" />
  `;
}

function renderProfile() {
  const age = ageParts(state.child.birthDate);
  els.profileTitle.textContent = state.child.name;
  els.profileMeta.textContent = `${age.months} månader · ${state.child.avatar.skinTone} · ${state.child.avatar.hairStyle}`;
  els.childNameInput.value = state.child.name;
  els.birthDateInput.value = state.child.birthDate;
  els.preferenceTags.innerHTML = [
    ...state.child.preferences.animals.map((value) => `Djur: ${value}`),
    ...state.child.preferences.songs.map((value) => `Sång: ${value}`),
    ...state.child.preferences.colors.map((value) => `Färg: ${value}`),
    ...state.child.preferences.foods.map((value) => `Mat: ${value}`)
  ]
    .map((tag) => `<span>${tag}</span>`)
    .join("");
  document.querySelectorAll(".baby-avatar").forEach((avatar) => {
    avatar.style.background = skinGradient(state.child.avatar.skinTone);
  });
}

function renderChecklist() {
  els.productChecklist.innerHTML = personalizationChecklist()
    .map((item) => `<div class="checklist-row ${item.done ? "done" : ""}"><span>${item.label}</span><strong>${item.done ? "Klar" : "Saknas"}</strong></div>`)
    .join("");
}

function renderTimer() {
  if (!state.runningTimer) {
    els.runningTimerCard.classList.add("hidden");
    return;
  }
  els.runningTimerCard.classList.remove("hidden");
  els.timerLabel.textContent = `${eventTypes[state.runningTimer.type].label} pågår`;
  els.timerElapsed.textContent = formatDuration(minutesBetween(new Date(state.runningTimer.startTime), new Date()), true);
}

function renderDateStrip() {
  const labels = ["S", "M", "T", "W", "T", "F", "S"];
  els.dateStrip.innerHTML = lastSevenDays()
    .map((date, index) => `<span class="${sameDay(date, now) ? "active" : ""}">${labels[date.getDay()]}<br>${date.getDate()}</span>`)
    .join("");
}

function renderEventGrid() {
  const order = ["wake", "nap", "bedtime", "nightWaking", "bottle", "nursing", "pumping", "solids", "diaper", "temperature", "medicine", "milestone", "preference"];
  els.eventGrid.innerHTML = order
    .map((type) => `<button class="event-option" data-event-type="${type}" type="button"><span>${eventTypes[type].icon}</span>${eventTypes[type].label}</button>`)
    .join("");
  els.eventGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => openDetailSheet(button.dataset.eventType));
  });
}

function renderAnimalChoices() {
  els.animalChoices.innerHTML = animalChoices
    .map((animal) => `<button class="${state.selectedAnimal === animal ? "selected" : ""}" data-animal="${animal}" type="button">${animal}</button>`)
    .join("");
  els.animalChoices.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedAnimal = button.dataset.animal;
      if (!state.child.preferences.animals.includes(state.selectedAnimal)) {
        state.child.preferences.animals.unshift(state.selectedAnimal);
      }
      saveState();
      renderAnimalChoices();
      render();
    });
  });
}

function openAddSheet() {
  els.sheetBackdrop.classList.remove("hidden");
  els.addSheet.classList.remove("hidden");
}

function openDetailSheet(type) {
  activeDetailType = type;
  detailMetadata = {};
  els.addSheet.classList.add("hidden");
  els.sheetBackdrop.classList.remove("hidden");
  els.detailSheet.classList.remove("hidden");
  els.detailIcon.textContent = eventTypes[type].icon;
  els.detailTitle.textContent = eventTypes[type].label;
  const start = new Date();
  const end = new Date(start.getTime() + defaultDuration(type) * 60000);
  els.eventStartInput.value = toTimeInputValue(start);
  els.eventEndInput.value = ["nap", "bedtime", "nightWaking", "nursing", "bottle", "solids", "diaper", "preference"].includes(type) ? toTimeInputValue(end) : "";
  els.detailOptions.innerHTML = detailOptionsMarkup(type);
  els.detailOptions.querySelectorAll("button[data-meta]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      button.parentElement.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      detailMetadata[group] = button.dataset.meta;
    });
  });
}

function closeSheets() {
  els.sheetBackdrop.classList.add("hidden");
  els.addSheet.classList.add("hidden");
  els.detailSheet.classList.add("hidden");
}

function saveDetailEvent() {
  const start = timeToday(els.eventStartInput.value);
  const end = els.eventEndInput.value ? timeToday(els.eventEndInput.value) : null;
  const event = {
    id: crypto.randomUUID ? crypto.randomUUID() : `event-${Date.now()}`,
    childId: state.child.id,
    type: activeDetailType,
    startTime: start.toISOString(),
    endTime: end ? end.toISOString() : undefined,
    metadata: { ...detailMetadata }
  };
  if (activeDetailType === "preference") {
    const value = detailMetadata.favorite || state.selectedAnimal || "Kanin";
    if (!state.child.preferences.animals.includes(value)) state.child.preferences.animals.unshift(value);
  }
  state.events.push(event);
  saveState();
  closeSheets();
  render();
}

function startTimer(type) {
  state.runningTimer = {
    type,
    startTime: new Date().toISOString(),
    paused: false,
    pausedAt: null
  };
  saveState();
  render();
}

function stopTimer() {
  if (!state.runningTimer) return;
  state.events.push({
    id: crypto.randomUUID ? crypto.randomUUID() : `event-${Date.now()}`,
    childId: state.child.id,
    type: state.runningTimer.type,
    startTime: state.runningTimer.startTime,
    endTime: new Date().toISOString(),
    metadata: { source: "timer" }
  });
  state.runningTimer = null;
  saveState();
  render();
}

function startTimerTicker() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    renderHome();
    renderTimer();
  }, 1000);
}

function predictNextSleepWindow() {
  const age = ageParts(state.child.birthDate);
  const lastWake = findLastWake();
  const napCount = todayEvents().filter((event) => event.type === "nap").length;
  const prior = wakeWindowPrior(age.months, napCount + 1);
  const history = medianWakeWindow();
  const historyWeight = state.events.length > 18 ? 0.7 : state.events.length > 8 ? 0.45 : 0.2;
  let targetMinutes = Math.round(prior.target * (1 - historyWeight) + (history || prior.target) * historyWeight);
  const previousNap = getSortedEvents().find((event) => event.type === "nap" && event.endTime);
  if (previousNap && eventMinutes(previousNap) < 35) targetMinutes = Math.round(targetMinutes * 0.86);
  const target = new Date(lastWake.getTime() + targetMinutes * 60000);
  const spread = prior.spread;
  return {
    earliest: new Date(target.getTime() - spread * 60000),
    target,
    latest: new Date(target.getTime() + spread * 60000),
    confidence: state.events.length > 18 ? "Hög" : state.events.length > 8 ? "Medel" : "Låg",
    reasons: [
      history ? "Baserat på ålder och senaste loggar." : "Baserat på ålder och senaste vakentid.",
      state.events.length < 8 ? "Blir smartare efter fler loggade dagar." : "Justeras med barnets mönster."
    ]
  };
}

function wakeWindowPrior(months, napIndex) {
  if (months < 2) return { target: 65, spread: 18 };
  if (months < 4) return { target: 95, spread: 20 };
  if (months < 6) return { target: 145, spread: 25 };
  if (months < 9) return { target: napIndex === 1 ? 165 : 190, spread: 30 };
  if (months < 13) return { target: napIndex === 1 ? 190 : 225, spread: 35 };
  if (months < 18) return { target: 260, spread: 40 };
  return { target: 330, spread: 45 };
}

function findLastWake() {
  const explicit = getSortedEvents().find((event) => ["wake", "nap", "nightWaking"].includes(event.type) && (event.endTime || event.type === "wake"));
  if (!explicit) return new Date(new Date().setHours(7, 0, 0, 0));
  return new Date(explicit.endTime || explicit.startTime);
}

function medianWakeWindow() {
  const sorted = [...state.events].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  const windows = [];
  let lastWake = null;
  sorted.forEach((event) => {
    if (["wake", "nap", "nightWaking"].includes(event.type)) lastWake = new Date(event.endTime || event.startTime);
    if (event.type === "nap" && lastWake) {
      const minutes = minutesBetween(lastWake, new Date(event.startTime));
      if (minutes > 20 && minutes < 420) windows.push(minutes);
    }
  });
  if (!windows.length) return null;
  windows.sort((a, b) => a - b);
  return windows[Math.floor(windows.length / 2)];
}

function personalizationChecklist() {
  return [
    { label: "Barnets namn för böcker", done: Boolean(state.child.name) },
    { label: "Avatarutseende", done: Boolean(state.child.avatar.skinTone && state.child.avatar.hairStyle) },
    { label: "Favoritdjur för snutte", done: Boolean(state.child.preferences.animals.length) },
    { label: "Klädstorlek för textilier", done: Boolean(state.child.clothing.size) },
    { label: "Favoritsång för ljudkort", done: Boolean(state.child.preferences.songs.length) }
  ];
}

function detailOptionsMarkup(type) {
  if (type === "nap" || type === "bedtime") {
    return `
      <p class="eyebrow">Start</p>
      <div class="option-grid">
        ${option("settling", "easy", "Somnade lätt")}
        ${option("settling", "long", "Tog lång tid")}
        ${option("settling", "upset", "Ledsen")}
        ${option("settling", "calm", "Lugn")}
      </div>
      <p class="eyebrow" style="margin-top:18px">Hur</p>
      <div class="option-grid">
        ${option("how", "crib", "I säng")}
        ${option("how", "held", "I famn")}
        ${option("how", "nursing", "Amning")}
        ${option("how", "stroller", "Vagn")}
      </div>
    `;
  }
  if (["bottle", "nursing", "solids"].includes(type)) {
    return `
      <p class="eyebrow">Respons</p>
      <div class="option-grid">
        ${option("reaction", "happy", "Gillade")}
        ${option("reaction", "neutral", "Neutral")}
        ${option("reaction", "more", "Ville ha mer")}
        ${option("reaction", "less", "Ville inte")}
      </div>
    `;
  }
  if (type === "diaper") {
    return `
      <p class="eyebrow">Typ</p>
      <div class="option-grid">
        ${option("diaper", "wet", "Våt")}
        ${option("diaper", "dirty", "Bajs")}
        ${option("diaper", "both", "Båda")}
      </div>
    `;
  }
  if (type === "preference") {
    return `
      <p class="eyebrow">Favorit idag</p>
      <div class="option-grid">
        ${animalChoices.map((animal) => option("favorite", animal, animal)).join("")}
      </div>
    `;
  }
  return `
    <p class="eyebrow">Notering</p>
    <div class="option-grid">
      ${option("note", "normal", "Normal")}
      ${option("note", "watch", "Håll koll")}
    </div>
  `;
}

function option(group, value, label) {
  return `<button data-group="${group}" data-meta="${value}" type="button">${label}</button>`;
}

function eventDetail(event) {
  if (event.endTime) return formatDuration(eventMinutes(event));
  if (event.metadata?.diaper) return event.metadata.diaper;
  if (event.metadata?.favorite) return event.metadata.favorite;
  if (event.metadata?.reaction) return event.metadata.reaction;
  return "";
}

function seedEvents() {
  const base = new Date();
  const set = (hours, minutes) => new Date(base.getFullYear(), base.getMonth(), base.getDate(), hours, minutes);
  return [
    event("wake", set(6, 28)),
    event("solids", set(8, 8), set(8, 18), { reaction: "happy" }),
    event("nap", set(9, 42), set(10, 31), { how: "crib" }),
    event("diaper", set(11, 5), null, { diaper: "wet" }),
    event("bottle", set(12, 10), set(12, 22), { reaction: "more" }),
    event("nap", set(13, 11), set(14, 0), { how: "stroller" }),
    event("solids", set(15, 6), set(15, 18), { reaction: "happy" })
  ];
}

function event(type, start, end, metadata = {}) {
  return {
    id: `${type}-${start.getTime()}`,
    childId: "child-1",
    type,
    startTime: start.toISOString(),
    endTime: end ? end.toISOString() : undefined,
    metadata
  };
}

function getActiveSleepEvent() {
  return null;
}

function todayEvents() {
  return state.events.filter((event) => sameDay(new Date(event.startTime), now));
}

function getSortedEvents() {
  return [...state.events].sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
}

function eventMinutes(event) {
  if (!event.endTime) return 0;
  return minutesBetween(new Date(event.startTime), new Date(event.endTime));
}

function minutesBetween(start, end) {
  return Math.max(0, Math.round((end - start) / 60000));
}

function formatDuration(minutes, includeSeconds = false) {
  if (includeSeconds) {
    const totalSeconds = Math.max(0, Math.round((new Date() - new Date(state.runningTimer.startTime)) / 1000));
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h <= 0) return `${m}m`;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

function formatClock(date) {
  return new Intl.DateTimeFormat("sv-SE", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function lastSevenDays() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return date;
  });
}

function ageParts(birthDate) {
  const birth = new Date(birthDate);
  const days = Math.max(0, Math.floor((new Date() - birth) / 86400000));
  return { days, months: Math.floor(days / 30.4375) };
}

function pointForTime(date) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const angle = (minutes / 1440) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 160 + Math.cos(angle) * 118,
    y: 160 + Math.sin(angle) * 118
  };
}

function defaultDuration(type) {
  return {
    nap: 45,
    bedtime: 480,
    nightWaking: 10,
    nursing: 18,
    bottle: 12,
    solids: 15,
    diaper: 1,
    preference: 1
  }[type] || 1;
}

function timeToday(value) {
  const [hours, minutes] = value.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function toTimeInputValue(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function toDateInputValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function skinGradient(value) {
  if (value === "gyllene brun") return "linear-gradient(145deg, #c58b63, #7b4e34)";
  if (value === "djup brun") return "linear-gradient(145deg, #8a5a42, #3b241c)";
  return "linear-gradient(145deg, #f3c7a4, #c58b63)";
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

