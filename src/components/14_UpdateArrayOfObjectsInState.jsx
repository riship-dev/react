import { useState } from "react";

function UpdateArrayOfObjectsInState() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function handleYearChange(event) {
    setYear(prevYear => prevYear = event.target.value);
  }
  function handleMakeChange(event) {
    setMake(prevMake => prevMake = event.target.value);
  }
  function handleModelChange(event) {
    setModel(prevModel => prevModel = event.target.value);
  }

  function addCar() {
    const newCar = {
      year: year,
      make: make,
      model: model
    };
    setCars(prevCars => prevCars = [...prevCars, newCar]);
    
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  return (
    <>
      <ol>
        {cars.map((car, index) => 
          <li key={index}>
            {car.year} {car.make} {car.model}
          </li>
        )}
      </ol>

      <input id="yearInput" type="number" value={year} onChange={handleYearChange} /><br /><br />
      <input id="makeInput" type="text" placeholder="Enter car make" onChange={handleMakeChange} /><br /><br />
      <input id="modelInput" type="text" placeholder="Enter car model" onChange={handleModelChange} /><br /><br />
      <button onClick={addCar}>Add Car</button>
    </>
  )
}

export default UpdateArrayOfObjectsInState;