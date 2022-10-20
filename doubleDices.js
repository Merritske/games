//5 teerlingen
//als er dubbels inzitten, eruit halen en de ogen optellen
//na 3 keer gooien alles optellen
//als 5 dezelfde 100punten
let displDices = document.querySelector(".dices")
let btn = document.querySelector('#throwDice')
let reloadBtn = document.querySelector('#reload')
let displScore = document.querySelector('#score')
let highscore = document.querySelector('#highscore')
let beurt = document.querySelector('#beurten')
let dices = []
let aantalDices = 5
let throws = 3
btn.addEventListener('click',
  shakeDices)
// let showtest = document.querySelector('.test')
highscore.innerHTML = "highscore: "+ localStorage.getItem("score")
let c;
let one, two, three, four, five, six;
let drie;

function showDices() {
  dices.map(x => {
    console.log(x)
    switch (x) {
      case 1:
        c = document.createElement('div')
        one = document.createElement('div')
        c.classList.add('dice')
        one.classList.add('dice1')
        c.appendChild(one)
        displDices.appendChild(c)
        break;
      case 2:
        c = document.createElement('div')
        one = document.createElement('div')
        two = document.createElement('div')
        c.classList.add('dice')
        one.classList.add('dice1')
        two.classList.add('dice1')
        c.appendChild(one)
        c.appendChild(two)
        displDices.append(c)


        break;
      case 3:
        c = document.createElement('div')
        one = document.createElement('div')
        two = document.createElement('div')
        three = document.createElement('div')
        drie = document.createElement('div')
        c.classList.add('dice')
        one.classList.add('dice1')
        two.classList.add('dice1')
        three.classList.add('dice1')
        drie.classList.add('dice3')
        drie.appendChild(one)
        drie.appendChild(two)
        drie.appendChild(three)
        c.appendChild(drie)
        displDices.append(c)
        break;
      case 4:
        c = document.createElement('div')
        one = document.createElement('div')
        two = document.createElement('div')
        three = document.createElement('div')
        four = document.createElement('div')
        c.classList.add('dice')
        one.classList.add('dice1')
        two.classList.add('dice1')
        three.classList.add('dice1')
        four.classList.add('dice1')
        c.appendChild(one)
        c.appendChild(two)
        c.appendChild(three)
        c.appendChild(four)
        displDices.append(c)
        break;
      case 5:
        c = document.createElement('div')
        one = document.createElement('div')
        two = document.createElement('div')
        three = document.createElement('div')
        four = document.createElement('div')
        five = document.createElement('div')


        c.classList.add('dice')
        one.classList.add('dice1')
        two.classList.add('dice1')
        three.classList.add('dice1')
        four.classList.add('dice1')
        five.classList.add('dice5')

        c.appendChild(one)
        c.appendChild(two)
        c.appendChild(three)
        c.appendChild(four)
        c.appendChild(five)

        displDices.append(c)
        break;
      case 6:
        c = document.createElement('div')
        one = document.createElement('div')
        two = document.createElement('div')
        three = document.createElement('div')
        four = document.createElement('div')
        five = document.createElement('div')
        six = document.createElement('div')
        c.classList.add('dice')
        one.classList.add('dice1')
        two.classList.add('dice1')
        three.classList.add('dice1')
        four.classList.add('dice1')
        five.classList.add('dice1')
        six.classList.add('dice1')
        c.appendChild(one)
        c.appendChild(two)
        c.appendChild(three)
        c.appendChild(four)
        c.appendChild(five)
        c.appendChild(six)
        displDices.append(c)
        break;
      default:
        displDices.innerHTML = "hello"
    }

  })
}

let score = 0
let delDice = []
let difference;
let allIndex = []
let count = 0
let hoedje = document.querySelector("svg")

function shakeDices() {
  hoedje.classList.add('shake')
  displDices.classList.remove('dicesResult')
  displDices.innerHTML = ""
  setTimeout(yatzee, 3000)
  beurt.innerHTML = `resterende aantal worpen: ${throws - 1}`
}

function yatzee() {
  hoedje.classList.remove('shake')
  displDices.classList.add('dicesResult')
  //throw dices
  for (let x = 0; x < aantalDices; x++) {
    let dice = Math.ceil(Math.random() * 6)
    dices.push(dice)
  }
  //dices = [3,3,3,3,3]
  throws--
  showDices()
  //dubbels vinden
  dices.map((dice, index) => {
    for (let y = 0; y < dices.length; y++) {
      if (dice == dices[y] && index != dices.indexOf(dices[y])) {
        count++
        delDice.push(dices[y])
        if (count > 5 && dice == dices[y]) {
          for (let s = 0; s < count / 2; s++) {
            delDice.shift(dices[y])
          }
        }
      }
    }
    //verschil tussen dices en delDices om te weten aantalDices
    difference = dices.filter(x => !delDice.includes(x))
    console.log(difference)
  })

  aantalDices -= delDice.length
  //score
  delDice.map(x => score += x)
  count == 8 ? displScore.innerHTML = `het spel is ten einde, jouw score: ${score}` : displScore.innerHTML = "score: " + score
  //als meer dan 2 
  for (let c = 0; c < delDice.length; c++) {
    delDice.map((elem, index) => {
      if (delDice[c] != elem && c == index) {
        delDice.splice(c, 0)
      }
    })
  }
  if (throws == 0 || aantalDices <= 1 || count == 8 || count == 12 || count == 20) {
    if (count == 20) {
      displScore.innerHTML = `Congratulations you have thrown 
5 dices with the same number!!!<br> How lucky can you be 😎`
      btn.style.display = "none"
    } else {
      eindeGame(difference)
    }
  }
  //differ.innerHTML += delDice + "<br>"
  delDice = []
  dices = difference
  dices = []
}

function eindeGame(difference) {
  console.log("einde spel")
  difference.map(x => score += x)
  displScore.innerHTML = `het spel is ten einde, jouw score:${score}`
  //displDices.innerHTML = difference
  //showDices()
  beurt.innerHTML = `resterende aantal worpen: 0`
  btn.style.display = "none"
 
  if(score > localStorage.getItem("score")){
      highscore.innerHTML = `highscore: ${score}`
       localStorage.setItem("score", `${score}`)
  }

}
//nog andere versie maken: zoals echte yatzee
//zelfde als geselecteerde eruit nemen
