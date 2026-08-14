import React from "react";

function MapDemo() {
  const student = ["Khushali", "Riya", "Priyal", "Riva"];
  return (
    <>
      <ul>
        {student.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </>
  );
}

export default MapDemo;
