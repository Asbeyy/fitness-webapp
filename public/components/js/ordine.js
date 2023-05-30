import {piani} from './template-piani.js'

const pay = document.getElementById("pay")
const logoButton = document.getElementById("main-logo")


/**
 * Retrieve pacchetto salvato nella sessione 
 */

const savedVariable = sessionStorage.getItem('pacchetto');

function checkPacchetto(){
    if (savedVariable === "0"){
        document.getElementById("card").innerHTML = piani.zero
    }
    if (savedVariable === "1"){
        document.getElementById("card").innerHTML = piani.uno
    }
    if (savedVariable === "2"){
        document.getElementById("card").innerHTML = piani.due
    }
    if (savedVariable === "3"){
        document.getElementById("card").innerHTML = piani.tre
    }
    if (savedVariable === "4"){
        document.getElementById("card").innerHTML = piani.quattro
    }


    const cancella = document.getElementById("cancella")
    cancella.addEventListener(`click`, () => {
       location.href = "./piani.html"
    })
}
checkPacchetto()


/**
 * Bottoni
 */
logoButton.addEventListener("click", () => {
    location.href = "../index.html"
})