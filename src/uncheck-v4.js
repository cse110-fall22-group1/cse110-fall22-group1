console.log('linked')
var originalList = document.querySelector('#original-list');
var item = originalList.getElementsByClassName("list-item");
var checkboxes = document.querySelectorAll('.checkbox');
  
function uncheckItem(index){
    item[index].style.display = "none";
}

function checkItem(index){
item[index].style.display = "flex";
}

let uncheckButton = document.getElementById('unchecked-items-btn');
console.dir(uncheckButton);
uncheckButton.addEventListener('click', function() {
    for (let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked == true){
            console.log(i);
            uncheckItem(i);
        } else {
            checkItem(i);
        }
    }
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener('click', (e) => {
            let index = Array.from(checkboxes).indexOf(e.target);
            if(checkboxes[i].checked == true){
                console.log(index);
                uncheckItem(index);
            } else {
                checkItem(index);
            }
        })
    }
})

let allItemsButton = document.getElementById('all-items-btn');
allItemsButton.addEventListener ('click', function(){
    for (let i = 0; i < checkboxes.length; i++){
        checkItem(i);
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