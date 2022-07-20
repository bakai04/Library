import onClickFavorites from "./addFavorites.js";
import bookInformPage from "./bookInform.js";
import { getBooks } from "./crud.js";
import onClickCart from "./deleteBook.js";

async function renderBooks() {
  const library = document.querySelector(".library__books");
  library.innerHTML = ``;
  const books = await getBooks();
  books.forEach((element) => {
    library.innerHTML += `
    <div class="book" data-id=${element.id}>
      <div class="col-es-8">
        <div class="book__name">${element.name}</div>
        <div class="book__author">${element.author}</div>
      </div>
      <div class="book__btns">
        <div>
          <input type="checkbox" class="favorite d-none" ${
            element.isFavorite ? "checked" : ""
          } id="${element.id}"></input>
          <label for="${element.id}" class="favorite-label">
          </label> 
        </div>
        <img class="cart" data-id="${
          element.id
        }" src="./assets/img/cart.svg"></img>
      </div>
    </div>
    `;
  });
  onClickCart();
  onClickFavorites();
  bookInformPage();
}

export default renderBooks;
