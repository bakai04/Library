import {deleteBook} from "./crud.js";
function onClickCart() {
  const bookCart = document.querySelectorAll(".cart");
  
  bookCart.forEach((element) => {
    element.addEventListener("click", () => {
      const bookId = element.id.slice(5, element.id.length);
      deleteBook(bookId);
    });
  });
}

export default onClickCart;
