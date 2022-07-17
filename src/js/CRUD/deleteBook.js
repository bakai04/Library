async function deleteBook(id) {
  let response = await fetch(`http://localhost:1717/books/delete/${id}`, {
    method: "DELETE",
    headers: { "X-Auth": `token_bhje73bkj38jlds9` },
  });
  let result = await response.json();
  renderBooks(result);
}

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
