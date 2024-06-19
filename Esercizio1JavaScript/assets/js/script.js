/*  
1) Number: Rappresenta sia i numeri interi che quelli con la virgola. Esempio di numero intero = 42 Esempio di numero con la , 3.14.

2) String: e' sequenza di caratteri , possono essere racchiusi  in vari modi , sia tra "" che tra '' che tra `` (questi ultimi li vedremo molto piu avanti e si chiamano backtick )

3) Boolean: un valore boolean puo essere solo o true o false , quindi quando serve una condizione che debba dare uno di questi due valori.

4) Undefined: Un valore che indica che una variabile è stata dichiarata ma non inizializzata. Esempio: let a; // a è undefined. Quest ultima variabile potra contenere anche un valore in futuro.

5) Null: Andiamo a dichiarare di prepotenza una variabile che non contiene un valore e quest ultima e' considerato vuota*/

// dichiaro una variabiale e assegno a quest ultima tramite le virgolette una stringa con il mio nome.
let myName = " Antonio ";
console.log(" il mio nome e " + myName);

//dichiaro due variabili di tipo numero e li addizziono stampando il risultato in una nuova costante che prendera quest ultimo valore
let n1 = 12;
let n2 = 20;
const resultSomma = n1 + n2;
console.log("il risultato e' " + resultSomma);
// creo una variabile x e assegno il numero 12.
let x = 12;
console.log(x);
// utilizzando la variabile myName vado a dare un nuovo valore , stesso principio per il cognome , solo che utilizzando la costante ovviament emi dar' errore facendo la stessa procedura che ora faro' per il myName , perche non si puo cambiar eil valore di una costante.
myName = "Pallina";
console.log(" il mio nome e " + myName);
const cognome = "Norfo";
console.log("il mio cognome e'" + cognome);
/*cognome = "geppetto";
console.log("il mio cognome e'" + cognome); */
// Vado a riutilizzare la variabile x usata in precedenza e devo sottrargli 4 , quindi basta dichiarare un altra variabile (es y e dargli ilv alore 4 con cui andremo poi a sottrarre)
let y = 4;
let resultSottrazione = x - y;
console.log("il risultato della sottrazione e' :" + resultSottrazione);
// Creo due variabili contenenti delle stringhe john e John

let name1 = "john";
let name2 = "John";
let uguaglianza = name1 === name2 ? "e uguale" : "e diverso";
console.log(uguaglianza);
// uso to lowercase come sintassi per trasformare tutto cio che e' in grassetto in minuscolo e poi nel contempo sto gia ponendo la medesima condizione che posi nel confronto precedente.
let name3 = "john";
let name4 = "John";

// Converti name1 e name2 in lowercase e confrontali
let uguaglianza1 = name3.toLowerCase() === name4.toLowerCase() ? "è uguale" : "non è uguale";

console.log(uguaglianza1);
