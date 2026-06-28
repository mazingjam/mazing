const grid = document.querySelector("#cardGrid");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
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
  return "";
}

function renderTypeOptions() {
  const types = [...new Set(cards.map((card) => card.type))].sort();
  typeFilter.innerHTML = '<option value="all">All types</option>';
  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.append(option);
  });
}

function renderSummary() {
  const counts = cards.reduce((acc, card) => {
    acc[card.type] = (acc[card.type] ?? 0) + 1;
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
  const haystack = `${card.name} ${card.type} ${card.category} ${card.notes}`.toLowerCase();
  return (selectedType === "all" || card.type === selectedType) && (!query || haystack.includes(query));
}

function renderCards() {
  const filtered = cards.filter(matches);
  cardCount.textContent = filtered.length;
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
    image.src = `old-cards/cards/${card.file}`;
    image.alt = `${card.name} card`;
    image.loading = "lazy";

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h2");
    title.textContent = card.name;

    const meta = document.createElement("div");
    meta.className = "meta";
    [card.type, card.category].forEach((value) => {
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
  const response = await fetch("old-cards/cards/cards.csv");
  const text = await response.text();
  cards = parseCsv(text);
  renderTypeOptions();
  renderSummary();
  renderCards();
}

searchInput.addEventListener("input", renderCards);
typeFilter.addEventListener("change", renderCards);

init().catch(() => {
  grid.innerHTML = '<p class="empty">Could not load the Sunder card catalog.</p>';
});
