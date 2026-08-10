import React from "react";

// function Student(props) {
//   return (
//     <>
//       <h1>Student Details</h1>
//       <h3>Name: {props.name}</h3>
//       <h3>Age: {props.age}</h3>
//     </>
//   );
// }

function Student({ name, age }) {
  return (
    <>
      <h1>Student Details</h1>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
    </>
  );
}

function Props() {
  return (
    <>
      <Student name="Khushali" age="18" />
      <Student name="Kiyara" age="19" />
    </>
  );
}

export default Props;
