//let keuze = document.getElementById("spel")
let pc = document.getElementById("pckeuze")
let winnaar = document.getElementById("winnaar")
let eigenKeuze = document.getElementById("eigenKeuze")
let imgKeuze = document.querySelector(".keuze")
let blad, steen, schaar
blad = `<img src="https://i.pinimg.com/564x/e9/7a/c8/e97ac845390ea0edbee679dd68344441.jpg" style="width:100px; height:100px; object-fit:cover; border-radius:50%" alt="blad">`
steen = `<img src="https://www.urnwinkel.nl/media/catalog/product/cache/752bc741c08ae7bd3b39c6561da3b139/h/a/handgemaakte_crematie_as_urn_hand_made_cremation_funeral_ash_handgefertigt_urne_funeraire_fait_a_la_main_hecho_a_mano_urna_funeraria_handgjorda_301091.jpg" style="width:100px; height:100px; object-fit:cover; border-radius:50%" alt="steen">`
schaar = `<img src="https://www.buromas.be/autoimg/321455/1024x768/ffffff/20015.jpg" style="width:100px; height:100px; object-fit:cover; border-radius:50%" alt="schaar">`
let opties = [blad, steen, schaar]
let puntenU = 0;
let winU = document.getElementById("winU")
let puntenPC = 0;
let winC = document.getElementById("winC")
let punten = 0;
let aantal = document.getElementById("aantal")
let pckeuze;

const result = {
    win: function () {
        punten++
        puntenU++
        winnaar.innerHTML = `jij wint`
    },
    lose: function () {
        punten++
        puntenPC++
        winnaar.innerHTML = `jij verliest`
    },
    no: function () {
        punten++
        winnaar.innerHTML = `geen winnaar`
    }
}
let keuzeUser;
function keuzeU(e) {
    // console.log(e.getAttribute("alt"))
    // console.log(imgKeuze.children[0].getAttribute("alt"))
    for (let x = 0; x < imgKeuze.children.length; x++) {
        if (imgKeuze.children[x].getAttribute("alt") === e.getAttribute("alt")) {
            console.log(imgKeuze.children[x])
            keuzeUser = imgKeuze.children[x].getAttribute("alt")
            eigenKeuze.innerHTML = `Jouw keuze: <img src="${imgKeuze.children[x].getAttribute("src")}" style="width:100px; height:100px; object-fit:cover; border-radius:50%"> `
        }
    }

    pckeuze = Math.round(Math.random() * 2)
    pc.innerHTML = `Keuze van de computer: ${opties[pckeuze]}`;
    switch (keuzeUser) {
        case "blad":
            if (pckeuze === 0) {
                result.no()
            } else if (pckeuze === 1) {
                result.win()
            } else {
                result.lose()
            };
            break;
        case "steen":
            if (pckeuze === 0) {
                result.lose()
            } else if (pckeuze === 1) {
                result.no()
            } else {
                result.win()
            };
            break;
        case "schaar":
            if (pckeuze === 0) {
                result.win()
            } else if (pckeuze === 1) {
                result.lose()
            } else {
                result.no()
            };
    }
    winU.innerHTML = "Jouw score: " + puntenU
    winC.innerHTML = "Computer score: " + puntenPC
    aantal.innerHTML = "Totaal aantal spelletjes: " + punten
}



//ANDERE MANIER
//button maken met onclick="uitslag()"
// function uitslag(){
//  console.log(pckeuze)
//     eigenKeuze.innerHTML = `Jouw keuze: ${keuze.value}`
// //blad wint van steen
// //steen wint van schaar
// //schaar wint van blad
// //ofwel geen winnaar ofwel jij wint ofwel jij verliest


// if(keuze.value == "blad" && opties[pckeuze] == "blad"){
//     winnaar.innerHTML += `<li> Geen winnaar, je hebt nu ${puntenU} punten. </li>`
// }
// if(keuze.value == "steen" && opties[pckeuze] == "blad"){
//     winnaar.innerHTML += `<li> Jij verliest, je hebt nu ${puntenU} punten. </li>`

// }
// if(keuze.value == "schaar" && opties[pckeuze] == "blad"){
//      puntenU ++
//     winnaar.innerHTML += `<li> Jij wint, je hebt nu ${puntenU} punten.</li>`

// }
// if (keuze.value == "blad" && opties[pckeuze] == "steen") {
//      puntenU ++
//     winnaar.innerHTML += `<li>jij wint, je hebt nu ${puntenU} punten.</li>`

// }
// if (keuze.value == "steen" && opties[pckeuze] == "steen") {
//     winnaar.innerHTML += `<li>geen winnaar, je hebt nu ${puntenU} punten. </li> `
// }
// if (keuze.value == "schaar" && opties[pckeuze] == "steen") {
//     winnaar.innerHTML += `<li>jij verliest, je hebt nu ${puntenU} punten.</li>`
//     puntenPC ++
// }
// if (keuze.value == "blad" && opties[pckeuze] == "schaar") {
//     winnaar.innerHTML += `<li>jij verliest, je hebt nu ${puntenU} punten.</li>`
//     puntenPC ++
// }
// if (keuze.value == "steen" && opties[pckeuze] == "schaar") {
//      puntenU ++
//     winnaar.innerHTML += `<li>jij wint, je hebt nu ${puntenU} punten.</li>`

// }
// if (keuze.value == "schaar" && opties[pckeuze] == "schaar") {
//     winnaar.innerHTML += `<li>geen winnaar </li> `
// }
// }


//console.log(keuze.value)