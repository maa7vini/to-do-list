// Seleção de Elementos \\ 
const todoForm = document.querySelector('#to-do-form');
const todoInput = document.querySelector('#to-do-input');
const todoList = document.querySelector('#to-do-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

// Funções \\ 
const saveTodo = (text) => {

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deletBtn = document.createElement('button');
    deletBtn.classList.add('remove-todo');
    deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deletBtn);

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus()
}

// Eventos \\
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoInput.value 

    if(inputValue){
        saveTodo(inputValue)
    }
})

