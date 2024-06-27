const tabellone = []; // Array che conterra' i vari numeri del tabbellone che a sua volta saranno dentro dei div.
let extractedNumbers = [];

const createTable = () => {
  const container = document.getElementById("table");
  for (let i = 0; i < 76; i++) {
    const casella = document.createElement("div");
    casella.innerText = i + 1;
    casella.classList.add("casellaTable");
    container.appendChild(casella);
  }
};

const extractNumber = () => {
  if (extractedNumbers.length >= 76) {
    alert("Tutti i numeri sono stati estratti!");
    return;
  }
  let newNumber;
  do {
    newNumber = Math.floor(Math.random() * 76) + 1;
  } while (extractedNumbers.includes(newNumber));

  extractedNumbers.push(newNumber);
  document.getElementById("extractedNumber").innerText = newNumber;
  colorCell(newNumber);
};

document.getElementById("extractButton").addEventListener("click", extractNumber);

createTable();

function colorCell(number) {
  const cells = document.querySelectorAll(".casellaTable");
  console.log(cells);
  cells.forEach((cell) => {
    if (cell.innerText == number) {
      cell.classList.add("cellColor");
    }
  });
}
