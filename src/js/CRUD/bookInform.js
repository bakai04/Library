function renderMoreInform(bookInform) {
  const moreInformBtns = document.querySelector(".bookInfor__btns");
 
  const favoriteInput = document.querySelector(".bookInfor__fav");
  const cartBtn = document.querySelector(".bookInfor__cart");
  const favoriteLabel = document.querySelector(".bookInfor__fav-label");

  favoriteLabel.for = "fav-" + bookInform.id;
  favoriteInput.id = "fav-" + bookInform.id;
  cartBtn.id = "cart-" + bookInform.id;
  favoriteInput.checked = bookInform.isFavorite;
  // moreInformBtns.innerHTML = `
  // <button class="open-editPage-btn">Редактировать</button>
  // <input class="bookInfor__fav d-none" id="b-fav-${
  //   bookInform.id
  // }" type="checkbox" ${bookInform.isFavorite && "checked"}></input>             
  // <label class="bookInfor__fav-label" for="b-fav-${bookInform.id}"></label>
  // <img class="cart bookInfor__cart" id="cart-${
  //   bookInform.id
  // }" src="./assets/img/cart.svg">`;

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
