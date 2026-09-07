import React, { useState } from "react";
import A from "./A";

function Lab18B2App() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Demonstrate Property Drilling in ReactJS </h1>
      <A name={name} setName={setName} />
    </>
  );
}

export default Lab18B2App;
