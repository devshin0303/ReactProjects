const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME); //form tag에 클래스 추가
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`; //백틱 `` 사용
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleClickLink(event) {
//   event.preventDefault();
//   console.log(event);
// }

// link.addEventListener("click", handleClickLink);
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
