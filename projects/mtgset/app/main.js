const CARD_SOURCE = "../cards/draft/archetype-staples-v1.md";
const REVIEW_STORAGE_KEY = "mtgset.cardReview.v1";
const EDIT_STORAGE_KEY = "mtgset.cardEdits.v1";

const state = {
  cards: [],
  archetypes: [],
  review: loadReviewState(),
  edits: loadEditState(),
  editing: {},
  query: "",
  archetype: "",
  rarity: "",
  reviewFilter: "",
};

const elements = {
  summary: document.querySelector("#summary"),
  refreshButton: document.querySelector("#refreshButton"),
  exportButton: document.querySelector("#exportButton"),
  clearDraftsButton: document.querySelector("#clearDraftsButton"),
  searchInput: document.querySelector("#searchInput"),
  archetypeFilter: document.querySelector("#archetypeFilter"),
  rarityFilter: document.querySelector("#rarityFilter"),
  reviewFilter: document.querySelector("#reviewFilter"),
  cardList: document.querySelector("#cardList"),
};

elements.refreshButton.addEventListener("click", loadCards);
elements.exportButton.addEventListener("click", exportReview);
elements.clearDraftsButton.addEventListener("click", clearAllEdits);
elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderCards();
});
elements.archetypeFilter.addEventListener("change", (event) => {
  state.archetype = event.target.value;
  renderCards();
});
elements.rarityFilter.addEventListener("change", (event) => {
  state.rarity = event.target.value;
  renderCards();
});
elements.reviewFilter.addEventListener("change", (event) => {
  state.reviewFilter = event.target.value;
  renderCards();
});
elements.cardList.addEventListener("click", (event) => {
  const reviewButton = event.target.closest("[data-review-toggle]");
  if (reviewButton) {
    toggleRethink(reviewButton.dataset.cardKey);
    return;
  }

  const editButton = event.target.closest("[data-edit-toggle]");
  if (editButton) {
    toggleEditing(editButton.dataset.cardKey);
    return;
  }

  const saveButton = event.target.closest("[data-save-edit]");
  if (saveButton) {
    saveInlineEdit(saveButton.dataset.cardKey);
    return;
  }

  const resetButton = event.target.closest("[data-reset-edit]");
  if (resetButton) {
    resetInlineEdit(resetButton.dataset.cardKey);
  }
});

loadCards();

async function loadCards() {
  elements.summary.textContent = "Loading cards...";
  try {
    const response = await fetch(`${CARD_SOURCE}?t=${Date.now()}`);
    if (!response.ok) {
      throw new Error(`Could not load ${CARD_SOURCE}`);
    }

    const markdown = await response.text();
    const cards = parseStaplesMarkdown(markdown);
    state.cards = cards;
    state.archetypes = [...new Set(cards.map((card) => card.archetype))];
    renderArchetypeOptions();
    renderCards();
  } catch (error) {
    elements.summary.textContent = "Could not load card file. Start a local server from D:\\Dev\\MTGSet.";
    elements.cardList.innerHTML = `<div class="empty">${escapeHtml(error.message)}</div>`;
  }
}

function parseStaplesMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const cards = [];
  let archetype = "";
  let rarity = "";
  let current = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const archetypeMatch = line.match(/^## (.+)$/);
    const rarityMatch = line.match(/^### (Commons|Uncommons|Rares)$/);
    const cardMatch = line.match(/^\*\*(.+?)\*\*\s+`(.+?)`\s*$/);

    if (archetypeMatch) {
      finishCard();
      archetype = archetypeMatch[1].trim();
      rarity = "";
      continue;
    }

    if (rarityMatch) {
      finishCard();
      rarity = rarityMatch[1];
      continue;
    }

    if (cardMatch) {
      finishCard();
      current = {
        name: cardMatch[1].trim(),
        mana: cardMatch[2].trim(),
        archetype,
        rarity,
        typeLine: "",
        rules: [],
      };
      continue;
    }

    if (!current || !line.trim()) {
      continue;
    }

    const cleaned = line.replace(/\s{2,}$/g, "").trim();
    if (!current.typeLine) {
      current.typeLine = cleaned;
    } else {
      current.rules.push(cleaned);
    }
  }

  finishCard();
  return cards;

  function finishCard() {
    if (!current) {
      return;
    }
    current.rulesText = current.rules.join("\n");
    current.key = cardKey(current);
    delete current.rules;
    cards.push(current);
    current = null;
  }
}

