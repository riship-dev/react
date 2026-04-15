/* 
updater function:
a function passed as an argument to setState() usually
ex. setYear(arrow function)
allow for safe updates based on previous state
used with multiple state updates and asynchronous functions
good practice to use updater functions
takes the PENDING state to calculate the NEXT state
React puts your updater function in a queue (waiting in line)
during the next render, it will call them in same order

setState:
uses the CURRENT state to calculate the NEXT state
set functions do not trigger an update
React batches together state updates for performance reasons
NEXT state becomes the current state after an update
*/

import { useState } from "react";

function UpdaterFunctions() {
  const [count, setCount] = useState(0);

  function increment() {
    // setState without updater function; update only once
    //setCount(count + 1)
    //setCount(count + 1)
    
    // count incremented 2 times
    setCount(prevCount => prevCount + 1); // updater function passed as argument
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}> INCREMENT </button>
    </>
  );
}

export default UpdaterFunctions;