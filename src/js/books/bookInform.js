import { getMoreInform, updateBook } from "./crud.js";
import { deleteBook } from "./crud.js";
import editBook from "./editBook.js";

async function renderMoreInform(bookId) {
  const moreInformBtns = document.querySelector(".bookInfor__btns");
  const bookData = await getMoreInform(bookId);
  moreInformBtns.innerHTML = `
      <button class="open-editPage-btn">Редактировать</button>
      <input class="bookInfor__fav d-none" id="b-fav-${
        bookData.id
      }" type="checkbox" ${
    bookData.isFavorite && "checked"
  }></input>             
      <label class="bookInfor__fav-label" for="b-fav-${bookData.id}"></label>
      <img class="cart bookInfor__cart" id="cart-${
        bookData.id
      }" src="./assets/img/cart.svg">`;

  for (var key in bookData) {
    if (key !== "id" && key !== "isFavorite")
      document.querySelector(`.${key}`).textContent = bookData[key];
  }

  informFavorite();
  informDelete();
  editBook(bookData);
}

function informFavorite() {
  const informFavBtn = document.querySelector(".bookInfor__fav");
  informFavBtn.addEventListener("click", () => {
    const bookId = informFavBtn.id.slice(6, informFavBtn.id.length);
    updateBook(bookId, { isFavorite: informFavBtn.checked });
  });
}

function informDelete() {
  const informDeleteBtn = document.querySelector(".bookInfor__cart");
  informDeleteBtn.addEventListener("click", () => {
    const bookId = informDeleteBtn.id.slice(5, informDeleteBtn.id.length);
    deleteBook(bookId);
  });
}

function bookInformPage() {
  const books = document.querySelectorAll(".book");
  const bookInform = document.querySelector(".bookInfor");
  const bookInformInner = document.querySelector(".bookInfor__inner");
  const bookBtns = document.querySelectorAll(".book__btns");

  books.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      if (e.path.indexOf(bookBtns[index]) === -1) {
        renderMoreInform(element.id);
        bookInform.classList.remove("d-none");
      }
    });
  });

  bookInform?.addEventListener("click", (e) => {
    if (e.path.indexOf(bookInformInner) === -1) {
      bookInform.classList.add("d-none");
    }
  });
}

export default bookInformPage;
