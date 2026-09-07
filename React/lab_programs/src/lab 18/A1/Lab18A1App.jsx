import React, { useState } from "react";
import A from "./A";

function Lab18A1App() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Demonstrate Property Drilling in ReactJS </h1>
      <A name={name} setName={setName} />
    </>
  );
}

export default Lab18A1App;
