import React from "react";
function IfElse() {
  const isLoggedIn = true;
  let message;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

function TernaryOperator() {
  return (
    <>
      {(() => {
        let recomendation = ["movie1", "movie2", "movie3"];
        return recomendation.length > 0
          ? "You have many recomendations"
          : "You have no recomendations";
      })()}
    </>
  );
}

function AndOperator() {
  const isLoggedIn = true;
  return <>{isLoggedIn && <h1>Welcome back!</h1>}</>;
}

function Conditional_Rendring() {
  return (
    <>
      {/* <IfElse /> */}
      {/* <TernaryOperator /> */}
      <AndOperator />
    </>
  );
}
export default Conditional_Rendring;
