import { autorization } from "../books/crud.js";
import { renderValidation } from "./validatingInputs.js";

const nameInput = document.querySelector(".authorization__name");
const passwordInputs = document.querySelectorAll(".authorization__password");
const authForm = document.querySelector(".authorization__form");
const toggleAuthBtn = document.querySelector(".authorization__toggle");
const additionallyInputs = document.querySelector(".additionally__inputs");
const activeMode = document.querySelector(".authorization__title");
let authMode = false;

function resetWarningErrors() {
  const warningErrors = document.querySelectorAll(".errors");
  warningErrors.forEach((element, index) => {
    element.textContent = "";
  });
}

function changeMode() {
  toggleAuthBtn?.addEventListener("click", () => {
    authMode = !authMode;
    authForm.reset();
    resetWarningErrors();
    additionallyInputs.classList.toggle("d-none");
    [toggleAuthBtn.textContent, activeMode.textContent] = [
      activeMode.textContent,
      toggleAuthBtn.textContent,
    ];
  });
}

function getFormData() {
  const formData = new FormData(authForm);
  let userData = {};
  for (var pair of formData.entries()) {
    if (pair[1].length !==0 && pair[0]!=="repeatPassword") userData[pair[0]] = pair[1];
  }
  return userData;
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
    const user = getFormData();
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

async function sendUserData(userData) {
  const result = await autorization(userData, authMode ? "/signin" : "/login");
  if (typeof result === "string") {
    renderBackRequest(result);
  } else {
    localStorage.setItem("userdata", JSON.stringify(result));
    location.reload();
  }
}

function setModalPage() {
  changeMode();
  authForm.addEventListener("submit", async () => {
    trackToInput();
    const userData = checkInputs();
    userData && sendUserData(userData);
  });
}
export default setModalPage;
