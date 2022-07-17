import renderBooks from "./renderBooks.js";

function getToken(){
    return JSON.parse(localStorage.getItem("userdata")).token;
}

async function getBooks() {
    const token = getToken();

    let response = await fetch("http://localhost:1717/books", {
        method: "GET",
        headers: { "X-Auth": `token_bhje73bkj38jlds9`},
      });
      let result = await response.json();
      renderBooks(result);
}

export default getBooks;