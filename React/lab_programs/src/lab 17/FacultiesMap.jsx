import React from "react";

function FacultiesMap() {
  const faculties = [
    {
      id: 1,
      name: "Dr. Rajesh Patel",
      subject: "Computer Science",
      qualification: "Ph.D.",
      experience: 12,
      email: "rajesh.patel@example.com",
    },
    {
      id: 2,
      name: "Prof. Priya Shah",
      subject: "Information Technology",
      qualification: "M.Tech",
      experience: 8,
      email: "priya.shah@example.com",
    },
    {
      id: 3,
      name: "Dr. Amit Mehta",
      subject: "Database Management",
      qualification: "Ph.D.",
      experience: 10,
      email: "amit.mehta@example.com",
    },
    {
      id: 4,
      name: "Prof. Neha Joshi",
      subject: "Web Development",
      qualification: "MCA",
      experience: 7,
      email: "neha.joshi@example.com",
    },
    {
      id: 5,
      name: "Dr. Karan Desai",
      subject: "Software Engineering",
      qualification: "Ph.D.",
      experience: 15,
      email: "karan.desai@example.com",
    },
  ];
  return (
    <>
      <table border={2} width={900}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {faculties.length > 0 ? (
            faculties.map((f) => (
              <tr>
                <td>{f.id}</td>
                <td>{f.name}</td>
                <td>{f.subject}</td>
                <td>{f.qualification}</td>
                <td>{f.experience}</td>
                <td>{f.email}</td>
              </tr>
            ))
          ) : (
            <h1>Here No any data </h1>
          )}
        </tbody>
      </table>
    </>
  );
}

export default FacultiesMap;
