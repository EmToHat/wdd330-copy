//input
let taskInput = document.querySelector(".task-input");

// List
const taskList = document.querySelector(".list");
const completedList = document.querySelector(".completed-list");

// Add Button
const addBtn = document.querySelector(".add-btn");

//Event Listeners
addBtn.addEventListener("click", addTask);

//Task Remaining
let taskBar = document.querySelector(".tasks-remaining");
let taskCount = 0;
taskBar.innerHTML = `${taskCount} Tasks Remaining`;

// Functions
// Add Task Function
function addTask() {
  //Create todo div
  const todoDiv = document.createElement("div");

  // add class to the todo div
  todoDiv.classList.add("todo");

  //Create task li
  let new_task_Li = document.createElement("li");
  new_task_Li.innerHTML = taskInput.value;
  new_task_Li.classList.add("task-item");

  // Complete Button
  // Create a Button Element
  const completetaskBtn = document.createElement("button");
  completetaskBtn.innerHTML = "Complete";
  completetaskBtn.classList.add("completed-btn", "button");

  // Delete Button
  //create a button element
  const deletetaskBtn = document.createElement("button");
  deletetaskBtn.innerHTML = "Delete";
  deletetaskBtn.classList.add("delete-btn", "button");

  //append complete item to the todoList
  new_task_Li.appendChild(completetaskBtn);

  //append delete item to the todoList
  new_task_Li.appendChild(deletetaskBtn);

  //append the whole div
  taskList.appendChild(new_task_Li);

  //Clear input value after add btn is clicked
  taskInput.value = "";
  taskCount += 1;
  taskBar.innerHTML = `${taskCount} Tasks Remaining`;

  // Delete Task Function
  deletetaskBtn.addEventListener("click", deleteTask);

  // Delete Task Function
  function deleteTask() {
    taskList.removeChild(new_task_Li);

    // subtract from task count
    taskCount -= 1;
    taskBar.innerHTML = `${taskCount} Tasks Remaining`;
  }

  // Complete Task Function
  completetaskBtn.addEventListener("click", CompleteTask);

  // Delete Task Function
  function CompleteTask() {
    new_task_Li.removeChild(completetaskBtn);
    new_task_Li.removeChild(deletetaskBtn);
    completedList.append(new_task_Li);

    // subtract from task count
    taskCount -= 1;
    taskBar.innerHTML = `${taskCount} Tasks Remaining`;
  }
}