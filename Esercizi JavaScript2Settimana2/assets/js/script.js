/* ESERCIZIO 1
         Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */
const h1 = document.querySelector("h1");
const changeTitle = function (titolo) {
  h1.innerText = titolo;
};
changeTitle("Adesso ti chiami cosi");

/* ESERCIZIO 2
             Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
          */
const addClassToTitle = function () {
  const h1 = document.querySelector("h1");
  h1.classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
             Scrivi una funzione che cambi il testo dei p figli di un div
            */

const changePcontent = function () {
  const pars = document.querySelectorAll("div p");
  pars.forEach((element, index) => {
    element.innerText = `testo cambiato ${index + 1}`;
  });
};
changePcontent();

/* ESERCIZIO 4
             Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
            */

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a)");
  links.forEach((element) => {
    element.setAttribute("href", "https://www.google.com");
  });
};
changeUrls();
/* ESERCIZIO 5
             Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
          */

const addToTheSecond = function () {};
const newListItem = document.createElement("li");

newListItem.textContent = "4rd";
const secondList = document.getElementById("secondList");

secondList.appendChild(newListItem);

addToTheSecond();
/* ESERCIZIO 6
             Scrivi una funzione che aggiunga un paragrafo al primo div
          */

const addParagraph = function () {
  const firstDiv = document.querySelector("div");
  const newPar = document.createElement("p");
  newPar.innerText = "Paragrafo aggiunto";
  firstDiv.appendChild(newPar);
};

addParagraph();
/* ESERCIZIO 7
             Scrivi una funzione che faccia scomparire la prima lista non ordinata
          */

const hideFirstUl = function () {
  const firstList = document.getElementById("firstList");
  firstList.remove();
};

hideFirstUl();

/* ESERCIZIO 8
             Scrivi una funzione che renda verde il background di ogni lista non ordinata
            */

const paintItGreen = function () {
  const lists = document.querySelectorAll("ul");
  lists.forEach((element) => {
    element.classList.add("backGreen");
  });
};

paintItGreen();
/* ESERCIZIO 9
             Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
            */

const makeItClickable = function () {
  h1.addEventListener("click", function () {
    h1.innerText = h1.innerText.slice(0, -1);
  });
};
makeItClickable();
/* ESERCIZIO 10
             Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
            */

const revealFooterLink = function () {
  const myFooter = document.querySelector("footer");
  myFooter.classList.add("pointer");
  myFooter.onclick = () => {
    const myLink = document.querySelector("footer a").getAttribute("href");
    alert(myLink);
  };
};

revealFooterLink();
/* ESERCIZIO 11
             Crea una funzione che crei una tabella nell'elemento con id "tableArea".
             La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
          */

const generateTable = function () {};

/* ESERCIZIO 12
             Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
          */

const addRow = function () {};

/* ESERCIZIO 14
            Crea una funzione che nasconda le immagini della tabella quando eseguita
          */

const hideAllImages = function () {};

const images = document.querySelectorall("img");

/* EXTRA ESERCIZIO 15
            Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
          */

const changeColorWithRandom = function () {
  const change = document.getElementById("changeMyColor");
  change.addEventListener("click", function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const newColor = `rgb (${red},${green},${blue})`;
    change.style.color = newColor;
  });
};
changeColorWithRandom();
