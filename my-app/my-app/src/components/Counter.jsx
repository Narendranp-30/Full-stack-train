import { useContext, useState } from "react";
import "../App.css";
import { ThemeContext } from "../contexts/theme";
const Counter = () => {
  const { count, setCount } = useContext(ThemeContext);
  function inc() {
    if (count == "No Negative Value") setCount(0);
    setCount((prev) => prev + 0);
    setCount((prev) => prev + 1);
    console.log(count);
  }
  function dec() {
    if (count >= 0) setCount(count - 1);
    else setCount("No Negative Value");
  }
  return (
    <>
      <div>Counter</div>
      <h1 className="flex">{count}</h1>
      <div className="flex">
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
