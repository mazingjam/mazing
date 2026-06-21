const LOCAL_EVENTS_KEY = "mazing.familyCalendar.localEvents";
const VIEW_KEY = "mazing.familyCalendar.view";

const people = [
  { id: "alex", name: "Alex", color: "#2f80ed", provider: "google" },
  { id: "mira", name: "Mira", color: "#d64550", provider: "google" },
  { id: "leo", name: "Leo", color: "#f2a93b", provider: "google" },
  { id: "familj", name: "Familj", color: "#18a999", provider: "shared" },
];

const seedEvents = [
  {
    id: "seed-1",
    ownerId: "alex",
    title: "Standup",
    start: withWeekOffset(0, "09:00"),
    end: withWeekOffset(0, "09:30"),
    note: "Jobb",
    source: "google",
  },
  {
    id: "seed-2",
    ownerId: "leo",
    title: "Fotbollstraning",
    start: withWeekOffset(0, "17:15"),
    end: withWeekOffset(0, "18:30"),
    note: "Ta med vattenflaska",
    source: "google",
  },
  {
    id: "seed-3",
    ownerId: "mira",
    title: "Lunch med Elin",
    start: withWeekOffset(1, "12:00"),
    end: withWeekOffset(1, "13:00"),
    note: "Centrum",
    source: "google",
  },
  {
    id: "seed-4",
    ownerId: "familj",
    title: "Matleverans",
    start: withWeekOffset(2, "18:00"),
    end: withWeekOffset(2, "19:00"),
    note: "Hemma",
    source: "shared",
  },
  {
    id: "seed-5",
    ownerId: "leo",
    title: "Skolutflykt",
    start: withWeekOffset(3, "08:15"),
    end: withWeekOffset(3, "14:00"),
    note: "Packad lunch",
    source: "google",
  },
  {
    id: "seed-6",
    ownerId: "familj",
    title: "Fredagsmiddag",
    start: withWeekOffset(4, "18:30"),
    end: withWeekOffset(4, "20:00"),
    note: "Boka bord",
    source: "shared",
  },
];

const state = {
  selectedPeople: new Set(people.map((person) => person.id)),
  view: localStorage.getItem(VIEW_KEY) || "week",
  events: [],
};

const elements = {
  clock: document.querySelector("#clock"),
  todayLabel: document.querySelector("#todayLabel"),
  filters: document.querySelector("#personFilters"),
  toggleViewButton: document.querySelector("#toggleViewButton"),
  newEventButton: document.querySelector("#newEventButton"),
  nextEventTitle: document.querySelector("#nextEventTitle"),
  nextEventMeta: document.querySelector("#nextEventMeta"),
  weekGrid: document.querySelector("#weekGrid"),
  todayList: document.querySelector("#todayList"),
  dailyHeading: document.querySelector("#dailyHeading"),
  dialog: document.querySelector("#eventDialog"),
  form: document.querySelector("#eventForm"),
  closeDialogButton: document.querySelector("#closeDialogButton"),
  cancelDialogButton: document.querySelector("#cancelDialogButton"),
  eventTitle: document.querySelector("#eventTitle"),
  eventDate: document.querySelector("#eventDate"),
  eventStart: document.querySelector("#eventStart"),
  eventEnd: document.querySelector("#eventEnd"),
  eventOwner: document.querySelector("#eventOwner"),
  eventNote: document.querySelector("#eventNote"),
};

init();

function init() {
  state.events = [...seedEvents, ...loadLocalEvents()].sort(byStart);
  renderPersonFilters();
  renderOwnerOptions();
  bindEvents();
  updateClock();
  render();
  setInterval(updateClock, 30_000);
}

