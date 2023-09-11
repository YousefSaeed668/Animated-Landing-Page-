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

let sectionOne = document.getElementById("services");
let sectionTwo = document.getElementById("whyus");
let sectionThree = document.getElementById("portfolio");
let sectionfour = document.querySelector(".numbers");
let iphone = document.querySelector("#whyus .image")
let content = document.querySelector("#whyus .content")


window.onscroll = ()=>{

if (window.scrollY >= sectionOne.offsetTop - 500){
  sectionOne.classList.remove("to-top")
}

if (window.scrollY >= sectionTwo.offsetTop - 500){
  iphone.classList.remove("to-left")
  content.classList.remove("to-right")
}
if (window.scrollY >= sectionfour.offsetTop - 700){
  sectionfour.classList.remove("too-right")
}
if (window.scrollY >= sectionThree.offsetTop - 700){
  sectionThree.classList.remove("too-left")
}

}