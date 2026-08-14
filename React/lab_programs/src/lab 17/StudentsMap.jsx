import React from "react";

function StudentsMap() {
  const students = [
    {
      id: 1,
      name: "Aarav Patel",
      age: 18,
      course: "BCA",
      city: "Rajkot",
      marks: 85,
    },
    {
      id: 2,
      name: "Riya Sharma",
      age: 19,
      course: "BSc IT",
      city: "Ahmedabad",
      marks: 92,
    },
    {
      id: 3,
      name: "Yash Mehta",
      age: 18,
      course: "BCA",
      city: "Surat",
      marks: 78,
    },
    {
      id: 4,
      name: "Diya Shah",
      age: 20,
      course: "B.Tech",
      city: "Vadodara",
      marks: 88,
    },
    {
      id: 5,
      name: "Krish Patel",
      age: 19,
      course: "BCA",
      city: "Rajkot",
      marks: 74,
    },
    {
      id: 6,
      name: "Anaya Joshi",
      age: 18,
      course: "BSc CS",
      city: "Bhavnagar",
      marks: 95,
    },
    {
      id: 7,
      name: "Vivaan Desai",
      age: 20,
      course: "B.Tech",
      city: "Ahmedabad",
      marks: 81,
    },
  ];

  return (
    <>
      <table border={2} width={500}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>City</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.course}</td>
                <td>{s.city}</td>
                <td>{s.marks}</td>
              </tr>
            ))
          ) : (
            <h1>No student data ....</h1>
          )}
        </tbody>
      </table>
    </>
  );
}

export default StudentsMap;