function bindEvents() {
  elements.toggleViewButton.addEventListener("click", () => {
    state.view = state.view === "week" ? "agenda" : "week";
    localStorage.setItem(VIEW_KEY, state.view);
    render();
  });

  elements.newEventButton.addEventListener("click", () => {
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(now.getHours() + 1, 0, 0, 0);
    const end = new Date(nextHour);
    end.setHours(nextHour.getHours() + 1);

    elements.eventTitle.value = "";
    elements.eventDate.value = formatDateInput(nextHour);
    elements.eventStart.value = formatTimeInput(nextHour);
    elements.eventEnd.value = formatTimeInput(end);
    elements.eventOwner.value = "familj";
    elements.eventNote.value = "";
    elements.dialog.showModal();
    elements.eventTitle.focus();
  });

  elements.closeDialogButton.addEventListener("click", () => elements.dialog.close());
  elements.cancelDialogButton.addEventListener("click", () => elements.dialog.close());

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const start = new Date(`${elements.eventDate.value}T${elements.eventStart.value}`);
    const end = new Date(`${elements.eventDate.value}T${elements.eventEnd.value}`);

    if (end <= start) {
      elements.eventEnd.setCustomValidity("Sluttiden maste vara efter starttiden.");
      elements.eventEnd.reportValidity();
      return;
    }

    elements.eventEnd.setCustomValidity("");
    const newEvent = {
      id: `local-${Date.now()}`,
      ownerId: elements.eventOwner.value,
      title: elements.eventTitle.value.trim(),
      start: start.toISOString(),
      end: end.toISOString(),
      note: elements.eventNote.value.trim(),
      source: "local",
    };

    const localEvents = [...loadLocalEvents(), newEvent];
    localStorage.setItem(LOCAL_EVENTS_KEY, JSON.stringify(localEvents));
    state.events = [...seedEvents, ...localEvents].sort(byStart);
    elements.dialog.close();
    render();
  });
}

function render() {
  const filteredEvents = getFilteredEvents();
  const weekDays = getCurrentWeekDays();
  elements.toggleViewButton.textContent = state.view === "week" ? "Agenda" : "Vecka";
  elements.weekGrid.classList.toggle("week-grid--agenda", state.view === "agenda");
  renderWeekGrid(weekDays, filteredEvents);
  renderToday(filteredEvents);
  renderNextEvent(filteredEvents);
}

function renderPersonFilters() {
  elements.filters.innerHTML = "";
  for (const person of people) {
    const button = document.createElement("button");
    button.className = "person-chip is-active";
    button.type = "button";
    button.style.setProperty("--person-color", person.color);
    button.textContent = person.name;
    button.setAttribute("aria-pressed", "true");
    button.addEventListener("click", () => {
      if (state.selectedPeople.has(person.id) && state.selectedPeople.size > 1) {
        state.selectedPeople.delete(person.id);
      } else {
        state.selectedPeople.add(person.id);
      }
      button.classList.toggle("is-active", state.selectedPeople.has(person.id));
      button.setAttribute("aria-pressed", String(state.selectedPeople.has(person.id)));
      render();
    });
    elements.filters.append(button);
  }
}

function renderOwnerOptions() {
  elements.eventOwner.innerHTML = "";
  for (const person of people) {
    const option = document.createElement("option");
    option.value = person.id;
    option.textContent = `${person.name} (${person.provider})`;
    elements.eventOwner.append(option);
  }
}

function renderWeekGrid(weekDays, events) {
  elements.weekGrid.innerHTML = "";
  for (const day of weekDays) {
    const dayEvents = events.filter((eventItem) => isSameDay(new Date(eventItem.start), day));
    const column = document.createElement("article");
    column.className = "day-column";
    if (isSameDay(day, new Date())) {
      column.classList.add("day-column--today");
    }

    const header = document.createElement("header");
    header.className = "day-header";
    header.innerHTML = `
      <span>${formatWeekday(day)}</span>
      <strong>${day.getDate()}</strong>
    `;
    column.append(header);

    const list = document.createElement("div");
    list.className = "day-events";

    const visibleEvents = state.view === "agenda" ? dayEvents : dayEvents.slice(0, 4);
    for (const eventItem of visibleEvents) {
      list.append(createEventCard(eventItem));
    }

    if (dayEvents.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Inget planerat";
      list.append(empty);
    }

    if (state.view === "week" && dayEvents.length > visibleEvents.length) {
      const more = document.createElement("p");
      more.className = "more-count";
      more.textContent = `+${dayEvents.length - visibleEvents.length} till`;
      list.append(more);
    }

    column.append(list);
    elements.weekGrid.append(column);
  }
}

