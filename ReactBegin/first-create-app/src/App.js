import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("enter");
    return () => console.log("exit");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const showHello = () => setShowing((showing) => !showing);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <Button text={"click"} onClick={onClick} />
      {showing ? <Hello /> : null}
      <button onClick={showHello}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
