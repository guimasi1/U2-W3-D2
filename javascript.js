const nameField = document.getElementById("name");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const form = document.getElementById("form");
const showUser = document.getElementById("show-user");
const timerDisplay = document.getElementById("timer-display");
const minutes = document.getElementById("minutes");

// form.addEventListener("keydown" === "Enter", (e) => {
//   e.preventDefault;
//   save();
// });

const save = () => {
  localStorage.setItem("name", nameField.value);
  console.log(nameField.value);
  nameField.value = "";
  renderUser();
};

const deleteUser = () => {
  localStorage.removeItem("name");
  renderUser();
};

const renderUser = () => {
  showUser.innerText = localStorage.getItem("name");
};

renderUser();

saveButton.addEventListener("click", save);
deleteButton.addEventListener("click", deleteUser);

const showTimer = () => {
  let timerCounter = parseInt(sessionStorage.getItem("timerCounter")) || 0;
  let minutesCounter = parseInt(sessionStorage.getItem("minutes")) || 0;

  setInterval(() => {
    timerCounter++;
    sessionStorage.setItem("timerCounter", timerCounter);

    if (timerCounter === 60) {
      timerCounter = 0;
      minutesCounter++;
      sessionStorage.setItem("minutes", minutesCounter);
    }

    timerDisplay.innerHTML = `${timerCounter} seconds`;
    minutes.innerHTML = `${minutesCounter} minutes`;
  }, 1000);
};

showTimer();
