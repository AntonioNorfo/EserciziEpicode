/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "1289", // anno cambiato per testare la funzione sotto
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "1356", // anno cambiato per testare la funzione sotto
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum;
sum = 10 + 20;
console.log(`il risultato della somma e' ${sum}`); // metodo template literals per comodita' con uso di ``

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random;
random = Math.floor(Math.random() * 21); // 21 perche' devo considerare anche lo 0.
console.log(`il numero random e' ${random}`);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Antonio",
  surName: "Norfo",
  age: 31,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
let skills = ["html", "css", "js"];
me.skills = skills;
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("React");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let randomNum;
  randomNum = Math.floor(Math.random() * 6) + 1; // +1 per farlo partire da 1 non considerando lo 0
  return randomNum;
  console.log(`il numero random e' ${randomNum}`);
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a, b) {
  // controllo se il valore di ingresso e' un numero
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    console.log("Errore: I parametri devono essere numeri validi.");
    return;
  }
  if (a > b) {
    console.log(`il valore di a e' maggiore ed equivale a ${a} `);
  } else {
    console.log(`il valore di b e' maggiore ed equivale a ${b} `);
  }
}
whoIsBigger(25, 10);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(IWantAstring) {
  // controllo se il valore di ingresso e' una stringa
  if (typeof IWantAstring !== "string") {
    return [];
  }
  return IWantAstring.split(" ");
}
// dichiaro una variabile dove andare ad assegnare la funziona split per poi poterla visualizzare in console.
let result = splitMe("Ciao, esercitiamoci un po con JavaScript che male non fa");
console.log(result);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, removeFirst) {
  if (removeFirst === true) {
    // Rimuove il primo carattere
    return str.slice(1);
  } else {
    // Rimuove l'ultimo carattere
    return str.slice(0, -1);
  }
}
let result1 = deleteOne("Ciao esempio vero", true);
console.log(result1);

let result2 = deleteOne("Ciao esempio falso", false);
console.log(result2);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(string) {
  return string.replace(/\d+/g, ""); //sostituisce tutti i numeri con una stringa vuota, eliminandoli.
}
let stringWithNumbers = "Ciao il 5 Novembre del 1920 si vola a NewYork";
let result3 = onlyLetters(stringWithNumbers);
console.log(result3);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
let email1 = "Antonio@Epicode.com";
console.log(isThisAnEmail(email1)); // Output: true

let email2 = "Anto_Epicode.com";
console.log(isThisAnEmail(email2));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  // prendiamo la data corrente
  let currentDate = new Date();

  // ad ogni giorno della settimana assegniamo un numero
  let currentDay = currentDate.getDay();

  // diamo ad ogni numero il giorno della settimana
  let daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  // andiamo a ritornare il giorno corrente con all interno dell array , quindi lo andiamo a prendere in base al giorno.
  return daysOfWeek[currentDay];
}
// stampo a video il giorno della setitmana richiamando la funzione .
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Il parametro deve essere un numero intero.");
  }
  let sum = 0;
  let values = [];

  for (let i = 0; i < number; i++) {
    let result4 = dice();
    sum += result4;
    values.push(result4);
  }
  return {
    sum: sum,
    values: values,
  };
}

let result4 = rollTheDices(2);
console.log(result4);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {
  // ore x minuti x secondi x millisecondi , calcoliamoi millisecondi in un giorno
  const oneDay = 24 * 60 * 60 * 1000;

  // calcoliamo la differenza tra la data corrente dichiarata sopra - il valore che do il all interno della funzione divisoi millisecondi in un giorno
  let differenzInDays = Math.floor((new Date() - date) / oneDay);
  // ritorniamo il valore della differenza
  return differenzInDays;
}
try {
  let dateEx1 = new Date("2022-01-01"); // Data fornita come parametro
  let daysElapsed1 = howManyDays(dateEx1);
  console.log(`Giorni trascorsi da ${dateEx1.toDateString()}: ${daysElapsed1}`);

  let dateEx2 = new Date("2024-06-01"); // Data fornita come parametro
  let daysElapsed2 = howManyDays(dateEx2);
  console.log(`Giorni trascorsi da ${dateEx2.toDateString()}: ${daysElapsed2}`);

  // Data corrente
  let currentDate = new Date("2024-06-28");

  console.log(`Giorni trascorsi da ${currentDate.toDateString()}: 0`);
} catch (error) {
  console.error(error.message);
}

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  // Data corrente
  let currentDate = new Date();

  let myBirthday = {
    month: 9,
    day: 14,
  };
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  if (currentMonth === myBirthday.month && currentDay === myBirthday.day) {
    return true;
  } else {
    return false;
  }
}
if (isTodayMyBirthday()) {
  console.log("Auguri!! Buon Compleanno!");
} else {
  console.log("Oggi non è il tuo compleanno, non fare il furbetto.");
}

