import showClarityAction from "./clarityAction.js";
import { getMoreInform, updateBook } from "./crud.js";
import { deleteBook } from "./crud.js";
import editBook from "./editBook.js";

async function renderMoreInform(bookId) {
  const favoriteInput = document.querySelector(".bookInfor__fav");
  const cartBtn = document.querySelector(".bookInfor__cart");
  const bookData = await getMoreInform(bookId);
  favoriteInput.dataset.id = bookData.id;
  cartBtn.dataset.id = bookData.id;
  favoriteInput.checked = bookData.isFavorite;

  for (var key in bookData) {
    if (key !== "id" && key !== "isFavorite")
      document.querySelector(`.${key}`).textContent = bookData[key];
  }
  editBook(bookData);
}

export function informFavorite() {
  const informFavBtn = document.querySelector(".bookInfor__fav");
  const cartFavorite = document.getElementById(informFavBtn.dataset.id);
  informFavBtn.addEventListener("click", () => {
    cartFavorite.checked = informFavBtn.checked;
    updateBook(informFavBtn.dataset.id, { isFavorite: informFavBtn.checked });
  });
}

export function informDelete() {
  const bookInform = document.querySelector(".bookInfor");
  const informDeleteBtn = document.querySelector(".bookInfor__cart");

  informDeleteBtn.addEventListener("click", () => {
    showClarityAction(informDeleteBtn.dataset.id);
    bookInform.classList.add("d-none");
  });
}

function bookInformPage() {
  const books = document.querySelectorAll(".book");
  const bookInform = document.querySelector(".bookInfor");
  const bookInformInner = document.querySelector(".bookInfor__inner");
  const bookBtns = document.querySelectorAll(".book__btns");
  const closeBtn = document.querySelector(".bookInfor__close");

  books.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      if (e.path.indexOf(bookBtns[index]) === -1) {
        renderMoreInform(element.dataset.id);
        bookInform.classList.remove("d-none");
      }
    });
  });

  bookInform?.addEventListener("click", (e) => {
    if (e.path.indexOf(bookInformInner) === -1) {
      bookInform.classList.add("d-none");
    }
  });
  closeBtn.addEventListener("click", ()=>{
    bookInform.classList.toggle("d-none");
  })
}

export default bookInformPage;
