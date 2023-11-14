"use strict"


// Funzioni 
function parolaInvertita(parolaInput) {
    // Array della parola inserita
    const arrayInput = [];
    for (let i = 0; i < parolaInput.length; i++) {
        arrayInput.push(parolaInput[i])
    }
    console.log({ arrayInput });

    // Array invertito della parola inserita
    const arrayInputInvertito = [];
    for (let i = parolaInput.length - 1; i >= 0; i--) {
        arrayInputInvertito.push(parolaInput[i])
    }
    console.log({ arrayInputInvertito })

    //Stampo se la parola è Palindroma o no
    let palindroma = false

    for (let i = 0; i < parolaInput.length; i++) {
        if (arrayInput[i] === arrayInputInvertito[i]) {
             palindroma = true
        } 
    }
    if (palindroma === true) {
        console.log("La parola è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }
}



// Operazioni

const parolaInput = prompt("inserisci una parola");

parolaInvertita(parolaInput);
