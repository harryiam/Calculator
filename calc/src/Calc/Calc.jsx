import React, { useState } from "react";
import styles from "./Calc.module.css";

function Calc() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult("Error");
      }
      setDisplay("");
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className={styles.calculator}>
        <h3>React Calculator</h3>
      <input type="text" value={result?(result):(display)} readOnly className={styles.display} />
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      {/* <div className={styles.result}>{result}</div> */}
    </div>
  );
}

export default Calc;
