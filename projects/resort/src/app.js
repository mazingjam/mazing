const resortDeck = [
  { name: "Budget Bungalows", type: "Family", trigger: 4, income: 5, upkeep: 0, value: 18 },
  { name: "Boardwalk Inn", type: "Beach", trigger: 5, income: 7, upkeep: 1, value: 24 },
  { name: "Surfside Hotel", type: "Beach", trigger: 6, income: 8, upkeep: 1, value: 28 },
  { name: "Downtown Suites", type: "City", trigger: 7, income: 9, upkeep: 2, value: 32 },
  { name: "Alpine Spa", type: "Mountain", trigger: 8, income: 10, upkeep: 2, value: 36 },
  { name: "Eco Lagoon", type: "Eco", trigger: 8, income: 9, upkeep: 0, value: 34 },
  { name: "Vineyard Retreat", type: "Luxury", trigger: 9, income: 13, upkeep: 3, value: 42 },
  { name: "Luxury Island", type: "Luxury", trigger: 10, income: 18, upkeep: 4, value: 55 },
  { name: "Ski Lodge", type: "Mountain", trigger: 6, income: 8, upkeep: 2, value: 30 },
  { name: "Kids Club Resort", type: "Family", trigger: 5, income: 6, upkeep: 0, value: 24 },
  { name: "Airport Hotel", type: "City", trigger: 7, income: 8, upkeep: 1, value: 30 },
  { name: "Coral Villas", type: "Beach", trigger: 9, income: 14, upkeep: 3, value: 45 }
];

const staffDeck = [
  { name: "Receptionist", wage: 2, text: "+2 nar en Family resort triggar.", effect: "familyBonus" },
  { name: "Concierge", wage: 3, text: "+4 nar en Luxury resort triggar.", effect: "luxuryBonus" },
  { name: "Head Chef", wage: 4, text: "+3 om minst tva av dina resorts triggar samma runda.", effect: "multiTrigger" },
  { name: "Marketing Lead", wage: 3, text: "+3 pa forsta triggerinkomsten varje runda.", effect: "marketing" },
  { name: "Operations Manager", wage: 5, text: "Minska totalt underhall med 4 varje runda.", effect: "upkeepDiscount" },
  { name: "Auctioneer", wage: 2, text: "Fa 2 tillbaka nar du vinner din forsta auktion varje runda.", effect: "auctionRebate" },
  { name: "Groundskeeper", wage: 2, text: "Mountain och Eco resorts har underhall -1.", effect: "natureUpkeep" },
  { name: "Event Planner", wage: 3, text: "City resorts ger +3 pa trigger 7.", effect: "cityBonus" }
];

const upgradeDeck = [
  { name: "Pool Area", anchor: 12, text: "Uppgraderad resort ger +4 inkomst.", effect: "income4" },
  { name: "Conference Wing", anchor: 18, text: "Resorten triggar aven pa ett intilliggande nummer.", effect: "wideTrigger" },
  { name: "Solar Roofs", anchor: 10, text: "Resortens underhall minskar med 2.", effect: "upkeep2" },
  { name: "Premium Villas", anchor: 22, text: "Resorten ger +8 inkomst, total personallon +1.", effect: "income8Wage1" },
  { name: "Shuttle Service", anchor: 14, text: "Om annan spelare triggar samma slag, fa 3.", effect: "shuttle" },
  { name: "Spa Package", anchor: 16, text: "Luxury eller Mountain resort ger +5 inkomst.", effect: "spa5" },
  { name: "Kids Program", anchor: 10, text: "Family resort ger +4 inkomst.", effect: "family4" },
  { name: "Green Certification", anchor: 12, text: "Eco resort ger +3 och +8 slutvarde.", effect: "eco3Value8" }
];

