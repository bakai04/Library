import {updateBook} from "./crud.js";
function onClickFavorites() {
  const favoriteBtn = document.querySelectorAll(".favorite");

  favoriteBtn.forEach((element) => {
    const bookId = element.id.slice(4, element.id.length);
    element.addEventListener("click", () => {
      const favorite = {
        isFavorite: element.checked,
      };
      updateBook(bookId, favorite);
    });
  });
}

export default onClickFavorites;