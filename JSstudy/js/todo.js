const todoForm = document.getElementById("todoForm"); //form element 가져오기
const todoInput = document.querySelector("#todoForm input"); //form element 안에 있는 input elemen가져오기
const todoList = document.getElementById("todoList"); //ul element 가져오기

let toDos = [];

function deleteTodo(event) {
  const li = event.target.parentNode; //현재 target은 button / button의 parentNide는 li
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
  // li.remove();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //localstorage에 저장 key: "todos" value는 :
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  todoList.appendChild(li); //ul element 요소안에 li
  li.appendChild(span);
  li.appendChild(button);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; //newTodo변수를 선언 후 사용자로부터 받은 값을 저장
  //input 박스 안의 값을 초기화
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; //어떤 list를 삭제할지 구분하기 위해
  toDos.push(newTodoObj);
  paintTodo(newTodoObj); //사용자로부터 입력 받은 값을 argument로 받는다.
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

// parsedTodos.forEach((item) => {                    //arrow function
//   console.log("this is the turn of", item);
// ----------------------------------------------------------------------
// function sayHello() {
//   console.log("this is the turn of", item);
// }

// parsedTodos.forEach(sayHello);