const eventDeck = [
  { name: "Hogsasong", text: "Alla resorts ger +3 denna runda.", effect: "allIncome3" },
  { name: "Stormvarning", text: "Beach resorts ger -4 denna runda.", effect: "beachMinus4" },
  { name: "Influencer Boom", text: "Luxury och Eco resorts ger +5 denna runda.", effect: "luxEco5" },
  { name: "Konferensvecka", text: "City resorts triggar aven pa 6 och 8 denna runda.", effect: "cityWide" },
  { name: "Skidsasong", text: "Mountain resorts ger dubbel basinkomst pa trigger 8.", effect: "skiDouble" },
  { name: "Familjelov", text: "Family resorts ger +4 och betalar inget underhall.", effect: "familyHoliday" }
];

const colors = ["#1f8a70", "#d94841", "#2f5f98", "#b98214"];
const names = ["Azur", "Solvik", "Nordic Stay", "Palm & Pine"];
const app = document.querySelector("#app");

const resortImages = {
  Beach: "assets/resorts/beach.png",
  Mountain: "assets/resorts/mountain.png",
  City: "assets/resorts/city.png",
  Family: "assets/resorts/family.png",
  Luxury: "assets/resorts/luxury.png",
  Eco: "assets/resorts/eco.png"
};

const staffImages = {
  Receptionist: "assets/staff/receptionist.png",
  Concierge: "assets/staff/concierge.png",
  "Head Chef": "assets/staff/head-chef.png",
  "Marketing Lead": "assets/staff/marketing-lead.png",
  "Operations Manager": "assets/staff/operations-manager.png",
  Auctioneer: "assets/staff/auctioneer.png",
  Groundskeeper: "assets/staff/groundskeeper.png",
  "Event Planner": "assets/staff/event-planner.png"
};

const upgradeImages = {
  "Pool Area": "assets/upgrades/pool-area.png",
  "Conference Wing": "assets/upgrades/conference-wing.png",
  "Solar Roofs": "assets/upgrades/solar-roofs.png",
  "Premium Villas": "assets/upgrades/premium-villas.png",
  "Shuttle Service": "assets/upgrades/shuttle-service.png",
  "Spa Package": "assets/upgrades/spa-package.png",
  "Kids Program": "assets/upgrades/kids-program.png",
  "Green Certification": "assets/upgrades/green-certification.png"
};

let state = newGame();

function newGame(playerCount = 3) {
  return {
    round: 1,
    maxRounds: 9,
    currentPlayer: 0,
    selectedMarketId: null,
    selectedBidder: 0,
    bidAmount: 10,
    dice: [null, null],
    activeEvent: null,
    market: [],
    decks: {
      resorts: shuffle(resortDeck).map(card),
      staff: shuffle(staffDeck).map(card),
      upgrades: shuffle(upgradeDeck).map(card),
      events: shuffle(eventDeck).map(card)
    },
    players: Array.from({ length: playerCount }, (_, index) => ({
      id: index,
      name: names[index],
      color: colors[index],
      cash: 80,
      debt: 0,
      resorts: [],
      staff: [],
      upgrades: [],
      wonAuctionThisRound: false
    })),
    log: ["Nytt spel startat. Fyll marknaden och borja buda."]
  };
}

