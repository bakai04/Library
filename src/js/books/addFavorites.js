import {updateBook} from "./crud.js";
function onClickFavorites() {
  const favoriteBtn = document.querySelectorAll(".favorite");

  favoriteBtn.forEach((element) => {
    element.addEventListener("click", () => {
      const favorite = {
        isFavorite: element.checked,
      };
      updateBook(element.id, favorite);
    });
  });
}

export default onClickFavorites;