import autorization from "./autorization";
import checkIn from "./checkIn";

function modalPage() {
  const nameInput = document.querySelector(".authorization__name");
  const passwordInput = document.querySelectorAll(".authorization__password");
  const authForm = document.querySelector(".authorization__form");

  authForm.addEventListener("submit", async () => {
    const user = {
      username: nameInput.value,
      password: passwordInput[0].value,
    };
    checkIn(user);
  }
);
}
export default modalPage;
