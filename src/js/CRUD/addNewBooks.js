async function sendNewBook(bookData) {
  let response = await fetch(`http://localhost:1717/books/create`, {
    method: "POST",
    headers: {
      "X-Auth": `token_bhje73bkj38jlds9`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(bookData),
  });
  let result = await response.json();
  console.log(result);
}


function getBookData() {
  const creatBookInputs = document.querySelectorAll(".book__data");
  let bookData = {};
  creatBookInputs.forEach((element) => {
    bookData[element.name] =
      element.type === "number"
        ? +element.value
        : element.name === "genres"
        ? element.value.split(" ")
        : element.value;
  });
  return bookData;
}


function addNewBooks() {
  const creatBookForm = document.querySelector(".creatBook__form");
  creatBookForm.addEventListener("submit", () => {
    const bookdata = getBookData();
    sendNewBook(bookdata)
  });
}

export default addNewBooks;
