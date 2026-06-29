const grid = document.querySelector("#cardGrid");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const energyFilter = document.querySelector("#energyFilter");
const sourceFilter = document.querySelector("#sourceFilter");
const sortSelect = document.querySelector("#sortSelect");
const typeSummary = document.querySelector("#typeSummary");
const cardCount = document.querySelector("#cardCount");

let cards = [];

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(",");

  return lines.map((line) => {
    const values = [];
    let current = "";
    let quoted = false;

    for (let i = 0; i < line.length; i += 1) {
      const char = line[i];
      if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        values.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current);

    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

function slugTag(value) {
  const lower = value.toLowerCase();
  if (lower.includes("hero")) return "hero";
  if (lower.includes("red")) return "red";
  if (lower.includes("blue")) return "blue";
  if (lower.includes("green")) return "green";
  if (lower.includes("white")) return "white";
  if (lower.includes("black")) return "black";
  if (lower.includes("generated")) return "generated";
  return "";
}

function setOptions(select, label, values) {
  select.innerHTML = `<option value="all">${label}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function renderOptions() {
  setOptions(typeFilter, "All types", [...new Set(cards.map((card) => card.type).filter(Boolean))].sort());
  setOptions(energyFilter, "All energy", [...new Set(cards.map((card) => card.energy).filter(Boolean))].sort());
  setOptions(sourceFilter, "All sources", [...new Set(cards.map((card) => card.sourceGroup).filter(Boolean))].sort());
}

function renderSummary(visibleCards = cards) {
  const counts = visibleCards.reduce((acc, card) => {
    const key = `${card.sourceGroup}: ${card.type}`;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  typeSummary.innerHTML = "";
  Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([type, count]) => {
      const pill = document.createElement("span");
      pill.className = "type-pill";
      pill.textContent = `${type}: ${count}`;
      typeSummary.append(pill);
    });
}

function matches(card) {
  const query = searchInput.value.trim().toLowerCase();
  const selectedType = typeFilter.value;
  const selectedEnergy = energyFilter.value;
  const selectedSource = sourceFilter.value;
  const haystack = `${card.name} ${card.type} ${card.category} ${card.notes} ${card.energy} ${card.sourceGroup}`.toLowerCase();

  return (
    (selectedType === "all" || card.type === selectedType) &&
    (selectedEnergy === "all" || card.energy === selectedEnergy) &&
    (selectedSource === "all" || card.sourceGroup === selectedSource) &&
    (!query || haystack.includes(query))
  );
}

function sortCards(items) {
  const sorted = [...items];
  const mode = sortSelect.value;

  sorted.sort((a, b) => {
    if (mode === "name") return a.name.localeCompare(b.name) || a.id.localeCompare(b.id);
    if (mode === "type") return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
    if (mode === "energy") return a.energy.localeCompare(b.energy) || a.name.localeCompare(b.name);
    return a.order - b.order;
  });

  return sorted;
}

function renderCards() {
  const filtered = sortCards(cards.filter(matches));
  cardCount.textContent = filtered.length;
  renderSummary(filtered);
  grid.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No cards match the current filters.";
    grid.append(empty);
    return;
  }

  filtered.forEach((card) => {
    const article = document.createElement("article");
    article.className = "card";

    const image = document.createElement("img");
    image.src = card.imagePath;
    image.alt = `${card.name} card`;
    image.loading = "lazy";

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h2");
    title.textContent = card.name;

    const meta = document.createElement("div");
    meta.className = "meta";
    [card.sourceGroup, card.type, card.energy, card.category].filter(Boolean).forEach((value) => {
      const tag = document.createElement("span");
      tag.className = `tag ${slugTag(value)}`;
      tag.textContent = value;
      meta.append(tag);
    });

    const notes = document.createElement("p");
    notes.textContent = card.notes;

    body.append(title, meta, notes);
    article.append(image, body);
    grid.append(article);
  });
}

async function init() {
  const [oldResponse, generatedResponse] = await Promise.all([
    fetch("old-cards/cards/cards.csv"),
    fetch("generated-cards/cards.csv"),
  ]);

  const oldCards = parseCsv(await oldResponse.text()).map((card, index) => ({
    ...card,
    order: index,
    energy: card.energy || energyFromText(`${card.category} ${card.notes}`),
    sourceGroup: "old archive",
    imagePath: `old-cards/cards/${card.file}`,
  }));

  const generatedCards = parseCsv(await generatedResponse.text()).map((card, index) => ({
    ...card,
    order: oldCards.length + index,
    category: card.energy,
    notes: "Generated local Krea 2 concept image.",
    sourceGroup: "generated",
    imagePath: `generated-cards/${card.file}`,
  }));

  cards = [...oldCards, ...generatedCards];
  renderOptions();
  renderCards();
}

function energyFromText(text) {
  const lower = text.toLowerCase();
  if (lower.includes("black")) return "black";
  if (lower.includes("white")) return "white";
  if (lower.includes("red") && lower.includes("blue")) return "red blue";
  if (lower.includes("green") && lower.includes("blue")) return "green blue";
  if (lower.includes("red") && lower.includes("green")) return "red green";
  if (lower.includes("red")) return "red";
  if (lower.includes("blue")) return "blue";
  if (lower.includes("green")) return "green";
  if (lower.includes("gold")) return "gold";
  return "unknown";
}

searchInput.addEventListener("input", renderCards);
typeFilter.addEventListener("change", renderCards);
energyFilter.addEventListener("change", renderCards);
sourceFilter.addEventListener("change", renderCards);
sortSelect.addEventListener("change", renderCards);

init().catch(() => {
  grid.innerHTML = '<p class="empty">Could not load the Sunder card catalog.</p>';
});
