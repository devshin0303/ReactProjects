import { useEffect, useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
    // console.log(todo);
  };
  const onClick = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button onClick={onClick}>submit</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
  // -------------------------------------------------------------
  // useEffect 를 활용한 예제
  // -------------------------------------------------------------
  // const [counter, setCounter] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const [showing, setShowing] = useState(false);

  // const showHello = () => setShowing((showing) => !showing);
  // const onClick = () => setCounter((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);

  // console.log("i run all the time");

  // useEffect(() => {
  //   console.log("I run only once.");
  // }, []);

  // useEffect(() => {
  //   console.log("I run when 'keyword' changes");
  // }, [keyword]);

  // useEffect(() => {
  //   console.log("I run when 'counter' changes");
  // }, [counter]);

  // return (
  //   <div>
  //     <input
  //       value={keyword}
  //       onChange={onChange}
  //       type="text"
  //       placeholder="Search here..."
  //     ></input>
  //     <h1>{counter}</h1>
  //     <Button text={"click"} onClick={onClick} />
  //     {showing ? <Hello /> : null}
  //     <button onClick={showHello}>{showing ? "hide" : "show"}</button>
  //   </div>
  // );
  // -------------------------------------------------------------
}

export default TodoList;
