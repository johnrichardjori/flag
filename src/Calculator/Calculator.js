import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression) || "Error");
      } catch (error) {
        setResult("Error");
      }
      setExpression("");
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "C", 0, "=", "+"].map(
          (value, index) => (
            <button key={index} onClick={() => handleClick(value)}>
              {value}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Calculator;
