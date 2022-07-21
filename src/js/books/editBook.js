import { updateBook } from "./crud.js";
import { getBookData } from "./creatNewBook";

export function toggleEditPage() {
  const toggleBtn = document.querySelector(".open-editPage-btn");
  const editPage = document.querySelector(".editBook");
  const editPageForm = document.querySelector(".editBook__inner");
  const closeBtn = document.querySelector(".editBook__close");

  toggleBtn.onclick = () => {
    editPage.classList.toggle("d-none");
  };
  editPage.addEventListener("click", (e)=>{
    if(e.path.indexOf(editPageForm)===-1){
      editPage.classList.toggle("d-none");
    }
  })
  closeBtn.addEventListener("click", ()=>{
    editPage.classList.toggle("d-none");
  })
}


function putPreviousData(bookInform){
  const editPageInputs = document.querySelectorAll(".edit-book__data");
  editPageInputs.forEach(element=>{
    element.value = bookInform[element.name];
  })
}


function editBook(bookInform) {
  const editBookForm = document.querySelector(".editBook__form");
  const editPage = document.querySelector(".editBook");
  putPreviousData(bookInform);
  
  editBookForm.addEventListener("submit", ()=>{
    const newBookData = getBookData(".edit-book__data");
    updateBook(bookInform.id, newBookData);
    editPage.classList.toggle("d-none");
  })
}

export default editBook;
