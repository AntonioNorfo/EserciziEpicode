const myList = document.getElementById("myList");
const sendForm = document.getElementById("sendForm");
const btnButton = document.getElementById("btnButton");
const listP = document.getElementById("listP");
const newLabel = [];

window.addEventListener("load", init);

function init() {
  btnButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!checkInput()) return;
    itemsNewLabel();
    printListP();
    myList.reset();
  });
  function checkInput() {
    if (sendForm.value === "") {
      return false;
    } else {
      return true;
    }
  }

  function itemsNewLabel() {
    newLabel.push(sendForm.value);
    console.log(newLabel);
  }

  function printListP() {
    listP.innerHTML = " ";
    for (let i = 0; i < newLabel.length; i++) {
      let componentNewLabel = document.createElement("p");
      componentNewLabel.innerText = newLabel[i];
      let btnDelete = document.createElement("button");
      btnDelete.setAttribute("type", "button");
      btnDelete.setAttribute("onclick", `deleteItem(${i});`);
      btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
      componentNewLabel.appendChild(btnDelete);
      listP.appendChild(componentNewLabel);
    }
  }

  function deleteItem(index) {
    newLabel.splice(index, 1);
    printListP();
  }
}
