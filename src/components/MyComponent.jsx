import React, { use, useState } from "react";

function MyComponent(){
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState("0");

  const updateName = () => {
    setName("SpongeBob")
  }
  const updateAge = () => {
    setAge("23")
  }

  const updateAll = () => {
    updateName()
    updateAge()
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateAll}>Set Name</button>
    </div>
  );
}

export default MyComponent;