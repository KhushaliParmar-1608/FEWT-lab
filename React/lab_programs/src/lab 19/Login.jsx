import React, { useState } from "react";

function Login({ handleLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "1234") {
      handleLogin(user);
      alert("login sucessfully!!");
    } else {
      alert("please retry");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label>Password : </label>
        <input
          type="text"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
