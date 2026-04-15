import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleNameChange}/>
      <p>{name}</p>
    </>
  )
}

export default OnChange;