// Arrays & Oggetti

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    // hasOwnProperty controlla se il primo parametro , in questo caso l oggetto ha il valore prop al suo interno.
    delete obj[prop];
  }
  return obj;
}
let film = {
  name: "Titanic",
  year: 1980,
  ship: "OldButGood",
};
console.log("Oggetto originale:", film);

let modifiedFilm = deleteProp(film, "year");

console.log("Oggetto modificato:", modifiedFilm);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  if (movies.length === 0) {
    return null;
  }

  let mostRecent = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (movies[i].Year > mostRecent.Year) {
      mostRecent = movies[i];
    }
  }
  return mostRecent;
}
let recentMovie = newestMovie(movies);
console.log("Il film più recente è:", recentMovie);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(number) {
  return movies.length;
}
console.log("Numero di film:", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  let yearsMovie = [];
  for (let i = 0; i < movies.length; i++) {
    yearsMovie.push(movies[i].Year);
  }
  return yearsMovie;
}
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  let lastMoviesLastMillenium = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year < 1999 && movies[i].Year > 1000) {
      lastMoviesLastMillenium.push(movies[i]);
    }
  }
  return lastMoviesLastMillenium;
}
console.log("Film del millennio scorso:", onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  let sumFilms = 0;
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    sumFilms += year;
  }
  return sumFilms;
}
console.log("La somma degli anni dei vari film e': ", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(stringa) {
  let movieWithString = [];
  for (let i = 0; i < movies.length; i++) {
    // Utilizzo to lowercase per rendere imparziale il confronto , se tutto e' piccolo o Uppercase andiamo a vedere se effettivamente quella stringa c e anche se non hanno maiuscole e minuscole = .
    if (movies[i].Title.toLowerCase().includes(stringa.toLowerCase())) {
      movieWithString.push(movies[i]);
    }
  }
  return movieWithString;
}
console.log("i film contententi la stringa sono : ", searchByTitle("ring"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(stringa) {
  let newSearch = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(stringa.toLowerCase())) {
      newSearch.match.push(movies[i]);
    } else {
      newSearch.unmatch.push(movies[i]);
    }
  }
  return newSearch;
}
newSearch = searchAndDivide("ring");
console.log("i film contententi la stringa sono : ", searchAndDivide("lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(array, index) {
  if (index < 0 || index >= array.length) {
    // Se l'indice è fuori dai limiti, restituisci l'array originale (senza modifiche)
    return array;
  } else {
    // Restituisci l'array con l'elemento all'indice specificato rimosso
    return array.filter((_, i) => i !== index);
  }
}
// Rimuovo l'elemento all'indice 3
let arrayModificato = removeIndex(movies, 3);

console.log("Array modificato:", arrayModificato);
// DOM

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function idHtml() {
  const container = document.getElementById("container");
  return container;
}
idHtml();
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTd() {
  let td = document.querySelectorAll("td");
  td.forEach(function (td) {});
}

selectAllTd();
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printText() {
  let td = document.querySelectorAll("td");
  td.forEach(function (td) {
    console.log(td.textContent);
  });
}
printText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function changeBg() {
  let td = document.querySelectorAll("a");
  td.forEach(function (a) {
    a.style.backgroundColor = "red";
  });
}
changeBg();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addToList() {
  let newItem = document.createElement("li");
  newItem.innerText = "aggiungo il nuovo elemento , nell html troverete solo 3 li , invece qui vedrete 4 li";
  let list = document.getElementById("myList");

  list.appendChild(newItem);
}
addToList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function clearList() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
}

clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToRig() {
  let rig = document.querySelectorAll("tr");

  // Itera attraverso ogni elemento <tr> trovato
  rig.forEach(function (rig) {
    // Aggiungi la classe CSS "test" a ciascun elemento <tr>
    rig.classList.add("test");
  });
}

// Chiamata alla funzione per aggiungere la classe CSS "test" alle righe
addClassToRig();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    // Stampa la riga corrente
    console.log(line);
  }
}
// Esempi di utilizzo della funzione halfTree
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log(" l alberello centrato");
function tree(height) {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 0; j < height - i; j++) {
      line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
}

// Esempio di utilizzo della funzione tree con altezza 3
tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
