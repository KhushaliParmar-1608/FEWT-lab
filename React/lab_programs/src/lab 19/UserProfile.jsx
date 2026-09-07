import React from "react";

function UserProfile({ curruntUser, handleLogout }) {
  return (
    <div>
      <h2>UserName : {curruntUser}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
