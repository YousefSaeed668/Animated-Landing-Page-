let btnMobile = document.getElementById("btnMobile");
let navBar = document.getElementById("navbar");
let viewMobile = document.getElementById("viewMobile");
btnMobile.addEventListener("click", () => {
  navBar.classList.toggle("active");
  viewMobile.classList.toggle("active");
});

viewMobile.addEventListener("click", () => {
  navBar.classList.remove("active");
  viewMobile.classList.remove("active");
});

window.onload = () => {
  document.querySelector(".loading").classList.add("hide");
};

window.addEventListener("scroll",scrollHeader)

let header = document.getElementById("header");

function scrollHeader(){
  if(window.scrollY > 150){
    header.classList.add("fixed-header")
  } else {
    
    header.classList.remove("fixed-header")
  }
}


let links = document.querySelectorAll("a[href^='#']");

links.forEach((link)=>{
  link.addEventListener("click",function(e){
    e.preventDefault();
    let arrt = document.querySelector(this.getAttribute("href"))
    arrt.scrollIntoView({
      block:"center"
    })
  }) 
})

