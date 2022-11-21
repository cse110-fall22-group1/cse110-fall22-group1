window.addEventListener('DOMContentLoaded', init);

/**
 * Populate the document with items.
 */
function init() {
    // *** ADD ITEM BUTTON ***
    const addButton = document.getElementsByClassName('item-add-btn')[0];
    addButton.addEventListener('click', function() {
        addItem("", false, "");
    });
    let items = JSON.parse(localStorage.getItem("storage"));
    console.log(items[0]);
    for (let i = 0; i < items.length; i++) {
        addItem(items[i][1], items[i][0], "");
    }
}

/**
 * Add items to the document
 * @param {string} name - The name of the item.
 * @param {boolean} checked - The status of the item.
 * @param {string} category - The category of the item.
 */
function addItem(name, checked, category) {
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
    console.log(newItem.getElementsByClassName("list-content"));
    listDOM.appendChild(newItem);
}


function addDeleteEventListener(index) {
    const listDOM = document.getElementsByClassName("list-item");
    const deleteButtons = document.getElementsByClassName("delete");
    console.log(listDOM);
    console.log(deleteButtons);
    console.log(index);
    deleteButtons[index].addEventListener('click', function() {
        listDOM[index].remove();
        itemCount--;
    })
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
    let items = document.getElementsByClassName("list-item");
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
    let items = document.getElementsByClassName("list-item");
    let store = [];
    for (let i = 0; i < items.length; i++) {
        let a = [items[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked, items[i].getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value];
        console.log(a);
        store.push(a);
    }
    localStorage.setItem("storage", JSON.stringify(store));
    return false;
}