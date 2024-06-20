/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(4, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(l1, l2) {
  if (!Number.isInteger(l1) || !Number.isInteger(l2)) {
    throw new Error("Entrambi i parametri devono essere numeri interi.");
  }

  if (l1 === l2) {
    return (l1 + l2) * 3;
  } else {
    return l1 + l2;
  }
}
console.log(crazySum(6, 6));
/*
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a) {
  let diffAbsolut = Math.abs(a - 19);
  if (!Number.isInteger(a)) {
    throw new Error("Il parametro deve essere intero");
  }
  if (a > 19) {
    return diffAbsolut * 3;
  } else {
    return diffAbsolut;
  }
}
console.log(" la differenza assoluta e' " + crazyDiff(3));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if (!Number.isInteger(n)) {
    throw new Error("Il parametro deve essere intero");
  }
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(12));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(str) {
  if (typeof str !== "string") {
    throw new Error("Il parametro deve essere una stringa.");
  }
  if (str.indexOf("EPICODE") === 0) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}
console.log("stiamo scrivendo la parola " + epify("ciao"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(a) {
  if (a === "number" && a > 0) {
    throw new Error("Il parametro deve essere un numero positivo");
  }
  return a % 3 === 0 || a % 7 === 0;
}
console.log(check3and7(5));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Il parametro deve essere una stringa.");
    return;
  }
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Antonio"));

/* let inverso = str.spli("")
inverso.reverse();
inverso = inverso.join("")
 return inverso ; */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(str) {
  if (typeof str !== "string") {
    throw new Error("Il parametro deve essere una stringa.");
  }
  let words = str.split(" ");
  let final = [];
  for (let i = 0; i < words.length; i++) {
    let first = words[i].charAt(0);
    first = first.toUpperCase();
    let cut = words[i].slice(1); // taglia la prola eleminando il primo carattere
    let newWords = first + cut;
    final.push(newWords);
  }
  console.log(final.join(" "));
}
upperFirst(" oggi e' il venti giugno e basta");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
