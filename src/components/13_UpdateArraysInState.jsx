import { useState } from "react";

function UpdateArraysInState() {
  const [fruits, setFruits] = useState(["apple"])

  function handleAddFood() {
    setFruits([...fruits, document.getElementById("foodInput").value]);
    document.getElementById("foodInput").value = "";
  }

  return (
    <>
      <ol>
        {fruits.map((fruit, index) => <li key="index">{fruit}</li>)}
      </ol>
      <input type="text" id="foodInput" placeholder="Enter fruit name" /><br />
      <button onClick={handleAddFood}>Add fruit</button>
    </>
  );
}

export default UpdateArraysInState;