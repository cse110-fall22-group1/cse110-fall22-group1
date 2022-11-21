window.addEventListener('DOMContentLoaded', init);
// const uncheck_button = document.getElementsByClassName('uncheck-btn'); 
// //console.log(uncheck_button);
// uncheck_button[0].addEventListener("click", uncheckAll);
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
function uncheckAll() {
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        item.checked = false
    });
}
function test() {
    let items = document.getElementsByClassName("list-item");
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