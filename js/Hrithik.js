var typed =new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphics Designer","Youtuber"],
    typespeed:100,
    Backspeed:40,
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
            for(let j=0;j,totalNavList;j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);


        })
    }
   /* function showSection(element)
    {
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#")
       

    }*/
/*===========================NAvigation Humburger========================*/
console.log("Running....")
document.querySelector('.cross').getElementsByClassName.display='none';
document.querySelector('.nav-toggler').addEventListener("click",()=>{
    document.querySelector('.aside').classList.toggle

})