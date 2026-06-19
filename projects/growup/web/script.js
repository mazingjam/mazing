const months = [
  ["Månad 1", "Personlig godnattbok", "Namn, födelsemånad och första avatarval."],
  ["Månad 2", "Snutte eller favoritdjur", "Familjen väljer djur och färg i appen."],
  ["Månad 3", "Sensorisk mjuk leksak", "Första lekpromptarna för syn, ljud och grepp."],
  ["Månad 4", "Familjebok", "Föräldrar, syskon eller andra nära vuxna läggs till."],
  ["Månad 5", "Grepp och bit", "Säker leksak för hand-mun-utforskning."],
  ["Månad 6", "Matstart", "Haklapp, sked eller kort för nya smaker."],
  ["Månad 7", "Maglek", "Tummy-time-panel och korta lekförslag."],
  ["Månad 8", "Ljud och sång", "Ramsor och favoritsånger samlas i appen."],
  ["Månad 9", "Stapla och sortera", "Mjuka former eller stapelkoppar."],
  ["Månad 10", "Första ord", "Personlig mini-bok med familjens vardagsord."],
  ["Månad 11", "Rulla och krypa", "Mjuk boll eller rörelseleksak."],
  ["Månad 12", "Första året", "Milstolpar, födelsedagsbok och minnessidor."]
];

const state = {
  name: "Lilla stjärnan",
  month: "Juni 2026",
  skin: "varm persika",
  hair: "lite hår",
  plan: "Personal"
};

const monthGrid = document.querySelector("#monthGrid");
const childName = document.querySelector("#childName");
const birthMonth = document.querySelector("#birthMonth");
const previewTitle = document.querySelector("#previewTitle");
const previewDedication = document.querySelector("#previewDedication");
const previewDetails = document.querySelector("#previewDetails");
const phoneName = document.querySelector("#phoneName");
const phoneMonth = document.querySelector("#phoneMonth");
const saveState = document.querySelector("#saveState");
const intentButton = document.querySelector("#intentButton");

monthGrid.innerHTML = months
  .map(
    ([label, title, body]) => `
      <article class="month-card">
        <strong>${label}</strong>
        <h3>${title}</h3>
        <p>${body}</p>
      </article>
    `
  )
  .join("");

function updatePreview() {
  const cleanName = state.name.trim() || "Lilla stjärnan";
  previewTitle.textContent = `Godnatt, ${cleanName}`;
  previewDedication.textContent = `Till ${cleanName}, född ${state.month}.`;
  previewDetails.textContent = `Avatar: ${state.skin}, ${state.hair}. Plan: ${state.plan}.`;
  phoneName.textContent = `${cleanName}s första kväll`;
  phoneMonth.textContent = `${state.month} · Månad 1`;
}

childName.addEventListener("input", (event) => {
  state.name = event.target.value;
  updatePreview();
});

birthMonth.addEventListener("change", (event) => {
  state.month = event.target.value;
  updatePreview();
});

document.querySelectorAll(".swatch").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    state.skin = button.dataset.skin;
    updatePreview();
  });
});

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    if (button.dataset.hair) state.hair = button.dataset.hair;
    if (button.dataset.plan) state.plan = button.dataset.plan;
    updatePreview();
  });
});

intentButton.addEventListener("click", () => {
  const cleanName = state.name.trim() || "Lilla stjärnan";
  saveState.textContent = `Preview sparad lokalt för ${cleanName}. Nästa steg blir e-post/checkout i riktig MVP.`;
});

updatePreview();

