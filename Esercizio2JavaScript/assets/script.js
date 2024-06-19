// Dichiaro 2 variabile e le metto in una condizione di maggiore , se uno dei due numeri e' maggiore quello verra' visualizzato come maggiore , senno sara il secondo a essere visualizzato.

let number1 = 87;
let number2 = 9;

if (number1 > number2) {
  console.log("il numero 1 e' maggiore " + number1);
} else {
  console.log("il numero 2 e' maggiore" + number2);
}

//  Ho dichiaro una variabile con un numero x che do io , vado a fare il controllo con l operatore !== per andare a controllare se sia il tipo che il contenuto sia uguale e dopo di che se differisce quanto meno il valore vado a stampare in console not equal.

let number3 = 7; // Puoi cambiare questo numero per testare il codice

if (number3 !== 5) {
  console.log("not equal");
}

// dicihiaro un numero e poi pongo all interno dell if una condizione e se questa condizione mi da 0 vuol dire che la mia condizione e' stata rispettata , uso % perche con questo operatore riesco a saperse se un numero e' pari dispari se e' divisibile per un certo numero o meno.

let number4 = 16;

if (number4 % 5 === 0) {
  console.log("Divisibile per 5");
} else {
  console.log("Non divisibile per 5");
}

// Vado a fare un if else per fare piu verifiche sulle stesse variabili.

let number5 = 8;
let number6 = 4;

if (number5 === 8 || number6 === 8) {
  console.log("Uno dei numeri è uguale a 8");
} else if (number5 + number6 === 8 || number5 - number6 === 8 || number6 - number5 === 8) {
  console.log("La loro somma o sottrazione è uguale a 8");
} else {
  console.log("Nessuna delle condizioni è soddisfatta");
}

// creo 3 variabili , nell ultima vado a inserire il totale . Se entrambe le condizioni sono uguali nell if , non paghi la spedizione , se invece il totale e' minore andremo a inserire un costo addizionale per la spedizione

let totalShoppingCart = 60;
let shippingCost = 10;
let totalAmountToPay;

if (totalShoppingCart > 50) {
  totalAmountToPay = totalShoppingCart;
} else {
  totalAmountToPay = totalShoppingCart + shippingCost;
}

console.log("L'ammontare totale da addebitare è: " + totalAmountToPay);

//

let totalShoppingCart1 = 60;
let shippingCost1 = 10;
let sconto = 0.2;
let totalAmountToPay1;

let scontoTotale = totalShoppingCart1 * (1 - sconto);

if (scontoTotale > 50) {
  totalAmountToPay1 = scontoTotale;
} else {
  totalAmountToPay1 = scontoTotale + shippingCost1;
}

console.log("L'ammontare totale da addebitare è: " + totalAmountToPay1);

/*  crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
 */

//Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").

let integer = "number10";
if (typeof integer === "number10") {
  console.log("e un numero");
} else {
  console.log("non e' un numero");
}
/*
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number10 = 4;

if (number10 % 2 === 0) {
  console.log("pari");
} else {
  console.log("non e' pari");
}

// l esercizio e' corretto.

let val = 7;
if (val < 5) {
  console.log("Meno di 10");
} else if (val < 10) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

//Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

//Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".

// dichiaro l oggetto me (vedi prima) , targetto  l array skills e poi con lenght prendo la lunghezza e con il -1 vado a togliere l ultimo elemento.
me.skills.lenght = me.skills.lenght - 1;

// Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.

const myArray = [];

myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;
myArray[3] = 4;
myArray[4] = 5;
myArray[5] = 6;
myArray[6] = 7;
myArray[7] = 8;
myArray[8] = 9;
myArray[9] = 10;
console.log(myArray);

// Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.

myArray[9] = 100;
console.log(myArray);
