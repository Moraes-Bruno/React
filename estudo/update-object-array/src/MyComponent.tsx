import { useState } from "react";

function MyComponent() {
  interface Car {
    year: number;
    make: string;
    model: string;
  }

  const [cars, setCars] = useState<Car[]>([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index: number) {
    setCars(c => c.filter((_,i) => i !== index))
  }

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarYear(Number(event.target.value));
  }

  function handleMakeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>Lista de Carros</h2>

      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Marca do Carro"
      />
      <br />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Modelo do Carro"
      />
      <br />
      <br />

      <button onClick={handleAddCar}>Adicionar Carro</button>
      <br />
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {" "}
            {car.make} {car.model} {car.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
