// Shift option down arrow

// List Layout
// <ul class="todo-list">
// <div class="todo">
// <li></li>
// <button>delete</button>
// <button>checked</button>
//</div>
// </ul>

// When add btn = clicked
// task to show up in the list
// delete the task
// mark task as complete

// when we have a visible task
// mark as complete
// delete the task

// when delete btn = clicked
// task and everything associated w/task to disapear

// When complete btn = clicked
// we want the task to change to either crossed out or something else to indicate that the task is complete

// Tasks remaining

// selectors
    //Input
const todoInput = document.querySelector(".todo-add-input");

    //Buttons
const addtaskBtn = document.querySelector(".todo-add-btn");
const alltaskBtn = document.querySelector(".all-task-list-btn");
const completetaskBtn = document.querySelector(".complete-task-list-btn");
const incompletetaskBtn = document.querySelector(".incomplete-task-list-btn");

    //Lists
//const todoList = document.querySelector(".todo-task-list"); 
const completedList = document.querySelector(".completed-list"); 
const incompleteList = document.querySelector(".incomplete-list");

//Event Listeners
addtaskBtn.addEventListener('click', addTask);

// task count
let taskBar = document.querySelector(".tasks-remaining");

let taskCount = 0;
taskBar.innerHTML = `${taskCount} Tasks Remaining`;

function addTask() {
  //Create todo div
  const todoDiv = document.createElement("div");

  // add class to the todo div
  todoDiv.classList.add("todo");

  //Create task li
  const newTask = document.createElement("li");
  newTask.innerHTML = todoInput.value;
  newTask.classList.add("todo-item");

  //append the item to the todoList
  incompleteList.appendChild(newTask);
  

  //Complete Btn
  //create a span element
  const completetaskBtn = document.createElement("span");
  completetaskBtn.innerHTML = "Complete";
  completetaskBtn.classList.add("completed-btn", "button");
  //append completed btn
  incompleteList.appendChild(completetaskBtn);

  //Delete Btn
  //create a span element
  const deletetaskBtn = document.createElement("span");
  deletetaskBtn.innerHTML = "Delete";
  deletetaskBtn.classList.add("delete-btn", "button");
  //append delete btn
  incompleteList.appendChild(deletetaskBtn);


  //Clear input value after add btn is clicked
  todoInput.value = "";

  //add to task count
  if (onclick = "addTask") {
    taskCount += 1;
    taskBar.innerHTML = `${taskCount} Tasks Remaining`;
  }

  // delete function
  // deletes tasks when btn is clicked
  deletetaskBtn.onclick = function () {
    incompleteList.removeChild(newTask);
    incompleteList.removeChild(deletetaskBtn);
    incompleteList.removeChild(completetaskBtn);

    // subtract from task count
    taskCount -= 1;
    taskBar.innerHTML = `${taskCount} Tasks Remaining`;
  };

  completetaskBtn.onclick = function () {
    //append to completed list
    completedList.appendChild(newTask);
    incompleteList.removeChild(deletetaskBtn);
    incompleteList.removeChild(completetaskBtn);

    // subtract from task total
    taskCount -= 1;
    taskBar.innerHTML = `${taskCount} Tasks Remaining`;
  };
}
