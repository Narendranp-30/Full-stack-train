import { useState } from "react";
import '../styles/Calc.css';

const Calc = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState();

  const num1Change = (e) => {
    setNum1(parseInt(e.target.value, 10));
  };
  const num2Change = (e) => {
    setNum2(parseInt(e.target.value, 10));
  };
  const sum = () => {
    setResult(num1 + num2);
  };
  const sub = () => {
    setResult(num1 - num2);
  };
  const mul = () => {
    setResult(num1 * num2);
  };
  const div = () => {
    setResult(num1 / num2);
  };
  return (
    <div className="calc-container">
      <label>
        num1 : <input type="number" value={num1} onChange={num1Change} />
      </label>
      <label>
        num2 : <input type="number" value={num2} onChange={num2Change} />
      </label>
      <div>
        calculate
        <button onClick={sum}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  )
}
export default Calc;