function card(item) {
  return { ...item, id: crypto.randomUUID() };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function draw(deckName, count) {
  const deck = state.decks[deckName];
  const source = deck.length >= count ? deck : shuffle(deckName === "resorts" ? resortDeck : deckName === "staff" ? staffDeck : deckName === "upgrades" ? upgradeDeck : eventDeck).map(card);
  state.decks[deckName] = source;
  return state.decks[deckName].splice(0, count).map((item) => ({ ...item, kind: deckName }));
}

function fillMarket() {
  state.market = [...draw("resorts", 3), ...draw("staff", 2), ...draw("upgrades", 2)];
  state.selectedMarketId = state.market[0]?.id || null;
  state.bidAmount = suggestedBid(state.market[0]);
  pushLog(`Runda ${state.round}: marknaden ar fylld.`);
  render();
}

function suggestedBid(item) {
  if (!item) return 0;
  if (item.kind === "resorts") return Math.max(8, Math.round(item.value * 0.55));
  if (item.kind === "staff") return item.wage * 5 + 4;
  return item.anchor;
}

function buySelected() {
  const item = selectedMarket();
  const player = state.players[state.selectedBidder];
  const price = Number(state.bidAmount);
  if (!item || !player || price < 0) return;
  if (player.cash < price) {
    pushLog(`${player.name} har inte rad med budet ${price}.`);
    render();
    return;
  }

  player.cash -= price;
  let rebate = 0;
  if (!player.wonAuctionThisRound && hasStaff(player, "auctionRebate")) {
    rebate = 2;
    player.cash += rebate;
  }
  player.wonAuctionThisRound = true;

  if (item.kind === "resorts") player.resorts.push({ ...item, upgrades: [] });
  if (item.kind === "staff") player.staff.push(item);
  if (item.kind === "upgrades") player.upgrades.push(item);
  state.market = state.market.filter((marketItem) => marketItem.id !== item.id);
  state.selectedMarketId = state.market[0]?.id || null;
  state.bidAmount = suggestedBid(state.market[0]);

  pushLog(`${player.name} vann ${item.name} for ${price}${rebate ? ` och fick ${rebate} tillbaka` : ""}.`);
  render();
}

function discardSelected() {
  const item = selectedMarket();
  if (!item) return;
  state.market = state.market.filter((marketItem) => marketItem.id !== item.id);
  state.selectedMarketId = state.market[0]?.id || null;
  state.bidAmount = suggestedBid(state.market[0]);
  pushLog(`${item.name} gick osald och lamnade marknaden.`);
  render();
}

function attachUpgrade(playerId, upgradeId, resortId) {
  const player = state.players[playerId];
  const upgrade = player.upgrades.find((item) => item.id === upgradeId);
  const resort = player.resorts.find((item) => item.id === resortId);
  if (!upgrade || !resort) return;
  player.upgrades = player.upgrades.filter((item) => item.id !== upgradeId);
  resort.upgrades.push(upgrade);
  pushLog(`${player.name} satte ${upgrade.name} pa ${resort.name}.`);
  render();
}

function rollDice() {
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  state.dice = [d1, d2];
  const total = d1 + d2;
  const triggeredByPlayer = new Map();
  const incomes = [];

  state.players.forEach((player) => {
    const triggered = player.resorts.filter((resort) => triggers(resort, total));
    triggeredByPlayer.set(player.id, triggered);
  });

  state.players.forEach((player) => {
    const triggered = triggeredByPlayer.get(player.id);
    let marketingUsed = false;
    triggered.forEach((resort) => {
      let income = resort.income;
      income += upgradeIncome(player, resort);
      income += staffIncome(player, resort, total, triggered.length);
      income += eventIncome(resort, total);
      if (!marketingUsed && hasStaff(player, "marketing")) {
        income += 3;
        marketingUsed = true;
      }
      if (hasUpgrade(resort, "shuttle") && otherPlayerTriggered(player.id, triggeredByPlayer)) {
        income += 3;
      }
      income = Math.max(0, income);
      player.cash += income;
      incomes.push(`${player.name}: ${resort.name} gav ${income}`);
    });
  });

  payCosts();
  pushLog(`Tarning ${d1}+${d2}=${total}. ${incomes.length ? incomes.join(" | ") : "Inga resorts triggade."}`);
  render();
}

function triggers(resort, total) {
  if (resort.trigger === total) return true;
  if (hasUpgrade(resort, "wideTrigger") && Math.abs(resort.trigger - total) === 1) return true;
  if (state.activeEvent?.effect === "cityWide" && resort.type === "City" && (total === 6 || total === 8)) return true;
  return false;
}

function upgradeIncome(player, resort) {
  let value = 0;
  resort.upgrades.forEach((upgrade) => {
    if (upgrade.effect === "income4") value += 4;
    if (upgrade.effect === "income8Wage1") value += 8;
    if (upgrade.effect === "spa5" && ["Luxury", "Mountain"].includes(resort.type)) value += 5;
    if (upgrade.effect === "family4" && resort.type === "Family") value += 4;
    if (upgrade.effect === "eco3Value8" && resort.type === "Eco") value += 3;
  });
  return value;
}

function staffIncome(player, resort, total, triggeredCount) {
  let value = 0;
  if (hasStaff(player, "familyBonus") && resort.type === "Family") value += 2;
  if (hasStaff(player, "luxuryBonus") && resort.type === "Luxury") value += 4;
  if (hasStaff(player, "multiTrigger") && triggeredCount >= 2) value += 3;
  if (hasStaff(player, "cityBonus") && resort.type === "City" && total === 7) value += 3;
  return value;
}

function eventIncome(resort, total) {
  const event = state.activeEvent?.effect;
  if (event === "allIncome3") return 3;
  if (event === "beachMinus4" && resort.type === "Beach") return -4;
  if (event === "luxEco5" && ["Luxury", "Eco"].includes(resort.type)) return 5;
  if (event === "skiDouble" && resort.type === "Mountain" && total === 8) return resort.income;
  if (event === "familyHoliday" && resort.type === "Family") return 4;
  return 0;
}

function payCosts() {
  state.players.forEach((player) => {
    const wages = player.staff.reduce((sum, staff) => sum + staff.wage, 0) + premiumWagePenalty(player);
    const upkeep = Math.max(0, player.resorts.reduce((sum, resort) => sum + resortUpkeep(player, resort), 0) - (hasStaff(player, "upkeepDiscount") ? 4 : 0));
    const cost = wages + upkeep;
    player.cash -= cost;
    if (player.cash < 0) {
      player.cash += 20;
      player.debt += 1;
      pushLog(`${player.name} tog krislan pa 20. Skuldmarkorer: ${player.debt}.`);
    }
    if (cost > 0) pushLog(`${player.name} betalade ${cost} i loner/underhall.`);
  });
}

function resortUpkeep(player, resort) {
  if (state.activeEvent?.effect === "familyHoliday" && resort.type === "Family") return 0;
  let upkeep = resort.upkeep;
  if (hasStaff(player, "natureUpkeep") && ["Mountain", "Eco"].includes(resort.type)) upkeep -= 1;
  if (hasUpgrade(resort, "upkeep2")) upkeep -= 2;
  return Math.max(0, upkeep);
}

function premiumWagePenalty(player) {
  return player.resorts.reduce((sum, resort) => sum + resort.upgrades.filter((upgrade) => upgrade.effect === "income8Wage1").length, 0);
}

function endRound() {
  state.market = [];
  state.players.forEach((player) => {
    player.wonAuctionThisRound = false;
  });
  if (state.round === 3 || state.round === 6) {
    state.activeEvent = draw("events", 1)[0];
    pushLog(`Event: ${state.activeEvent.name}. ${state.activeEvent.text}`);
  } else {
    state.activeEvent = null;
  }
  if (state.round < state.maxRounds) {
    state.round += 1;
    state.currentPlayer = (state.currentPlayer + 1) % state.players.length;
    fillMarket();
  } else {
    pushLog("Spelet ar slut. Rakna formogenhet i resultatpanelen.");
    render();
  }
}

function selectedMarket() {
  return state.market.find((item) => item.id === state.selectedMarketId);
}

function hasStaff(player, effect) {
  return player.staff.some((staff) => staff.effect === effect);
}

function hasUpgrade(resort, effect) {
  return resort.upgrades.some((upgrade) => upgrade.effect === effect);
}

function otherPlayerTriggered(playerId, triggeredByPlayer) {
  return [...triggeredByPlayer.entries()].some(([id, resorts]) => id !== playerId && resorts.length > 0);
}

function netWorth(player) {
  const resortValue = player.resorts.reduce((sum, resort) => sum + resort.value + resort.upgrades.reduce((upgradeSum, upgrade) => upgradeSum + (upgrade.effect === "eco3Value8" ? 8 : 0), 0), 0);
  return player.cash + resortValue - player.debt * 30;
}

function pushLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 9);
}

