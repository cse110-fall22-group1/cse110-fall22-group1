console.log('linked')
var originalList = document.querySelector('#original-list');
var items = originalList.getElementsByClassName("list-item");
var checkboxes = document.querySelectorAll('.checkbox');
  
function removeItem(index){
    items[index].style.display = "none";
}

function addItem(index){
items[index].style.display = "flex";
}

let allItemsButton = document.getElementById('all-items-btn');
allItemsButton.addEventListener ('click', function(){
    for (let i = 0; i < checkboxes.length; i++){
        addItem(i);
    }
})

let uncheckButton = document.getElementById('unchecked-items-btn');
console.dir(uncheckButton);
uncheckButton.addEventListener('click', function() {
    for (let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked == true){
            console.log(i);
            removeItem(i);
        } else {
            addItem(i);
        }
    }
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener('click', (e) => {
            let index = Array.from(checkboxes).indexOf(e.target);
            if(checkboxes[i].checked == true){
                console.log(index);
                removeItem(index);
            } else {
                addItem(index);
            }
        })
    }
})

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

let create_cat = document.querySelector('.create-cat-btn');
console.log(create_cat);
create_cat.addEventListener("click", function() {
    document.querySelector('.modal-cat').style.display = "flex";

    document.querySelector('.cancel-btn').addEventListener("click", function() {
        document.querySelector('.modal-cat').style.display = "none";
    });

    document.querySelector('.category-add-btn').addEventListener("click", function() {
        document.querySelector('.modal-cat').style.display = "none";
    });
})