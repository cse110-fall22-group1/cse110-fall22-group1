const functions = require('../script.js');

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
});
