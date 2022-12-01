<<<<<<< HEAD:src/tests/script.test.js
const functions = require('../script.js');
=======
const functions = require('../scriptv1.js');
>>>>>>> backend:src/frontend-src/script.test.js

let listDOM;

beforeAll(() => {
    document.body.innerHTML = `<div class="list"></div>`;
    listDOM = document.getElementsByClassName('list');
});

test('check list size', () => {
    expect(functions.items.length).toBe(0);
    functions.addItem("apple", false, "fruit");
    expect(functions.items.length).toBe(1);
    functions.addItem("banana", false, "fruit");
    expect(functions.items.length).toBe(2);
    
   
})

test('remove item at index', () => {
    functions.removeItem(0);
    expect(functions.items.length).toBe(1);
    functions.removeItem(0);
    expect(functions.items.length).toBe(0);
})

test('uncheck all items', () => {
    functions.addItem("apple", true, "fruit");
    functions.uncheckAll();
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        expect(item.checked).toBe(false);
    });
})





