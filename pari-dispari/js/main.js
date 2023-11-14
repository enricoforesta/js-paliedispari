"use strict"
// Funzione numero Random
function numeroRandomFunc(num1 = 0, num2 = 0) {
    const numeroCpu = Math.floor((Math.random() * num2) + num1);
    return numeroCpu;
}

// Funzione per stabilire se un numero è pari o dispari
function pariDispariFunc(num1 = 0) {
    if (num1 % 2 === 0) {
        let pari = true;
        console.log("Il numero è pari")
        return pari;
    } else {
        let pari = false
        console.log("Il numero è dispari")
        return pari;
    }
}
/* ------------------------------------------------------- */

//Variabile Pari o Dispari
let sceltaInput = prompt("scegli se pari o dispari");

while (sceltaInput !== "pari" && sceltaInput !== "dispari") {
    alert("Inserire un valore corretto");
    sceltaInput = prompt("scegli se pari o dispari");
}
console.log({ sceltaInput });

// Variabile numeri 
let numeroInput = parseInt(prompt("inserisci un numero da 1 a 5"))

while (numeroInput < 1 || numeroInput > 5 || isNaN(numeroInput) ){
    alert("Inserire un valore corretto");
    numeroInput = parseInt(prompt("inserisci un numero da 1 a 5"));
}
console.log({ numeroInput });

// Richiamo la funzione per generare il numero random per la Computer
const numeroRandom = numeroRandomFunc(1, 5);
console.log({ numeroRandom });

// Faccio la somma dei numeri 
const numeroSomma = numeroInput + numeroRandom;
console.log({ numeroSomma });


// Richiamo la funzione per stabilire se il numero è pari o dispari

const pariDispari = pariDispariFunc(numeroSomma);
// Dichiaro il vincitore
if (sceltaInput === "pari" && pariDispari === true) {
    console.log("L'utente ha vinto");
} else if (sceltaInput === "dispari" && pariDispari === false) {
    console.log("L'utente ha vinto");
} else {
    console.log("La CPU ha vinto");
}
