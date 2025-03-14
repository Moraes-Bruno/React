import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Convidado");
  const [age, setAge] = useState(0);
  const [employed, setEmployed] = useState(false);

  const updateName = () => {
    setName("Jane Doe");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateEmployed = () =>{
    setEmployed(true)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Atualizar Nome</button>

      <p>Idade: {age}</p>
      <button onClick={updateAge}>Atualizar Idade</button>

      <p>Empregado: {employed ? "Sim" : "Não"}</p>
      <button onClick={updateEmployed}>Atualizar Status</button>
    </div>
  );
}

export default MyComponent;
