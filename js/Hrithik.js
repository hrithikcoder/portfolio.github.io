var typed =new Typed(".typing",{
    strings:["","","Web Developer","","","Android Developer","","","Video Editor","","","Problem Solver",""],
    typespeed:50,
    Backspeed:0,
    loop:true
})
/*======================================Aside=================================*/
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length;
    for(let i=0;i<totalNavList;i++)
    {
        const a=navList[i].querySelector("a")
        console.log(a)
        a.addEventListener("click",function()
        {
            for(let j=0;j<totalNavList;j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);


        })
    }
    function showSection(element)
    {
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#")
       

    }
/*===========================NAvigation Humburger========================*/
console.log("Running....")
document.querySelector('.cross').getElementsByClassName.display='none';
document.querySelector('.nav-toggler').addEventListener("click",()=>{
    document.querySelector('.aside').classList.toggle

})

/*const socialSwitcherToggle=document.querySelector(".style-switcher-toggler");
socialSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");

    }
})*/
function myFunction() {
    var x = document.getElementById("myTopnav");
   
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display="none";
    }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
   
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display="none";
    }
  }
