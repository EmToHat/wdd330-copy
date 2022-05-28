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
addtaskBtn.addEventListener("click", addTask);

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

  //add to task count
  if ((onclick = "addTask")) {
   //Clear input value after add btn is clicked
   todoInput.value = "";
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