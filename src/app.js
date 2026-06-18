const STORAGE_KEY = "mazing.portal.unlocked";

const gate = document.querySelector("#gate");
const portal = document.querySelector("#portal");
const form = document.querySelector("#gateForm");
const input = document.querySelector("#unlockInput");
const message = document.querySelector("#gateMessage");
const lockButton = document.querySelector("#lockButton");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {
  document.documentElement.classList.add("reduce-motion");
}

if (localStorage.getItem(STORAGE_KEY) === "yes") {
  unlock();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim().toLowerCase();

  if (value === "yes") {
    localStorage.setItem(STORAGE_KEY, "yes");
    unlock();
    return;
  }

  message.textContent = 'Nope. Type "yes".';
  input.select();
});

lockButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  portal.hidden = true;
  gate.hidden = false;
  input.value = "";
  message.textContent = "";
  input.focus();
});

function unlock() {
  gate.hidden = true;
  portal.hidden = false;
}
