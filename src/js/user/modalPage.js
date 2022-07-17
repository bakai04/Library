import autorization from "./autorization";
import checkIn from "./checkIn";
import { renderValidation } from "./validatingInputs.js";

const nameInput = document.querySelector(".authorization__name");
const passwordInputs = document.querySelectorAll(".authorization__password");
const authForm = document.querySelector(".authorization__form");
const toggleAuthBtn = document.querySelector(".authorization__toggle");
const activeMode = document.querySelector(".authorization__title");
let authMode = false;

function toggleAuth() {
  toggleAuthBtn.addEventListener("click", () => {
    authMode = !authMode;
    passwordInputs[1].classList.toggle("d-none");
    [toggleAuthBtn.textContent, activeMode.textContent] = [
      activeMode.textContent,
      toggleAuthBtn.textContent,
    ];
  });
}

function checkInputs() {
  const nameInputValid = renderValidation(nameInput);
  const passwordInputValid = renderValidation(passwordInputs[0]);
  const repeatPasInputValid = authMode
    ? renderValidation(passwordInputs[1])
    : true;

  if (
    nameInputValid === true &&
    passwordInputValid === true &&
    repeatPasInputValid === true
  ) {
    const user = {
      username: nameInput.value,
      password: passwordInputs[0].value,
    };
    return user;
  }
}

function trackToInput() {
  nameInput.addEventListener("input", () => {
    renderValidation(nameInput);
  });
  passwordInputs[0].addEventListener("input", () => {
    renderValidation(passwordInputs[0]);
  });
  passwordInputs[1].addEventListener("input", () => {
    renderValidation(passwordInputs[1]);
  });
}

function setModalPage() {
  toggleAuth();
  authForm.addEventListener("submit", async () => {
    trackToInput();
    const userData = checkInputs();
    if (userData) {
      authMode ? autorization(userData) : checkIn(userData);
    }
  });
}
export default setModalPage;
