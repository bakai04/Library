import { autorization, checkIn } from "./autorization";
import { renderValidation } from "./validatingInputs.js";

const nameInput = document.querySelector(".authorization__name");
const passwordInputs = document.querySelectorAll(".authorization__password");
const authForm = document.querySelector(".authorization__form");
const toggleAuthBtn = document.querySelector(".authorization__toggle");
const activeMode = document.querySelector(".authorization__title");
const repeatPassword = document.querySelector(".repeat-password");
const loader = document.querySelector(".loader");
let authMode = false;

function toggleAuth() {
  toggleAuthBtn?.addEventListener("click", () => {
    authMode = !authMode;
    repeatPassword.classList.toggle("d-none");
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

function renderBackRequest(backRequest) {
  const warningError = document.querySelector(".warning-usersData-error");
  warningError.textContent = backRequest + "*";
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

async function sendUserData() {
  const userData = checkInputs();
  loader.classList.toggle("d-none");
  const result = authMode
    ? await autorization(userData)
    : await checkIn(userData);
  loader.classList.toggle("d-none");
  if (typeof result === "string") {
    renderBackRequest(result);
  } else {
    localStorage.setItem("userdata", JSON.stringify(result));
  }
}

function setModalPage() {
  toggleAuth();
  authForm.addEventListener("submit", async () => {
    trackToInput();
    sendUserData();
  });
}
export default setModalPage;
