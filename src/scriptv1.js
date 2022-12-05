const { ModuleMocker } = require("jest-mock");

window.addEventListener('DOMContentLoaded', init);

const items = document.getElementsByClassName("list-item");
const deleteButtons = document.getElementsByClassName("delete");

function init() {
    const addButton = document.getElementsByClassName('item-add-btn')[0];
    addButton.addEventListener('click', function() {
        addItem("", false, "");
        addDeleteEventListener(); 
    });
    let items = JSON.parse(localStorage.getItem("storage"));
    console.log(items[0]);
    for (let i = 0; i < items.length; i++) {
        addItem(items[i][1], items[i][0], "");
    }
    window.addEventListener('load', addDeleteEventListnerOnLoad());
}

const addItem = (name, checked, category) => {
    const listDOM = document.getElementsByClassName('list')[0];
    const newItem = document.createElement('div');
    newItem.className = 'list-item';
    newItem.innerHTML = `
    <label>
      <input type="checkbox">
      <span class="bubble" ></span>
    </label>
    <div class="list-content">
        <input type="text" value ="" >
    </div>
    <div class = "actions">
        <button class = "edit">Edit</button>
        <button class = "delete">Delete</button>
    </div>
  `
    newItem.getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value = name;
    newItem.getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked = checked;
    listDOM.appendChild(newItem);
}

function addDeleteEventListnerOnLoad() {
  for(let i = 0; i < deleteButtons.length; i++){
      console.log("inside the array");
      deleteButtons[i].addEventListener("click", (e) => {
          const index = Array.from(deleteButtons).indexOf(e.target);
          removeItem(index);
      })
  }
}


function addDeleteEventListener() {
    const listDOM = document.getElementsByClassName("list-item");
    let endIndex = deleteButtons.length-1;
    deleteButtons[endIndex].addEventListener("click", (e) => {
        const index = Array.from(deleteButtons).indexOf(e.target);
        removeItem(index);
  });
}

const removeItem = (index) => {
    items[index].remove();
}

function uncheckAll() {
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        item.checked = false
    });
}

function save() {
    let store = [];
    for (let i = 0; i < items.length; i++) {
        let a = [items[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked, items[i].getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value];
        console.log(a);
        store.push(a);
    }
    localStorage.setItem("storage", JSON.stringify(store));
}

window.onbeforeunload = confirmExit;
function confirmExit() {
    console.log(items);
    let store = [];
    for (let i = 0; i < items.length; i++) {
        let a = [items[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked, items[i].getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value];
        console.log(a);
        store.push(a);
    }
    localStorage.setItem("storage", JSON.stringify(store));
    return false;
}

module.exports = { addItem, removeItem, uncheckAll, items};