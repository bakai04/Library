function renderMoreInform(bookInform) {
  const favoriteInput = document.querySelector(".bookInfor__fav");
  const cartBtn = document.querySelector(".bookInfor__cart");
  const favoriteLabel = document.querySelector(".bookInfor__fav-label");

  favoriteInput.id = "fav-" + bookInform.id;
  favoriteLabel.for = "fav-" + bookInform.id;
  console.log(favoriteLabel.for)
  cartBtn.id = "cart-" + bookInform.id;
  favoriteInput.checked = bookInform.isFavorite;

  for (var key in bookInform) {
    if (key !== "id" && key !== "isFavorite")
      document.querySelector(`.${key}`).textContent = bookInform[key];
  }
  
}

async function getMoreInform(bookId) {
  let response = await fetch(`http://localhost:1717/books/${bookId}`, {
    method: "GET",
    headers: { "X-Auth": `token_bhje73bkj38jlds9` },
  });
  let result = await response.json();
  renderMoreInform(result);
}

function bookInform() {
  const books = document.querySelectorAll(".book");
  const bookInform = document.querySelector(".bookInfor");
  const bookInformInner = document.querySelector(".bookInfor__inner");

  books.forEach((element) => {
    element.addEventListener("click", () => {
      getMoreInform(element.id);
      bookInform.classList.remove("d-none");
    });
  });

  bookInform?.addEventListener("click", (e) => {
    if (e.path.indexOf(bookInformInner) === -1) {
      bookInform.classList.add("d-none");
    }
  });
}

export default bookInform;
