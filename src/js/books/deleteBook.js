import {deleteBook} from "./crud.js";
function onClickCart() {
  const bookCart = document.querySelectorAll(".cart");
  
  bookCart.forEach((element) => {
    element.addEventListener("click", () => {
      deleteBook(element.dataset.id);
    });
  });
}

export default onClickCart;
