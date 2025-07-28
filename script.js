let selectedMood = null;

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // YYYY-MM-DD
}

function selectMood(mood) {
  selectedMood = mood;
  document.getElementById("status").textContent = `Wybrano nastrój: ${mood}`;
}

function submitMood() {
  if (!selectedMood) {
    alert("Najpierw wybierz nastrój!");
    return;
  }

  const comment = document.getElementById("comment").value;
  const date = getTodayDate();
  let moods = JSON.parse(localStorage.getItem("moods")) || {};

  moods[date] = {
    mood: selectedMood,
    comment: comment
  };

  localStorage.setItem("moods", JSON.stringify(moods));
  document.getElementById("status").textContent = `Zapisano: ${selectedMood}`;
  document.getElementById("comment").value = "";
  selectedMood = null;

  showStats();
}

function showToday() {
  const today = getTodayDate();
  const el = document.getElementById("today");
  if (el) el.textContent = `Dziś: ${today}`;
}

function showStats() {
  const statsContainer = document.getElementById("stats");
  if (!statsContainer) return;

  const moods = JSON.parse(localStorage.getItem("moods")) || {};
  const counts = { '😊': 0, '😐': 0, '😞': 0 };

  Object.values(moods).forEach(entry => {
    if (entry && entry.mood && counts[entry.mood] !== undefined) {
      counts[entry.mood]++;
    }
  });

  statsContainer.innerHTML = `
    😊: ${counts['😊']} &nbsp;|&nbsp;
    😐: ${counts['😐']} &nbsp;|&nbsp;
    😞: ${counts['😞']}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  showToday();
  showStats();
});
