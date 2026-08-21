import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [Second, setSecond] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSecond(Second + 1);
    }, 1000);
  }, [Second]);
  return (
    <>
      <h1>Second={Second}</h1>
    </>
  );
}

export default UseEffectDemo;
