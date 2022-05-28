// Shift option down arrow

// selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTask);

// Functions
function addTask(){
    //Create todo div
    const todoDiv = document.createElement('div');
    
    // add class to the todo div
    todoDiv.classList.add("todo");
    
    //Create task li
    const newTask = document.createElement('li');
    newTask.innerHTML = todoInput.value;
    newTask.classList.add('todo-item');
    
    //append the item to the todoList
    todoList.appendChild(newTask);

    //Checked Btn
    //create a btn element
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = 'Complete';
    completedBtn.classList.add('completed-btn');
    todoList.appendChild(completedBtn);
    
    //Delete Btn
    //create a btn element
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('delete-btn');
    todoList.appendChild(deleteBtn);
    //todoList.removeChild(li);

    //Clear input value
    todoInput.value = '';
}