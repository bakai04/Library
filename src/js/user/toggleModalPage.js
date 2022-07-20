export function toggleAuthPage(){
    const toggleModalPage = document.querySelector(".header__btn");
    const modalPage = document.querySelector(".authorization");
    const modalPageForm = document.querySelector(".authorization__inner");

    toggleModalPage?.addEventListener("click",()=>{
      modalPage.classList.toggle("d-none");
    })
    modalPage?.addEventListener("click", (e)=>{
      if(e.path.indexOf(modalPageForm)===-1){
        modalPage.classList.toggle("d-none");
      }
    })
  }