function setPlayers(count) {
  state = newGame(count);
  fillMarket();
}

function render() {
  const selected = selectedMarket();
  app.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">Digital prototyp v0.1</p>
        <h1>Resort Royale</h1>
      </div>
      <div class="round-panel">
        <span>Runda</span>
        <strong>${state.round}/${state.maxRounds}</strong>
      </div>
      <div class="player-toggle" role="group" aria-label="Antal spelare">
        ${[2, 3, 4].map((count) => `<button class="${state.players.length === count ? "active" : ""}" data-action="players" data-count="${count}">${count}P</button>`).join("")}
      </div>
    </header>

    <main class="layout">
      <section class="market">
        <div class="section-head">
          <div>
            <p class="eyebrow">Auktion</p>
            <h2>Marknad</h2>
          </div>
          <button class="icon-button" title="Fyll marknaden" data-action="fill">↻</button>
        </div>
        <div class="market-grid">
          ${state.market.map(renderMarketCard).join("") || `<div class="empty">Marknaden ar tom.</div>`}
        </div>
      </section>

      <aside class="auction-panel">
        <p class="eyebrow">Bud</p>
        ${selected ? renderAuction(selected) : `<h2>Ingen auktion</h2><p class="muted">Fyll marknaden for att fortsatta.</p>`}
      </aside>

      <section class="players">
        <div class="section-head">
          <div>
            <p class="eyebrow">Bolag</p>
            <h2>Spelare</h2>
          </div>
          <button class="primary" data-action="roll">Slå tärning</button>
        </div>
        <div class="dice">
          <span>${state.dice[0] ?? "-"}</span>
          <span>${state.dice[1] ?? "-"}</span>
          <strong>${state.dice[0] ? state.dice[0] + state.dice[1] : "Väntar"}</strong>
        </div>
        <div class="player-grid">${state.players.map(renderPlayer).join("")}</div>
      </section>

      <aside class="status-panel">
        <div class="event-box">
          <p class="eyebrow">Event</p>
          <h2>${state.activeEvent?.name || "Inget aktivt"}</h2>
          <p>${state.activeEvent?.text || "Event kommer efter runda 3 och 6."}</p>
        </div>
        <button class="end-round" data-action="end">Avsluta runda</button>
        <div class="log">
          <p class="eyebrow">Logg</p>
          ${state.log.map((entry) => `<p>${entry}</p>`).join("")}
        </div>
      </aside>
    </main>
  `;
}

function renderMarketCard(item) {
  const selected = item.id === state.selectedMarketId;
  return `
    <button class="card market-card ${selected ? "selected" : ""}" data-action="select" data-id="${item.id}">
      <img class="card-art" src="${assetFor(item)}" alt="" />
      <div class="card-title-row">
        <span class="tag">${labelKind(item.kind)}</span>
        ${item.kind === "resorts" ? `<span class="trigger-chip">T${item.trigger}</span>` : ""}
      </div>
      <h3>${item.name}</h3>
      ${item.kind === "resorts" ? `<div class="stats"><span>T${item.trigger}</span><span>${item.income} inkomst</span><span>${item.upkeep} drift</span></div><p>${item.type} resort, värde ${item.value}</p>` : ""}
      ${item.kind === "staff" ? `<div class="stats"><span>Lön ${item.wage}</span></div><p>${item.text}</p>` : ""}
      ${item.kind === "upgrades" ? `<div class="stats"><span>Ankare ${item.anchor}</span></div><p>${item.text}</p>` : ""}
    </button>
  `;
}

function renderAuction(item) {
  return `
    <img class="auction-art" src="${assetFor(item)}" alt="" />
    <h2>${item.name}</h2>
    <p class="muted">${labelKind(item.kind)} · rekommenderat bud ${suggestedBid(item)}</p>
    <label>Budgivare
      <select data-action="bidder">
        ${state.players.map((player, index) => `<option value="${index}" ${state.selectedBidder === index ? "selected" : ""}>${player.name} (${player.cash})</option>`).join("")}
      </select>
    </label>
    <label>Bud
      <input type="number" min="0" step="1" value="${state.bidAmount}" data-action="bid" />
    </label>
    <div class="auction-actions">
      <button class="primary" data-action="buy">Sälj kort</button>
      <button data-action="discard">Passa alla</button>
    </div>
  `;
}

function renderPlayer(player) {
  return `
    <article class="player-card" style="--accent:${player.color}">
      <div class="player-head">
        <h3>${player.name}</h3>
        <strong>${player.cash}</strong>
      </div>
      <div class="mini-stats">
        <span>${player.resorts.length} resorts</span>
        <span>${player.staff.length} staff</span>
        <span>Netto ${netWorth(player)}</span>
      </div>
      <div class="holdings">
        ${player.resorts.map((resort) => `
          <div class="holding">
            <img src="${assetFor(resort)}" alt="" />
            <div>
              <b>${resort.name}</b>
              <span>${resort.type} · T${resort.trigger} · ${resort.income}</span>
              <small>${resort.upgrades.map((upgrade) => upgrade.name).join(", ") || "Ingen upgrade"}</small>
            </div>
          </div>
        `).join("") || `<p class="muted">Inga resorts.</p>`}
      </div>
      ${player.upgrades.length && player.resorts.length ? `
        <div class="upgrade-row">
          <select data-action="upgrade-card" data-player="${player.id}">
            ${player.upgrades.map((upgrade) => `<option value="${upgrade.id}">${upgrade.name}</option>`).join("")}
          </select>
          <select data-action="upgrade-resort" data-player="${player.id}">
            ${player.resorts.map((resort) => `<option value="${resort.id}">${resort.name}</option>`).join("")}
          </select>
          <button data-action="attach" data-player="${player.id}">Sätt</button>
        </div>
      ` : ""}
      <div class="staff-list">
        ${player.staff.map((staff) => `<span><img src="${assetFor(staff)}" alt="" />${staff.name} (${staff.wage})</span>`).join("")}
      </div>
    </article>
  `;
}

function assetFor(item) {
  if (item.kind === "resorts" || item.type) return resortImages[item.type];
  if (item.kind === "staff" || staffImages[item.name]) return staffImages[item.name];
  if (item.kind === "upgrades" || upgradeImages[item.name]) return upgradeImages[item.name];
  return "";
}

function labelKind(kind) {
  return ({ resorts: "Resort", staff: "Personal", upgrades: "Upgrade", events: "Event" })[kind] || kind;
}

app.addEventListener("input", (event) => {
  const action = event.target.dataset.action;
  if (action === "bid") state.bidAmount = Number(event.target.value);
  if (action === "bidder") state.selectedBidder = Number(event.target.value);
});

app.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "select") {
    state.selectedMarketId = button.dataset.id;
    state.bidAmount = suggestedBid(selectedMarket());
    render();
  }
  if (action === "players") setPlayers(Number(button.dataset.count));
  if (action === "fill") fillMarket();
  if (action === "buy") buySelected();
  if (action === "discard") discardSelected();
  if (action === "roll") rollDice();
  if (action === "end") endRound();
  if (action === "attach") {
    const playerId = Number(button.dataset.player);
    const upgrade = app.querySelector(`[data-action="upgrade-card"][data-player="${playerId}"]`)?.value;
    const resort = app.querySelector(`[data-action="upgrade-resort"][data-player="${playerId}"]`)?.value;
    attachUpgrade(playerId, upgrade, resort);
  }
});

fillMarket();
