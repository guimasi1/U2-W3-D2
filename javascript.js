const nameField = document.getElementById("name");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const form = document.getElementById("form");
const showUser = document.getElementById("show-user");
const timerDisplay = document.getElementById("timer-display");

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

// localStorage.clear();

const showTimer = () => {
  if (sessionStorage.getItem("timerCounter")) {
    let timerCounter = sessionStorage.getItem("timerCounter");
    setInterval(() => {
      timerCounter++;
      sessionStorage.setItem("timerCounter", timerCounter);

      timerDisplay.innerHTML = sessionStorage.getItem("timerCounter");
    }, 1000);
  } else {
    let timerCounter = 0;
    sessionStorage.setItem("timerCounter", timerCounter);
    timerDisplay.innerHTML = sessionStorage.getItem("timerCounter");
  }
};

showTimer();
showTimer();
