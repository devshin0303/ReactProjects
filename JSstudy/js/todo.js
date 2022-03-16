const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li); //ul element 요소안에 li
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; //newTodo변수를 선언 후 사용자로부터 받은 값을 저장
  todoInput.value = ""; //input 박스 안의 값을 초기화
  paintTodo(newTodo); //사용자로부터 입력 받은 값을 argument로 받는다.
}

todoForm.addEventListener("submit", handleTodoSubmit);
