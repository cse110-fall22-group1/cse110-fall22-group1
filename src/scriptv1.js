const { ModuleMocker } = require("jest-mock");

window.addEventListener('DOMContentLoaded', init);

const items = document.getElementsByClassName("list-item");
const deleteButtons = document.getElementsByClassName("delete");
/**
 * Populate the document with items.
 */

// Global variables (items) cannot be used in init() function
function init() {
    // *** ADD ITEM BUTTON ***
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
    // Add delete functionality to existing items on load
    window.addEventListener('load', addDeleteEventListnerOnLoad());
}

/**
 * Add items to the document
 * @param {string} name - The name of the item.
 * @param {boolean} checked - The status of the item.
 * @param {string} category - The category of the item.
 */
const addItem = (name, checked, category) => {
    // console.log(items);
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
    // console.log(newItem.getElementsByClassName("list-content"));
    listDOM.appendChild(newItem);
}

/**
 * Add delete functionality to each item.
 */
function addDeleteEventListnerOnLoad() {
  // let deleteButtons = document.getElementsByClassName("delete");
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
    // console.log(`just added a new item, wanted to make sure the length of list is correct: ${items.length}`);
    let endIndex = deleteButtons.length-1;
    deleteButtons[endIndex].addEventListener("click", (e) => {
        const index = Array.from(deleteButtons).indexOf(e.target);
        removeItem(index);
  });
}

const removeItem = (index) => {
    items[index].remove();
}

/**
 * Update the status of all items to "uncheck".
 */
function uncheckAll() {
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        item.checked = false
    });
}

/**
 * Manually save all items to localStorage.
 */
function save() {
    // let items = document.getElementsByClassName("list-item");
    let store = [];
    for (let i = 0; i < items.length; i++) {
        let a = [items[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked, items[i].getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value];
        console.log(a);
        store.push(a);
    }
    localStorage.setItem("storage", JSON.stringify(store));
}

/**
 * Save all items to localStorage before closing homepage.
 */
window.onbeforeunload = confirmExit;
function confirmExit() {
    // let items = document.getElementsByClassName("list-item");
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

// module.exports = items;
// module.exports = deleteButtons;
// module.exports = addItem();
module.exports = { addItem, removeItem, uncheckAll, items};