
window.addEventListener('DOMContentLoaded', init);
// const uncheck_button = document.getElementsByClassName('uncheck-btn'); 
// //console.log(uncheck_button);
// uncheck_button[0].addEventListener("click", uncheckAll);
function init(){

  // *** ADD ITEM BUTTON ***
    const addButton = document.getElementsByClassName('item-add-btn')[0];
    addButton.addEventListener('click', function(){
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
        listDOM.appendChild(newItem);
        // const listItemClassDOM = document.getElementsByClassName("list-item");
        // addDeleteEventListener(listItemClassDOM.length-1);
    });
     
}

function addDeleteEventListener(index){
    const listDOM = document.getElementsByClassName("list-item");
    const deleteButtons = document.getElementsByClassName("delete");
    console.log(listDOM);
    console.log(deleteButtons);
    console.log(index);
    deleteButtons[index].addEventListener('click', function(){
      listDOM[index].remove();
      itemCount--;
  })
}

function uncheckAll(){
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        item.checked = false
      });

}



