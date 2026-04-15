import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;