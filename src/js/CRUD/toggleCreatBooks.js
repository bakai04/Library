function toggleCreatBooks() {
    const toggleBookBtn = document.querySelector(".creat-books-btn")
    const creatBookPage = document.querySelector(".creatBook");
    const creatBookForm = document.querySelector(".creatBook__inner");

    toggleBookBtn.addEventListener("click",()=>{
        creatBookPage.classList.toggle("d-none");
    })
    creatBookPage?.addEventListener("click", (e)=>{
      if(e.path.indexOf(creatBookForm)===-1){
        creatBookPage.classList.toggle("d-none");
      }
    })
}

export default toggleCreatBooks;