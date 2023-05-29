const logoButton = document.getElementById("main-logo")
const moreButton = document.getElementById("more")
const iniziaOra = document.querySelectorAll(".button-acq")

const moreButtons = document.querySelectorAll('.more')



logoButton.addEventListener("click", () => {
    location.href = "index.html"
})


iniziaOra.forEach((bottone,x) => {
    bottone.addEventListener("click", () => {
        console.log(x)
    })
})


/**
 * More Infos Cards
 */

let moreState = false
for (let i = 0; i < moreButtons.length; i++){
    moreButtons[i].addEventListener("click", () => {

        console.log(i)
        let UL
        if (moreState === false){
            UL = document.createElement('ul')
            UL.innerHTML = 
            `
            <li>Programma di allenamento</li>
            <li>Consigli nutrizionali / alimentari</li>
            <li>Consigli su integrazione</li>
            <li>Supporto 7 giorni su 7</li>
            <li>Check con foto ogni 7/15 giorni</li>
            `
            UL.id = `lista-perks${i}`
            document.getElementById(`infoss${i}`).appendChild(UL)
            moreState = true
        } else if (moreState === true){
            document.getElementById(`infoss${i}`).removeChild(document.getElementById(`lista-perks${i}`))
            moreState = false
            document.getElementById('dipiu').innerHTML = "Di Piu"
        }
    })
}

// moreButton.addEventListener("click", () => {
    
//     let UL
//    if (moreState === false){
//     UL = document.createElement('ul')
//     UL.innerHTML = 
//     `
//     <li>Programma di allenamento</li>
//     <li>Consigli nutrizionali / alimentari</li>
//     <li>Consigli su integrazione</li>
//     <li>Supporto 7 giorni su 7</li>
//     <li>Check con foto ogni 7/15 giorni</li>
//     `
//     UL.id = "lista-perks"
//     document.getElementById('dipiu').innerHTML = "Di Meno"

//     document.getElementById("infoss").appendChild(UL)
//     moreState= true
// } else if (moreState === true){
//     document.getElementById("infoss").removeChild(document.getElementById("lista-perks"))
//     moreState = false
//     document.getElementById('dipiu').innerHTML = "Di Piu"
// }


// })