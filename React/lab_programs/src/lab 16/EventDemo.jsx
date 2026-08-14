import React from "react";

function EventDemo() {
  return (
    <>
      <button
        onClick={() => {
          alert("Button is Clicked");
        }}
      >
        Button Click
      </button>

      <button
        onMouseMove={() => {
          alert("Mouse is Moved");
        }}
      >
        Mouse Move
      </button>

      <button
        onMouseDown={() => {
          alert("Mouse is Down");
        }}
      >
        Mouse Down
      </button>

      <button
        onMouseLeave={() => {
          alert("Mouse is Leaved");
        }}
      >
        Mouse Leave
      </button>
    </>
  );
}

export default EventDemo;
