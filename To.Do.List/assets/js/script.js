const sendForm = document.getElementById("sendForm");
const btnButton = document.getElementById("btnButton");
const listP = document.getElementById("listP");
const newLabel = [];
btnButton.addEventListener("click", () => {
  //  e.preventDefault();
  itemsNewLabel();
});
function itemsNewLabel() {
  newLabel.push(sendForm.value);
  console.log(newLabel);
  printListP();
  sendForm.value = "";
}

function printListP() {
  listP.innerHTML = " ";
  for (let i = 0; i < newLabel.length; i++) {
    let componentNewLabel = document.createElement("p");
    componentNewLabel.innerText = newLabel[i];
    let btnDelete = document.createElement("button");
    btnDelete.addEventListener("click", () => {
      newLabel.splice(i, 1);
      printListP();
    });
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    componentNewLabel.appendChild(btnDelete);
    listP.appendChild(componentNewLabel);
  }
}
