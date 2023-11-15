"use strict"

function palindroma(text) {
    if (text === "") {return false;}
    if (text.length === 1) {return true;}
    
    let x = 0;
    let y = text.length - 1;
    
    while (x < y) {
        if (text[x] !== text[y]) {return false;}
        x++;
        y--;
    }
    return true;
}

// Operazioni

const parolaInput = prompt("inserisci una parola");

if (palindroma(parolaInput)) {
    console.log(`La parola è palindroma`)
} else {
    console.log(`La parola non è palindroma`)

}
