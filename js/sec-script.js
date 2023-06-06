/*
Pari e Dispari:

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

*/





// Variabile pari e dispari
var numMin = 1;
var numMax = 5;


// Faccio scegliere all'utente pari o dispari
var evenOdd = (prompt("scegli tra pari e dispari")).toLowerCase().trim();

while ( (evenOdd != "pari") && (evenOdd != "dispari") ) {
  alert("Attenzione! Scrivere bene pari o dispari");
  evenOdd = (prompt("scegli tra pari e dispari"));
}

var numbUser = parseInt(prompt("scegli un numero da 1 a 5"));
while ((numbUser < numMin) || (numbUser > numMax)) {
  numbUser = parseInt(prompt("scegli un numero da 1 a 5"));
}

console.log(numbUser);

// Genero un numero random da 1 a 5 al computer
var numbPc = getRandomIntInclusive(1,5);
console.log(numbPc);


function getRandomIntInclusive(numMin, numMax) {
  var numRand = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  return numRand;
}

// Function per pari e dispari
function checkevenOdd(numero) {
  if (numero % 2 == 0) {
    return "pari";
  }
    return "dispari";
}

// Risultato somma numero user --e-- numb pc con vincitore
var somma = numbUser + numbPc;
console.log("Risultato somma",somma);

var risultato = checkevenOdd(somma);


if (evenOdd === risultato) {
  console.log("Vince il giocatore");
} else {
  console.log("Vince il PC");
}