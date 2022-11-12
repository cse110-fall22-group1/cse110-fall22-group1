// const dragga = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');
//
// dragga.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     })
//
//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     })
// })
//
// var enterButton = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");
// var item = document.getElementsByTagName("li");
//
// function inputLength(){
//     return input.value.length;
// }
//
// function listLength(){
//     return item.length;
// }
//
// function createListElement() {
//     var li = document.createElement("li"); // creates an element "li"
//     li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
//     ul.appendChild(li); //adds li to ul
//     input.value = ""; //Reset text input field
//
//
//     //START STRIKETHROUGH
//     // because it's in the function, it only adds it for new items
//     function crossOut() {
//         li.classList.toggle("done");
//     }
//
//     li.addEventListener("click",crossOut);
//     //END STRIKETHROUGH
//
//
//     // START ADD DELETE BUTTON
//     var dBtn = document.createElement("button");
//     dBtn.appendChild(document.createTextNode("X"));
//     li.appendChild(dBtn);
//     dBtn.addEventListener("click", deleteListItem);
//     // END ADD DELETE BUTTON
//
//
//     //ADD CLASS DELETE (DISPLAY: NONE)
//     function deleteListItem(){
//         li.classList.add("delete")
//     }
//     //END ADD CLASS DELETE
// }
//
//
// function addListAfterClick(){
//     if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
//         createListElement();
//     }
// }
//
// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
//         //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
//         createListElement();
//     }
// }
//
//
// enterButton.addEventListener("click",addListAfterClick);
//
// input.addEventListener("keypress", addListAfterKeypress);

// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

//New Task List Item
var createNewTaskElement = function(taskString) {
    //Create List Item
    var listItem = document.createElement("li");

    //input (checkbox)
    var checkBox = document.createElement("input"); // checkbox
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input"); // text
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

    //Each element needs modifying

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;


    // each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Add a new task
var addTask = function() {
    console.log("Add task...");
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}

// Edit an existing task
var editTask = function() {
    console.log("Edit Task...");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]")
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode
    if(containsClass) {
        //switch from .editMode
        //Make label text become the input's value
        label.innerText = editInput.value;
    } else {
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
    }

    // Toggle .editMode on the parent
    listItem.classList.toggle("editMode");

}


// Delete an existing task
var deleteTask = function() {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    //Remove the parent list item from the ul
    ul.removeChild(listItem);
}

// Mark a task as complete
var taskCompleted = function() {
    console.log("Task complete...");
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function() {
    console.log("Task Incomplete...");
    // When checkbox is unchecked
    // Append the task list item #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask to edit button
    editButton.onclick = editTask;

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
    console.log("AJAX Request");
}

// Set the click handler to the addTask function
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


// Cycle over the incompleteTaskHolder ul list items
for(var i = 0; i <  incompleteTasksHolder.children.length; i++) {
    // bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
// Cycle over the completeTaskHolder ul list items
for(var i = 0; i <  completedTasksHolder.children.length; i++) {
    // bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);

}





