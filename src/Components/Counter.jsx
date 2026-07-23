import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleCount}>+</button>
    </div>
  );
};
