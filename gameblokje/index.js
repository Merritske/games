let l = document.querySelector(".left")
let r = document.querySelector(".right")
let bal = document.querySelector(".bal")
let score = document.querySelector(".score")
let y = false
let a = false

let highScore =0

 let i= 0
 let time = 3
let animals = [ `<i style="transform:rotateY(180deg)" class="fas fa-hippo fa-3x"></i>`,`<i style="transform:rotateY(180deg)" class="fas fa-otter fa-2x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-cat fa-2x"></i>`,`<i style="transform:rotateY(180deg)" class="fas fa-dog fa-2x"></i>`,
`<i  style="transform:rotateY(180deg)" class="fas fa-dove"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-dragon fa-3x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-kiwi-bird"></i>`, `<i  style="transform:rotateY(180deg)" class="fas fa-spider"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-horse fa-3x"></i>`,
`<i style="transform:rotateY(180deg)" class="fas fa-crow"></i>`,  `<i  style="transform:rotateY(180deg)"  class="fas fa-frog"></i>` ]



window.addEventListener("click", () => {
    y = true
    l.style.transform = "rotatey(300deg)"
    r.style.transform = "rotateY(180deg)"

    setTimeout(()=>{
           r.style.transform = "skew(0deg,-20deg)"
        l.style.transform = "skew(0deg,-20deg)"
        y = false  
if(a == true){
     time = time - 0.1
  i ++
  a= false 
    highScore ++
}else if(a== false){
  a = false
}    
    },300)   
})
 

let balM = setInterval(function () {
 
    let posBal = bal.getBoundingClientRect();

  if(posBal.x >= 670 && posBal.x <= 880 ){
    bal.style.animationDuration = `${time}s`
 bal.innerHTML = animals[i]

  }

    if (posBal.x <= 390  && posBal.x >=360 && y == true) {
a = true

    } else if (posBal.x <= 390 && posBal.x >=360 && y == false) {
bal.style.animationPlayState ="paused"
bal.style.backgroundColor = "red"
         a=false
      score.innerHTML = `Your score : ${highScore}`

      clearInterval(balM)

   let modal = document.querySelector(".modal")
modal.style.display = "block"
let yes = document.querySelector("#yes")
yes.addEventListener("click", ()=>{
  location.reload()
}) 
let no = document.querySelector("#no")
no.addEventListener("click", ()=>{
  modal.style.display = "none"
})  
   
    } 

if(i % 11 == 0){
  i = 0
 
}

  score.innerHTML = `Your score : ${highScore} `

},2)



