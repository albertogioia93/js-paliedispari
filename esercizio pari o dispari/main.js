'use strict';

// creare una funzione che verifica se il numero è pari o dispari
// se è pari RETURNE TRUE
// altrimenti RETURNE FALSE

function pariDispari(num){
    if(num % 2 === 0){
        return true;
    } else {
        return 'dispari'
    }
    // oppure senza }ELSE, sotto la graffa di IF, scrivo direttamente RETURN FALSE o RETURN 'DISPARI'
}

// const numeroUtente = Number(prompt('inserisci un numero')); 
// anche se scrivo una parola mi da comunque pari/pariDispari. chiedere a Gaetano
// console.log(pariDispari(numeroUtente));


// PER GENERARE UN NUMERO RANDOM USANDO UNA FUNZIONE

// function nRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
// console.log(nRandom(1,6));

const numeroUtente = Number(prompt('scegli un numero da 1 a 5'));

if(numeroUtente > 5){
    Number(prompt('scegli un numero da 1 a 5'));
} else {
    console.log(numeroUtente);
}
// console.log(numeroUtente);