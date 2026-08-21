import React, { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [HideShow, setHideShow] = useState(true);
  return (
    <>
      <h1>Count Demo</h1>
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br />
      <br />
      <br />

      <h1>String Demo</h1>
      <h1>Name={name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br />
      <br />
      <br />

      <h1>Hide Show Demo</h1>
      <button
        onClick={() => {
          setHideShow(!HideShow);
        }}
      >
        Hide/show
      </button>

      {HideShow && <h1>Khushali</h1>}
    </>
  );
}

export default UseStateDemo;
