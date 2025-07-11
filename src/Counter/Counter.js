import React, { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);

  const Increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const Decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      {Count < 0 ? <p>0</p> : <p>{Count}</p>}

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default Counter;