function renderToday(events) {
  const todaysEvents = events.filter((eventItem) => isSameDay(new Date(eventItem.start), new Date()));
  elements.dailyHeading.textContent = todaysEvents.length ? "Dagens plan" : "Lugn dag";
  elements.todayList.innerHTML = "";

  if (todaysEvents.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Inga event kvar idag.";
    elements.todayList.append(empty);
    return;
  }

  for (const eventItem of todaysEvents) {
    elements.todayList.append(createEventCard(eventItem, true));
  }
}

function renderNextEvent(events) {
  const now = Date.now();
  const next = events.find((eventItem) => new Date(eventItem.end).getTime() >= now);

  if (!next) {
    elements.nextEventTitle.textContent = "Inget mer i veckan";
    elements.nextEventMeta.textContent = "Alla synliga kalendrar ar tomma i aktuell vy.";
    return;
  }

  const owner = getPerson(next.ownerId);
  elements.nextEventTitle.textContent = next.title;
  elements.nextEventMeta.textContent = `${formatDayAndTime(next)} - ${owner.name}${next.note ? ` - ${next.note}` : ""}`;
}

function createEventCard(eventItem, compact = false) {
  const owner = getPerson(eventItem.ownerId);
  const card = document.createElement("article");
  card.className = compact ? "event-card event-card--compact" : "event-card";
  card.style.setProperty("--event-color", owner.color);
  card.innerHTML = `
    <div class="event-card__time">${formatTimeRange(eventItem)}</div>
    <h3>${escapeHtml(eventItem.title)}</h3>
    <p>${escapeHtml(owner.name)}${eventItem.note ? ` - ${escapeHtml(eventItem.note)}` : ""}</p>
  `;
  return card;
}

function getFilteredEvents() {
  const weekStart = getWeekStart(new Date());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  return state.events.filter((eventItem) => {
    const start = new Date(eventItem.start);
    return (
      state.selectedPeople.has(eventItem.ownerId) &&
      start >= weekStart &&
      start < weekEnd
    );
  });
}

function loadLocalEvents() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_EVENTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function updateClock() {
  const now = new Date();
  elements.clock.textContent = now.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  elements.todayLabel.textContent = now.toLocaleDateString("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function withWeekOffset(offset, time) {
  const day = getWeekStart(new Date());
  day.setDate(day.getDate() + offset);
  const [hours, minutes] = time.split(":").map(Number);
  day.setHours(hours, minutes, 0, 0);
  return day.toISOString();
}

function getCurrentWeekDays() {
  const start = getWeekStart(new Date());
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

function getWeekStart(date) {
  const start = new Date(date);
  const day = start.getDay() || 7;
  start.setDate(start.getDate() - day + 1);
  start.setHours(0, 0, 0, 0);
  return start;
}

function getPerson(id) {
  return people.find((person) => person.id === id) || people[0];
}

function byStart(a, b) {
  return new Date(a.start).getTime() - new Date(b.start).getTime();
}

function isSameDay(first, second) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function formatWeekday(date) {
  return date.toLocaleDateString("sv-SE", { weekday: "short" }).replace(".", "");
}

function formatDayAndTime(eventItem) {
  const start = new Date(eventItem.start);
  return `${start.toLocaleDateString("sv-SE", { weekday: "short" })} ${formatTimeRange(eventItem)}`;
}

function formatTimeRange(eventItem) {
  const options = { hour: "2-digit", minute: "2-digit" };
  return `${new Date(eventItem.start).toLocaleTimeString("sv-SE", options)}-${new Date(eventItem.end).toLocaleTimeString("sv-SE", options)}`;
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTimeInput(date) {
  return date.toTimeString().slice(0, 5);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}
