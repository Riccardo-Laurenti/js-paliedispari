/* 
  Palidroma
- Chiedere all’utente di inserire una word
- Creare una funzione per capire se la word inserita è palindroma

Pari e Dispari
-l’ utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per i computer (usando una funzione).
-Sommiamo i due numeri
-Stabiiamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.

Consigli de giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla vota, se funziona allora andiamo avanti.

*/

// ESERCIZIO Palindoma -->

// Chiedo parola all'utente con prompt
 const word = prompt("Inserisci una paroa").toLowerCase().trim();
 
 
 const invertWord = invertolettera(word);
 console.log(invertWord);

// funzione per invertire la word
 function invertolettera (word) {

   var reverse = word.split("").reverse().join("");

  return reverse;

 }

 //  Ciclo per capire se  la parola è palindroma, oppure NO!! 
 if (word == invertWord) {
   console.log("Questa è una parola palindroma !!");
 } 
   else if (word != invertWord) {
    console.log("non è assolutamente palindroma");
 }



