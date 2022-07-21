import { toggleAuthPage } from "./toggleAuthPage.js";

const token = JSON.parse(localStorage.getItem("userdata"))?.token || "";
const modalPage = document.querySelector(".authorization");

function CheckUser() {
  if (token === "") {
    modalPage.classList.toggle("d-none");
  }else{
    toggleAuthPage();
  }
}

export default CheckUser;
