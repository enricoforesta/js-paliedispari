"use strict"


// Funzioni 
function parolaInvertita(parolaInput) {
    // Array della parola inserita
    const arrayInput = [];

    for (let i = 0; i < parolaInput.length; i++) {
        arrayInput.push(parolaInput[i])
        return arrayInput;
    }

    console.log({ arrayInput });


    const arrayInputInvertito = [];
    for (let i = parolaInput.length - 1; i >= 0; i--) {
        arrayInputInvertito.push(parolaInput[i])
        return arrayInputInvertito;
    }
    console.log({ arrayInputInvertito })

    for (let i = 0; i < parolaInput.length; i++) {
        if (arrayInput[i] === arrayInputInvertito[i]) {
            console.log("è palindroma")
        } else {
            console.log("non è palindroma")
        }
    }
}



// Operazioni

const parolaInput = 



parolaInvertita();
