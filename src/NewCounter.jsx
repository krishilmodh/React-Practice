import React, { useState } from "react";

const NewCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default NewCounter;