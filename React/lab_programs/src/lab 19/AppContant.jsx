import React, { useState } from "react";
import Login from "./Login";
import Deshboard from "./Deshboard";

function AppContant() {
  const [curruntUser, setcurruntUser] = useState(null);
  const handleLogin = (user) => {
    setcurruntUser(user);
    console.log(user);
  };
  const handleLogout = () => {
    setcurruntUser(null);
  };
  return (
    <div>
      {curruntUser ? (
        <Deshboard curruntUser={curruntUser} handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default AppContant;
