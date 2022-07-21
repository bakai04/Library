import renderBooks from "./renderBooks.js";

const token = JSON.parse(localStorage.getItem("userdata"))?.token || "";
const loader = document.querySelector(".loader");

export async function deleteBook(id) {
  loader.classList.toggle("d-none");
  let response = await fetch(`http://localhost:1717/books/delete/${id}`, {
    method: "DELETE",
    headers: { "X-Auth": token },
  });
  loader.classList.toggle("d-none");
  renderBooks();
}

export async function creatBook(bookData) {
  loader.classList.toggle("d-none");
  let response = await fetch(`http://localhost:1717/books/create`, {
    method: "POST",
    headers: {
      "X-Auth": token,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(bookData),
  });
  loader.classList.toggle("d-none");
  renderBooks();
}

export async function updateBook(id, bookData) {
  let response = await fetch(`http://localhost:1717/books/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(bookData),
    headers: {
      "X-Auth": token,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

export async function getBooks() {
  loader.classList.toggle("d-none");
  let response = await fetch("http://localhost:1717/books", {
    method: "GET",
    headers: { "X-Auth": token },
  });
  let result = await response.json();
  loader.classList.toggle("d-none");
  return typeof result === "object" ? result: [];
}

export async function getMoreInform(bookId) {
  loader.classList.toggle("d-none");
  let response = await fetch(`http://localhost:1717/books/${bookId}`, {
    method: "GET",
    headers: { "X-Auth": token },
  });
  let result = await response.json();
  loader.classList.toggle("d-none");
  return result;
}

export async function autorization(user, mode) {
  loader.classList.toggle("d-none");
  let response = await fetch(`http://localhost:1717${mode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  }).then((el) => {
    return el.json();
  });
  loader.classList.toggle("d-none");
  return response;
}
