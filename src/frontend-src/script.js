

// const uncheck_button = document.getElementsByClassName('uncheck-btn'); 
// //console.log(uncheck_button);
// uncheck_button[0].addEventListener("click", uncheckAll);

function uncheckAll(){
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        item.checked = false
      });

}



