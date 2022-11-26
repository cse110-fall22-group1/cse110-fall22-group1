console.log('linked')

var uncheckedList = document.getElementById('unchecked-list');
var text = '<span> Unchecked items : </span>';
var uncheckedArray = [];
var originalList = document.querySelector('#original-list');
var clonedList = originalList.cloneNode(true);
uncheckedList.appendChild(clonedList);
var items = clonedList.getElementsByClassName("list-item");
var checkboxes = document.querySelectorAll('.checkbox');
var clonedCheckboxes = clonedList.querySelectorAll('.checkbox');
  
  function removeItem(index){
      items[index].style.display = "none";
  }

  function addItem(index){
    items[index].style.display = "flex";
}

for (let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click', (e) => {
        let index = Array.from(checkboxes).indexOf(e.target);
        if(checkboxes[i].checked == true){
            console.log(index);
            removeItem(index);
            clonedCheckboxes[i] = true;
            uncheckedList.appendChild(clonedList);
        } else {
            addItem(index);
            clonedCheckboxes[i] = false;
            uncheckedList.appendChild(clonedList);
        }
        
    })
}

for (let i = 0; i < clonedCheckboxes.length; i++){
    clonedCheckboxes[i].addEventListener('click', (e) => {
        let index = Array.from(clonedCheckboxes).indexOf(e.target);
        if(clonedCheckboxes[i].checked == true){
            console.log(index);
            removeItem(index);
            checkboxes[i].checked = true;
            uncheckedList.appendChild(clonedList);
        } else {
            addItem(index);
            checkboxes[i].checked = false;
            uncheckedList.appendChild(clonedList);
        }
    })
}