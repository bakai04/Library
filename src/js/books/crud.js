import renderBooks from "./renderBooks.js";

const token = JSON.parse(localStorage.getItem("userdata"))?.token || "";

export async function deleteBook(id) {
  let response = await fetch(`http://localhost:1717/books/delete/${id}`, {
    method: "DELETE",
    headers: { "X-Auth": `${token}` },
  });
  let result = await response.json();
  renderBooks();
}

export async function creatBook(bookData) {
  let response = await fetch(`http://localhost:1717/books/create`, {
    method: "POST",
    headers: {
      "X-Auth": `${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(bookData),
  });
  let result = await response.json();
  renderBooks();
}

export async function updateBook(id, bookData) {
  let response = await fetch(`http://localhost:1717/books/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(bookData),
    headers: {
      "X-Auth": `${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  console.log(result)
  let result = await response.json();
}


export async function getBooks() {
  let response = await fetch("http://localhost:1717/books", {
    method: "GET",
    headers: { "X-Auth": `${token}` },
  });
  let result = await response.json();
  return result;
}

export async function getMoreInform(bookId) {
  let response = await fetch(`http://localhost:1717/books/${bookId}`, {
    method: "GET",
    headers: { "X-Auth": `${token}` },
  });
  let result = await response.json();
  return result;
}
