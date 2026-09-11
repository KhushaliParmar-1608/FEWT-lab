import React, { useState } from "react";
import "./StudentsCRUDStyle.css";

function StudentsCRUD() {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({
    EnrollmentNo: "",
    Fname: "",
    Lname: "",
    Department: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handalAdd = () => {
    if (
      !student.EnrollmentNo ||
      !student.Fname ||
      !student.Lname ||
      !student.Department
    ) {
      alert("Plase Enter information first");
      return;
    } else {
      setStudentList([...studentList, { ...student }]);
      setStudent({
        EnrollmentNo: "",
        Fname: "",
        Lname: "",
        Department: "",
      });
    }
  };

  const handalDelete = (index) => {
    const newList = [...studentList];
    newList.splice(index, 1);
    setStudentList(newList);
  };

  const handalEdit = (index) => {
    setStudent({
      ...studentList[index],
    });

    setEditIndex(index);
  };

  const handalUpdate = () => {
    const updateList = [...studentList];

    updateList[editIndex] = { ...student };

    setStudentList(updateList);

    setEditIndex(null);

    setStudent({
      EnrollmentNo: "",
      Fname: "",
      Lname: "",
      Department: "",
    });
  };

  return (
    <>
      <label>Enrollment No.</label>
      <input
        type="text"
        value={student.EnrollmentNo}
        onChange={(e) => {
          setStudent({ ...student, EnrollmentNo: e.target.value });
        }}
      />
      <br />
      <br />

      <label>Frist Name </label>
      <input
        type="text"
        value={student.Fname}
        onChange={(e) => {
          setStudent({ ...student, Fname: e.target.value });
        }}
      />
      <br />
      <br />

      <label>Last Name </label>
      <input
        type="text"
        value={student.Lname}
        onChange={(e) => {
          setStudent({ ...student, Lname: e.target.value });
        }}
      />
      <br />
      <br />

      <label>Department </label>
      <input
        type="text"
        value={student.Department}
        onChange={(e) => {
          setStudent({ ...student, Department: e.target.value });
        }}
      />
      <br />
      <br />

      <button onClick={handalAdd}>Add</button>
      <button onClick={handalUpdate}>Update</button>
      <br />

      <table border={2}>
        <thead>
          <tr>
            <th>Series No.</th>
            <th>Enrollment No .</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((student, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.EnrollmentNo}</td>
                <td>{student.Fname}</td>
                <td>{student.Lname}</td>
                <td>{student.Department}</td>

                <td>
                  <button
                    onClick={() => {
                      handalEdit(index);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      handalDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default StudentsCRUD;
