var myP=document.querySelector("#section1 button")
var myPizza=document.querySelector("#section1 .pizza")
var myPizImg=document.querySelectorAll("#section1 .pizza img")

myP.addEventListener("click", function(){
  myP.classList.toggle("myp-active")
  myPizza.classList.toggle("scale-active")
for (let i = 0; i < myPizImg.length; i++) {

  myPizImg[i].classList.toggle("img-active")
}


})

// myP.addEventListener("mouseleave", function(){
//   myPizza.classList.remove("scale-active")
// })



// var depi = ["E","l","t","o","n"]

// cemi=0
//   for (let i = 0; i < depi.length; i++) {  
//     cemi+=depi[i].charCodeAt()
//     console.log(cemi);
//   }



// var e = "E".charCodeAt()
// var l = "l".charCodeAt()
// var t = "t".charCodeAt()
// var o = "o".charCodeAt()
// var n = "n".charCodeAt()
// console.log(e + l + t + o + n)