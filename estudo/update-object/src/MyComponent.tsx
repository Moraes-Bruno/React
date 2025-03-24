import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 1988,
    make: "Chevrolet",
    model: "Chevette",
  });

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCar((c) => ({ ...c, year: Number(event.target.value) }));
  }

  function handleMakeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Seu carro é: {car.make} {car.model} {car.year} 
      </p>

      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
        <br /><br />
      <input type="number" value={car.year} onChange={handleYearChange} />
    </div>
  );
}

export default MyComponent;
