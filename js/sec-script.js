/*
Pari e Dispari:

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

*/





// PARIDISPARI

// L’utente sceglie pari o dispari

var option = prompt("Scegli pari o dispari");

function IsNotUneven(numero) {

    if (isNaN(numero) == false) {
        return (numero %2 == 1 ?  true : false);
    }
    else {
        return null;
    }
}

// l'utente inserisce un numero da 1 a 5.

const numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("Numero scelto dall'utente " + numeroUtente);

// controlliamo se numero è pari o dispari
console.log(IsNotUneven(numeroUtente));

//  Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroPC(min, max) {
    let OutNumPC = Math.floor(Math.random() * (max - min) ) + min;
    return OutNumPC;
}

        // estraggo risultato del numero generato da pc;
const OutNumPC = numeroPC(1,6);

        // stampo numero da pc;
console.log("numero pc " + OutNumPC);

// Sommiamo i due numeri (con funzione);

        // unisco la somma utente e somma pc nella funzione;
function somma(numeroUtente, OutNumPC) {
    let risultato = numeroUtente + OutNumPC;
    return risultato;
}
        //salvo il risulato in una variabile;
var results = somma(numeroUtente, OutNumPC);
        // stampo il risultato della somma
console.log("La somma è " + results);


// //  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);

function pariDispari(results) {

    if(results % 2 == 0) {
        console.log("la somma è pari");
    } else {
        console.log("la somma è dispari");
    }
}
pariDispari(results);

//  Dichiariamo chi ha vinto;