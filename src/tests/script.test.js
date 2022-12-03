const functions = require('../script.js');

let listDOM;
let items;

beforeAll(() => {
    document.body.innerHTML = `
            <div class="list-wrapper" id="original-list">
            <div class="list">
                <div class="category-wrapper">
                    <div class="category-header">
                        <div class="category-header-container">
                            <h2 class="list-title">test</h2>
                            <div class="btn-group">
                                <button class="cat-del-btn">-</button>
                                <button class="collapse-add-btn">&gt;</button>
                                <button class="item-add-btn">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-wrapper">
                        <div class="list-item">
                            <label>
                                <input type="checkbox">
                                <span class="bubble"></span>
                            </label>
                            <div class="list-content">
                                <input type="text" value="">
                            </div>
                            <div class="actions">
                                <button class="delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    listDOM = document.getElementsByClassName('list');
    items = document.getElementsByClassName("list-item");
});

test('Add multiple items', () => {
    let listLength = items.length;
    functions.addItem("apple", false, undefined);
    expect(functions.items.length).toBe(++listLength);
    functions.addItem("banana", false, undefined);
    expect(functions.items.length).toBe(++listLength);
})

test('Remove items from top of list', () => {
    let listLength = items.length;
    functions.removeItem(0);
    expect(functions.items.length).toBe(--listLength);
    functions.removeItem(0);
    expect(functions.items.length).toBe(--listLength);
})

test('uncheck all items', () => {
    functions.addItem("apple", true, "fruit");
    functions.uncheckAll();
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        expect(item.checked).toBe(false);
    });
})








