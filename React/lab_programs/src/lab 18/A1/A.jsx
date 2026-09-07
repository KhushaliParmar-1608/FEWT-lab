import React from "react";
import B from "./B";

function A(props) {
  return (
    <>
      <B name={props.name} setName={props.setName} />
    </>
  );
}

export default A;
