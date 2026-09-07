import React, { useState } from "react";
import "./ScientificCalcStyle.css";

function ScientificCalc() {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput((prev) => prev + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const deleteValue = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      let expression = input
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/√/g, "Math.sqrt")
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(");

      const result = eval(expression);

      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  const square = () => {
    try {
      setInput(Math.pow(Number(input), 2));
    } catch {
      setInput("Error");
    }
  };

  const squareRoot = () => {
    try {
      setInput(Math.sqrt(Number(input)));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>

      <input type="text" value={input} readOnly placeholder="0" />

      <div className="buttons">
        <button onClick={clearDisplay}>AC</button>
        <button onClick={deleteValue}>DEL</button>
        <button onClick={() => display("(")}>(</button>
        <button onClick={() => display(")")}> )</button>
        <button onClick={() => display("/")}>÷</button>

        <button onClick={() => display("sin(")}>sin</button>
        <button onClick={() => display("cos(")}>cos</button>
        <button onClick={() => display("tan(")}>tan</button>
        <button onClick={() => display("log(")}>log</button>
        <button onClick={() => display("*")}>×</button>

        <button onClick={squareRoot}>√</button>
        <button onClick={square}>x²</button>
        <button onClick={() => display("**")}>xʸ</button>
        <button onClick={() => display("ln(")}>ln</button>
        <button onClick={() => display("-")}>−</button>

        {/* Fourth Row */}
        <button onClick={() => display("7")}>7</button>
        <button onClick={() => display("8")}>8</button>
        <button onClick={() => display("9")}>9</button>
        <button onClick={() => display("%")}>%</button>
        <button onClick={() => display("+")}>+</button>

        <button onClick={() => display("4")}>4</button>
        <button onClick={() => display("5")}>5</button>
        <button onClick={() => display("6")}>6</button>
        <button onClick={() => display(".")}>.</button>
        <button onClick={calculate}>=</button>

        <button onClick={() => display("1")}>1</button>
        <button onClick={() => display("2")}>2</button>
        <button onClick={() => display("3")}>3</button>
        <button onClick={() => display("0")}>0</button>
        <button onClick={() => display("π")}>π</button>

        <button onClick={() => display("e")}>e</button>
        <button onClick={() => display("**2")}>x²</button>
        <button onClick={() => display("1/")}>1/x</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default ScientificCalc;
