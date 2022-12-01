console.log('linked')

window.addEventListener('DOMContentLoaded', init);

// var uncheckedList = document.getElementById('unchecked-list');
// var text = '<span> Unchecked item : </span>';
// var uncheckedArray = [];
// var originalList = document.querySelector('#original-list');
// var clonedList = originalList.cloneNode(true);
// uncheckedList.appendChild(clonedList);
// var item = clonedList.getElementsByClassName("list-item");
// var checkboxes = document.querySelectorAll('.checkbox');
// var clonedCheckboxes = clonedList.querySelectorAll('.checkbox');

// console.log(uncheckedList);

//   function uncheckItem(index){
//       item[index].style.display = "none";
//   }

//   function checkItem(index){
//     item[index].style.display = "flex";
// }

// for (let i = 0; i < checkboxes.length; i++){
//     checkboxes[i].addEventListener('click', (e) => {
//         let index = Array.from(checkboxes).indexOf(e.target);
//         if(checkboxes[i].checked == true){
//             console.log(index);
//             removeItem(index);
//             clonedCheckboxes[i] = true;
//             uncheckedList.appendChild(clonedList);
//         } else {
//             addItem(index);
//             clonedCheckboxes[i] = false;
//             uncheckedList.appendChild(clonedList);
//         }
//     })
// }

// for (let i = 0; i < clonedCheckboxes.length; i++){
//     clonedCheckboxes[i].addEventListener('click', (e) => {
//         let index = Array.from(clonedCheckboxes).indexOf(e.target);
//         if(clonedCheckboxes[i].checked == true){
//             console.log(index);
//             removeItem(index);
//             checkboxes[i].checked = true;
//             uncheckedList.appendChild(clonedList);
//         } else {
//             addItem(index);
//             checkboxes[i].checked = false;
//             uncheckedList.appendChild(clonedList);
//         }
//     })
// }

    let split_btn = document.querySelector('.split-button');
    console.dir(split_btn);
    split_btn.addEventListener('click', function (){
        let modal = split_btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";

        
    });
    let closeBtns = document.querySelector('.closeButtons');
        closeBtns.addEventListener('click', function () {
        let modal = closeBtns.closest(".modal");
            modal.style.display = "none";

    });

    //   window.onclick = function (event) {
    //     if (event.target.className === "modal") {
    //       event.target.style.display = "none";
    //     }
    //   };

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
    function init(){

    }