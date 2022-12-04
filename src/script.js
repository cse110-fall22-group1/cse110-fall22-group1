window.addEventListener('DOMContentLoaded', init);

const items = document.getElementsByClassName("list-item");
const deleteButtons = document.getElementsByClassName("delete");
const deleteCategoryButton = document.getElementsByClassName("cat-del-btn");
const allCategory = document.getElementsByClassName("category-wrapper");
let coll = document.getElementsByClassName("collapse-add-btn");
let cate = document.getElementsByClassName('item-wrapper');
let leg = document.getElementsByClassName('category-header');
var allItems = true;

/**
 * Populate the document with items.
 */

// Global variables (items) cannot be used in init() function
function init() {
    // *** ADD ITEM BUTTON ***

    // load in items from local storage
    let store = JSON.parse(localStorage.getItem("storage"));

    if (store) {
        for (let i = 0; i < store.length; i++) {

            addCategory(store[i][0]);
            for (let j = 1; j < store[i].length; j++) {
                addItem(store[i][j][1], store[i][j][0], store[i][0]);
            }


        }
    }



    // Add delete functionality to existing items on load



    const addCategoryButton = document.getElementsByClassName("category-add-btn")[0];
    const addCategoryName = document.getElementsByClassName("category-name")[0];



    window.addEventListener('load', addDeleteEventListenerOnLoad());
    addCategoryButton.addEventListener('click', function() {
        addCategory(addCategoryName.value);

    });


    window.addEventListener('click', function(e) {
        if(e.target.className === 'collapse-add-btn'){
            var i;
            for (i = 0; i < coll.length; i = i + 1) {
                let index;
                if(e.target == coll[i]){
                    index = i;
                    if ((cate[index]).style.display != "none") {
                        (cate[index]).style.display = 'none';
                        coll[index].textContent = "^";
                        leg[index].style.paddingBottom = '0px';
                    } else {
                        (cate[index]).style.display = 'block';
                        coll[index].textContent = ">";
                        leg[index].style.paddingBottom = '8px';
                    }
                }
            }   
        }
    });


    let uncheckButton = document.getElementById('unchecked-items-btn');
    let allItemsButton = document.getElementById('all-items-btn');

    allItemsButton.addEventListener('click', function() {
        allItems = true;
        refreshState();
    });


    uncheckButton.addEventListener('click', function() {
        allItems = false;
        refreshState();
    });


    let split_btn = document.querySelector('.split-button');
        console.dir(split_btn);
        split_btn.addEventListener('click', function (){
            let modal = split_btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";       
    });
    let closeBtns = document.querySelector('.close');
        closeBtns.addEventListener('click', function () {
        let modal = closeBtns.closest(".modal");
            modal.style.display = "none";
    });
    let button = document.querySelector('.calculate-button');
    button.addEventListener('click', calcFunction);
}

let calcFunction = function calculate(){
    let output = document.querySelector('.calculate-result');
    let cost = document.getElementById('cost').value;
    let num = document.getElementById('people').value;
    let sum = cost/num;
    output.innerHTML = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    //test and error handling for calculator functionality
    try {
        if (isNaN(cost) || isNaN(num) ) {
            throw new PropertyRequiredError("Number Error");
        }
    } catch (err) {
        alert(`Please enter valid numerical values!`); 
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
    const categories = listDOM.getElementsByClassName("category-wrapper");
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
        <button class = "delete">Delete</button>
    </div>
  `
    newItem.getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value = name;
    newItem.getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked = checked;

    for (let i = 0; i < categories.length; i++) {
        const categoryName = categories[i].getElementsByClassName("category-header")[0].getElementsByClassName("category-header-container")[0].getElementsByClassName("list-title")[0];
        if (categoryName.innerText === category) {
            categories[i].getElementsByClassName("item-wrapper")[0].appendChild(newItem);
        }
    }


    newItem.querySelectorAll("input[type=checkbox")[0].addEventListener('change', function() {
        refreshState();
    });

    addDeleteEventListener();


}

/**
 * Add delete functionality to each item.
 */
function addDeleteEventListenerOnLoad() {
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (e) => {
            const index = Array.from(deleteButtons).indexOf(e.target);
            removeItem(index);
        })
    }
}


function addDeleteEventListener() {
    const listDOM = document.getElementsByClassName("list-item");
    let endIndex = deleteButtons.length - 1;
    deleteButtons[endIndex].addEventListener("click", (e) => {
        const index = Array.from(deleteButtons).indexOf(e.target);
        removeItem(index);
    });
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

    let store = []

    let categories = document.getElementsByClassName("category-wrapper");

    for (let i = 0; i < categories.length; i++) {

        let cat = [];

        cat.push(categories[i].getElementsByClassName("list-title")[0].innerText);
        let items = categories[i].getElementsByClassName("list-item");

        for (let j = 0; j < items.length; j++) {
            cat.push([items[j].getElementsByTagName("input")[0].checked, items[j].getElementsByTagName("input")[1].value]);

        }

        store.push(cat);

    }


    localStorage.setItem("storage", JSON.stringify(store));
}

/**
 * Save all items to localStorage before closing homepage.
 */
window.onbeforeunload = confirmExit;
function confirmExit() {
    save(); 
    return false;
}




window.addEventListener('load', function() {
    let create_cat = document.querySelector('.create-cat-btn');
    create_cat.addEventListener("click", function() {
        document.querySelector('.modal-cat').style.display = "flex";
        document.querySelector('.cancel-btn').addEventListener("click", function() {
            document.querySelector('.modal-cat').style.display = "none";
        });
        document.querySelector('.category-add-btn').addEventListener("click", function() {
            document.querySelector('.modal-cat').style.display = "none";
        });
    })
});




function addCategory(name) {


    const listDOM = document.getElementsByClassName('list')[0];
    const newCategory = document.createElement('div');
    newCategory.className = "category-wrapper";
    newCategory.innerHTML =
        `<div class="category-header">
  <div class="category-header-container">
    <h2 class="list-title">Meat</h2>
    <div class="btn-group">
      <button class="cat-del-btn">-</button>
      <button class="collapse-add-btn">></button>
      <button class="item-add-btn">+</button>
    </div>
  </div>
</div>
<div class="item-wrapper"></div>`

    newCategory.getElementsByClassName("category-header-container")[0].getElementsByClassName("list-title")[0].textContent = name;


    listDOM.appendChild(newCategory);
    newCategory.getElementsByClassName("cat-del-btn")[0].addEventListener("click", function(){
        removeCategory(this); 
    });

    newCategory.getElementsByClassName("item-add-btn")[0].addEventListener("click", function(){
        addItem("", false, this.parentNode.parentNode.getElementsByClassName("list-title")[0].innerText);
    });
}

// function removeCategory(index){
//   allCategory[index].remove();
// }


function removeCategory(element){
    element.parentNode.parentNode.parentNode.parentNode.remove();
}


const removeItem = (index) => {
    items[index].remove();
  }


function refreshState() {


    var checkBoxes = document.querySelectorAll("input[type=checkbox]");

    var items = document.getElementsByClassName("list-item");
    if (allItems) {

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }

    } else {


        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked == true) {
                items[i].style.display = "none";
            }
        }

    }
}

module.exports = { addItem, removeItem, uncheckAll, items, calcFunction, addCategory, removeCategory};






