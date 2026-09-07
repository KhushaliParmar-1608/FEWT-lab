import React, { useState } from "react";
import "./SimpleCalcStyle.css";

function SimpleCalc() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const dispaly = (value) => {
    setInput((prev) => prev + value);
  };

  const clearDisplay = () => {
    setInput("");
    setResult("");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    const evaluated = eval(input);
    setInput(String(evaluated));
  };
  return (
    <>
      <div>
        <h2>Calculator</h2>

        <input type="text" id="display" value={input} />

        <br />

        <button
          onClick={() => {
            dispaly("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            dispaly("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            dispaly("3");
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            dispaly("+");
          }}
        >
          +
        </button>

        <br />

        <button
          onClick={() => {
            dispaly("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            dispaly("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            dispaly("6");
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            dispaly("-");
          }}
        >
          -
        </button>

        <br />

        <button
          onClick={() => {
            dispaly("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            dispaly("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            dispaly("9");
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            dispaly("*");
          }}
        >
          *
        </button>

        <br />

        <button
          onClick={() => {
            dispaly("0");
          }}
        >
          0
        </button>
        <button onClick={calculate}>=</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={backspace}>--</button>
      </div>
    </>
  );
}

export default SimpleCalc;
