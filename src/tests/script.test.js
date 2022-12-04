const functions = require('../script.js');

let items;
let output;

beforeAll(() => {
    document.body.innerHTML = `
        <!-- List/Category HTML -->
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
    <!-- Calculator HTML -->
        <button class="split-button" data-modal="modalOne">Split Bill</button>
        <div id="modalOne" class="modal">
        <form class="top-wrapper">
            <a class="close">&times;</a>
            <p class="totcost">Total Cost:</p> <input type="text" id="cost" /><br>
            <p class="numpeople">Number of People: </p> <input type="text" id="people" />
        </form>
        <div class="cal-wrapper">
            <button class="calculate-button"> Split Cost</button>
        </div>
        <form class="bot-wrapper">
            <p> Each Person owes:</p>
            <div class="calculate-result">
            </div>
        </form>
    </div>
    `;
    listDOM = document.getElementsByClassName('list');
    items = document.getElementsByClassName("list-item");
    output = document.querySelector('.calculate-result');
    
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

test('Uncheck all items', () => {
    functions.addItem("apple", true, undefined);
    functions.uncheckAll();
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        expect(item.checked).toBe(false);
    });
})

test('Calculate cost for divisible numbers', () =>{
    // functions.button.click();
    document.getElementById('cost').value = 30;
    document.getElementById('people').value = 5;
    functions.calcFunction();
    expect(output.innerHTML).toBe("$6.00");
})

test('Calculate cost for irrational numbers rounded down', () =>{
    // functions.button.click();
    document.getElementById('cost').value = 31;
    document.getElementById('people').value = 3;
    functions.calcFunction();
    expect(output.innerHTML).toBe("$10.33");
})

test('Calculate cost for irrational numbers rounded up', () =>{
    // functions.button.click();
    document.getElementById('cost').value = 2;
    document.getElementById('people').value = 3;
    functions.calcFunction();
    expect(output.innerHTML).toBe("$0.67");
})


//Add Categories Testing
test('Add Category', () =>{

    listCategories = document.getElementsByClassName("category-wrapper");
   
    //initial length
    let initLength = listCategories.length;
    
    //one category added
    functions.addCategory('Wines');
  
    //categories incremented
    expect(listCategories.length).toBe(++initLength);

     //second category added
     functions.addCategory('Wines');

     //thir category added
     functions.addCategory('Wines');

     //categories incremented
     expect(listCategories.length).toBe(initLength + 2);


/*
    let listLength = functions.categories.length;
    console.log(categories);
    functions.addCategory('Wines');
    expect(functions.categories.size()).toBe(listLength + 1);
    
   //expect(functions.categories.length()).toBe(++listLength);
    //expect(listDOM.length).toBe(initialLength + 1);
*/
})


//Remove Categories Testing
test('Remove Category', () =>{


    categories1 = document.getElementsByClassName("category-wrapper");
/*
     //one category added
     functions.addCategory('Salsas');
    
    //initial length
    let initLength = categories1[0].length;

    console.log(categories1.length);
    //console.log(categories1[1]);

   

    console.log(categories1.length);
    console.log(categories1);
    
    //one category remove
    functions.removeCategory(categories1[0]);

    //console.log(categories1.length);

    //categories length remains same
    expect(categories1.length).toBe(initLength);
*/
})

