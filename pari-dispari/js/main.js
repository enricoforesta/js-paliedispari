"use strict"


//Variabile Pari o Dispari
let sceltaInput = prompt("scegli se pari o dispari");

while (sceltaInput !== "pari" && sceltaInput !== "dispari") {
    alert("Inserire un valore corretto");
    sceltaInput = prompt("scegli se pari o dispari");
}

console.log(sceltaInput);
// Variabile
let numeroInput = parseInt(prompt("inserisci un numero da 1 a 5"))

while( numeroInput < 1 || numeroInput > 5){
    alert("Inserire un valore corretto");
    numeroInput = parseInt(prompt("inserisci un numero da 1 a 5"));
}
console.log(numeroInput);


