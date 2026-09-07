import React from "react";
import C from "./C";

function B(props) {
  return (
    <>
      <button
        onClick={() => {
          props.setName(props.input);
        }}
      >
        Click
      </button>
      <C name={props.name} />
    </>
  );
}

export default B;
