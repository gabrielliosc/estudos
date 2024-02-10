const buttonNewTask = document.querySelector(".new-task button");
const taskbox = document.querySelector(".task-box");
const newTaskInput = document.querySelector(".new-task input");

buttonNewTask.addEventListener("click", addTask);


function addTask(e) {

  e.preventDefault();
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";

  const text = newTaskInput.value;
  const textItem = document.createElement("p");
  textItem.innerText = text;

  const buttonTrash = document.createElement("button");
  buttonTrash.innerHTML = '<i class="fa fa-trash"></i>';

  taskItem.appendChild(checkboxInput);
  taskItem.appendChild(textItem);
  taskItem.appendChild(buttonTrash);
  taskbox.appendChild(taskItem);

  buttonTrash.addEventListener("click", deleteTask);
  checkboxInput.addEventListener('click', completeTask);
  newTaskInput.value = "";

  /* Meu
    e.preventDefault()
    const element = document.createElement('p')
    const text = document.querySelector('#newTask').value
    element.innerHTML = `<input type='checkbox'><label>${text}</label>`

    //element.appendChild(newContent)

    const container = document.querySelector('#toDoList')
    container.appendChild(element)
    */
}
function deleteTask(e) {
  /* Meu*/
  const buttonTrash = e.target.parentElement;
  const element = buttonTrash.parentElement;

  element.remove();
}
function completeTask(e) {

  /*Meu -> 
  const completedTask = e.target.parentElement.querySelector('p');
  completedTask.classList.add("complete");
  */
  //Corecao
  e.target.parentElement.classList.toggle("complete");
}

