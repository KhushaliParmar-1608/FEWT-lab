import React from "react";
import UserProfile from "./UserProfile";

function Deshboard({ curruntUser, handleLogout }) {
  return (
    <div>
      <UserProfile curruntUser={curruntUser} handleLogout={handleLogout} />
    </div>
  );
}

export default Deshboard;
