import $ from 'jquery';

export const nav = () => {

  const closeBtn=document.querySelector("#close");
  const signTaq=document.querySelector(".sign");
  const userBtn=document.querySelector("#user");
  const navLinkBtn=document.querySelectorAll(".nav-link");

  closeBtn.addEventListener('click',()=>{
    signTaq.classList.add('hidden')
  })
  userBtn.addEventListener("click",()=>{
    signTaq.classList.remove("hidden")
  })

  navLinkBtn.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
      navLinkBtn.forEach((element)=>{
        element.classList.remove("active-nav-link")
      })
      e.target.classList.add("active-nav-link")
    })
  })







    

}