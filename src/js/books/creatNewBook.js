import { creatBook } from "./crud.js";

export function toggleCreatBooks() {
  const toggleBookBtn = document.querySelector(".creat-books-btn");
  const creatBookPage = document.querySelector(".creatBook");
  const creatBookForm = document.querySelector(".creatBook__inner");

  toggleBookBtn.addEventListener("click", () => {
    creatBookPage.classList.toggle("d-none");
  });
  creatBookPage?.addEventListener("click", (e) => {
    if (e.path.indexOf(creatBookForm) === -1) {
      creatBookPage.classList.toggle("d-none");
    }
  });
}

export function getBookData(inputClass) {
  const creatBookInputs = document.querySelectorAll(inputClass);
  let bookData = {};
  creatBookInputs.forEach((element) => {
    bookData[element.name] =
      element.type === "number"
        ? +element.value
        : element.name === "genres"
        ? element.value.split(" ")
        : element.value;
  });
  return bookData;
}

export function addNewBooks() {
  const creatBookForm = document.querySelector(".creatBook__form");
  const creatBookPage = document.querySelector(".creatBook");
  creatBookForm.addEventListener("submit", () => {
    const bookdata = getBookData(".book__data");
    creatBook(bookdata);
    creatBookPage.classList.toggle("d-none");
  });
}