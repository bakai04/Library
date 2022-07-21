import { deleteBook } from "./crud.js";

function showClarityAction(bookId) {
  const clarifyActionPage = document.querySelector(".clarifyAction");
  const yesBtn = document.querySelector(".yes");
  const noBtn = document.querySelector(".no");
  
  clarifyActionPage.classList.remove("d-none");
  
  yesBtn.addEventListener("click", () => {
    clarifyActionPage.classList.add("d-none");
    deleteBook(bookId);
  });

  noBtn.addEventListener("click", () => {
    clarifyActionPage.classList.add("d-none");
  });

}

export default showClarityAction;
