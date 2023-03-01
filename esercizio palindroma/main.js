'use strict';

// creazione della funzione per controllare se la stringa è palindroma o no

function trovaPalindroma(stringa) {

    // trovare la lunghezza di stringa
    const lunghezza = stringa.length;

    // passare attraverso la stringa con un ciclo for
    for (let i = 0; i < lunghezza / 2; i++) {

        // controllare se la prima stringa e l'ultima stringa sono uguali
        if (stringa[i] !== stringa[lunghezza - 1 - i]) {
            return 'non è una parola palindroma';
        }
    }
    return 'è una parola palindroma';
}

// chiedere l'input all'utente attraverso un prompt
const stringa = prompt('inserisci una parola');

// evocare la funzione creata
const valore = trovaPalindroma(stringa);

console.log(valore);