function renderArchetypeOptions() {
  const selected = state.archetype;
  elements.archetypeFilter.innerHTML = '<option value="">All archetypes</option>';
  for (const archetype of state.archetypes) {
    const option = document.createElement("option");
    option.value = archetype;
    option.textContent = archetype;
    elements.archetypeFilter.append(option);
  }
  elements.archetypeFilter.value = selected;
}

function renderCards() {
  const filtered = state.cards.filter((card) => {
    if (state.archetype && card.archetype !== state.archetype) {
      return false;
    }
    if (state.rarity && card.rarity !== state.rarity) {
      return false;
    }
    const needsRethink = Boolean(state.review[card.key]?.needsRethink);
    const edited = Boolean(state.edits[card.key]);
    if (state.reviewFilter === "needs-rethink" && !needsRethink) {
      return false;
    }
    if (state.reviewFilter === "edited" && !edited) {
      return false;
    }
    if (state.reviewFilter === "unmarked" && needsRethink) {
      return false;
    }
    if (!state.query) {
      return true;
    }

    const haystack = [
      card.name,
      card.mana,
      card.typeLine,
      card.rulesText,
      card.archetype,
      card.rarity,
    ].join(" ").toLowerCase();
    return haystack.includes(state.query);
  });

  elements.summary.textContent = `${filtered.length} of ${state.cards.length} cards`;
  if (!filtered.length) {
    elements.cardList.innerHTML = '<div class="empty">No cards match the current filters.</div>';
    return;
  }

  elements.cardList.innerHTML = filtered.map(renderCard).join("");
}

function renderCard(card) {
  const needsRethink = Boolean(state.review[card.key]?.needsRethink);
  const edited = Boolean(state.edits[card.key]);
  const displayCard = { ...card, ...state.edits[card.key] };
  const isEditing = Boolean(state.editing[card.key]);
  return `
    <article class="card ${needsRethink ? "needs-rethink" : ""} ${edited ? "edited" : ""}">
      <div class="card-header">
        <h2 class="card-name">${escapeHtml(displayCard.name)}</h2>
        <div class="mana">${escapeHtml(displayCard.mana)}</div>
      </div>
      <div class="meta">
        <span class="pill">${escapeHtml(card.archetype)}</span>
        <span class="pill">${escapeHtml(card.rarity)}</span>
        ${edited ? '<span class="pill">Edited</span>' : ""}
      </div>
      <div class="type-line">${escapeHtml(displayCard.typeLine)}</div>
      <div class="rules">${escapeHtml(displayCard.rulesText)}</div>
      ${isEditing ? renderEditor(card, displayCard) : ""}
      <div class="card-actions">
        <button
          class="review-button ${needsRethink ? "active" : ""}"
          type="button"
          data-review-toggle
          data-card-key="${escapeHtml(card.key)}"
          aria-pressed="${needsRethink ? "true" : "false"}"
        >
          ${needsRethink ? "Needs rethink" : "Mark rethink"}
        </button>
        <button
          class="edit-button ${isEditing ? "active" : ""}"
          type="button"
          data-edit-toggle
          data-card-key="${escapeHtml(card.key)}"
        >
          ${isEditing ? "Close edit" : "Edit"}
        </button>
        ${edited ? `
          <button
            class="reset-button"
            type="button"
            data-reset-edit
            data-card-key="${escapeHtml(card.key)}"
          >
            Reset edit
          </button>
        ` : ""}
      </div>
    </article>
  `;
}

function renderEditor(originalCard, displayCard) {
  return `
    <div class="editor" data-editor="${escapeHtml(originalCard.key)}">
      <label>
        Name
        <input data-field="name" value="${escapeHtml(displayCard.name)}">
      </label>
      <label>
        Cost
        <input data-field="mana" value="${escapeHtml(displayCard.mana)}">
      </label>
      <label>
        Type line
        <input data-field="typeLine" value="${escapeHtml(displayCard.typeLine)}">
      </label>
      <label>
        Rules text
        <textarea data-field="rulesText">${escapeHtml(displayCard.rulesText)}</textarea>
      </label>
      <button class="save-button" type="button" data-save-edit data-card-key="${escapeHtml(originalCard.key)}">
        Save edit
      </button>
    </div>
  `;
}

