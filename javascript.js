const nameField = document.getElementById("name");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const form = document.getElementById("form");
const showUser = document.getElementById("show-user");
const timerDisplay = document.getElementById("timer-display");
const minutes = document.getElementById("minutes");
const resetButton = document.getElementById("reset-button");

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    save();
  }
});

const save = () => {
  if (nameField.value.length > 0) {
    localStorage.setItem("name", nameField.value);
    nameField.value = "";
    renderUser();
  }
};

const deleteUser = () => {
  localStorage.removeItem("name");
  renderUser();
};

const renderUser = () => {
  showUser.innerText = localStorage.getItem("name");
};

const resetAll = () => {
  localStorage.clear();
  sessionStorage.clear();
  timerCounter = 0;
  minutesCounter = 0;
  timerDisplay.innerHTML = "0";
  minutes.innerHTML = "0";
  renderUser();
  location.reload();
};

saveButton.addEventListener("click", save);

deleteButton.addEventListener("click", deleteUser);
resetButton.addEventListener("click", resetAll);

const showTimer = () => {
  let timerCounter = parseInt(sessionStorage.getItem("timerCounter")) || 0;
  let minutesCounter = parseInt(sessionStorage.getItem("minutes")) || 0;

  setInterval(() => {
    timerCounter++;
    sessionStorage.setItem("timerCounter", timerCounter);

    if (timerCounter >= 60) {
      timerCounter = 0;
      minutesCounter++;
      sessionStorage.setItem("minutes", minutesCounter);
    }

    if (minutesCounter === 1) {
      minutes.innerHTML = `${minutesCounter} minute`;
    } else {
      minutes.innerHTML = `${minutesCounter} minutes`;
    }
    timerDisplay.innerHTML = `${timerCounter} seconds`;
  }, 1000);
};

showTimer();
renderUser();
