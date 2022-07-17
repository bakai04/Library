async function addToFavorites(id, favorite) {
  let response = await fetch(`http://localhost:1717/books/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(favorite),
    headers: {
      "X-Auth": `token_bhje73bkj38jlds9`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  let result = await response.json();
}

function onClickFavorites() {
  const favoriteBtn = document.querySelectorAll(".favorite");

  favoriteBtn.forEach((element) => {
    const bookId = element.id.slice(4, element.id.length);
    element.addEventListener("click", () => {
      const favorite = {
        isFavorite: element.checked,
      };
      console.log(element.id);
      addToFavorites(bookId, favorite);
    });
  });
}

export default onClickFavorites;