function cardKey(card) {
  return `${card.archetype}::${card.rarity}::${card.name}`;
}

function toggleRethink(key) {
  const current = Boolean(state.review[key]?.needsRethink);
  state.review[key] = { needsRethink: !current, updatedAt: new Date().toISOString() };
  if (!state.review[key].needsRethink) {
    delete state.review[key];
  }
  saveReviewState();
  renderCards();
}

function toggleEditing(key) {
  state.editing[key] = !state.editing[key];
  if (!state.editing[key]) {
    delete state.editing[key];
  }
  renderCards();
}

function saveInlineEdit(key) {
  const editor = document.querySelector(`[data-editor="${cssEscape(key)}"]`);
  const original = state.cards.find((card) => card.key === key);
  if (!editor || !original) {
    return;
  }

  const next = {
    name: editor.querySelector('[data-field="name"]').value.trim(),
    mana: editor.querySelector('[data-field="mana"]').value.trim(),
    typeLine: editor.querySelector('[data-field="typeLine"]').value.trim(),
    rulesText: editor.querySelector('[data-field="rulesText"]').value.trim(),
  };

  const changed = Object.entries(next).some(([field, value]) => value !== original[field]);
  if (changed) {
    state.edits[key] = { ...next, updatedAt: new Date().toISOString() };
  } else {
    delete state.edits[key];
  }

  state.review[key] = { needsRethink: true, updatedAt: new Date().toISOString() };
  saveEditState();
  saveReviewState();
  renderCards();
}

function resetInlineEdit(key) {
  delete state.edits[key];
  saveEditState();
  renderCards();
}

function clearAllEdits() {
  if (!confirm("Clear all local card edits on this device?")) {
    return;
  }
  state.edits = {};
  saveEditState();
  renderCards();
}

async function exportReview() {
  const marked = state.cards.filter((card) => state.review[card.key]?.needsRethink || state.edits[card.key]);
  const lines = [
    "# MTGSet Review Export",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
  ];

  for (const card of marked) {
    const edit = state.edits[card.key];
    lines.push(`## ${card.name}`);
    lines.push("");
    lines.push(`- Key: ${card.key}`);
    lines.push(`- Archetype: ${card.archetype}`);
    lines.push(`- Rarity: ${card.rarity}`);
    lines.push(`- Needs rethink: ${state.review[card.key]?.needsRethink ? "yes" : "no"}`);
    if (edit) {
      lines.push("");
      lines.push("### Edited Version");
      lines.push("");
      lines.push(`**${edit.name}** \`${edit.mana}\``);
      lines.push(`${edit.typeLine}`);
      lines.push(`${edit.rulesText}`);
      lines.push("");
      lines.push("### Original Version");
      lines.push("");
      lines.push(`**${card.name}** \`${card.mana}\``);
      lines.push(`${card.typeLine}`);
      lines.push(`${card.rulesText}`);
    }
    lines.push("");
  }

  const text = lines.join("\n");
  try {
    await navigator.clipboard.writeText(text);
    elements.summary.textContent = `Copied ${marked.length} reviewed cards to clipboard`;
  } catch {
    downloadText("mtgset-review-export.md", text);
    elements.summary.textContent = `Downloaded ${marked.length} reviewed cards`;
  }
}

function downloadText(filename, text) {
  const url = URL.createObjectURL(new Blob([text], { type: "text/markdown" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function loadReviewState() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveReviewState() {
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(state.review));
}

function loadEditState() {
  try {
    return JSON.parse(localStorage.getItem(EDIT_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveEditState() {
  localStorage.setItem(EDIT_STORAGE_KEY, JSON.stringify(state.edits));
}

function cssEscape(value) {
  if (window.CSS?.escape) {
    return CSS.escape(value);
  }
  return String(value).replaceAll('"', '\\"');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
