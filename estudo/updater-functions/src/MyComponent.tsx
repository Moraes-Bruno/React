//updater function = uma função passada como argumento para o setState()
// permite updates mais seguros baseados no estado anterior

import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const reiniciar = () => {
    setCount(0);
  };

  const decrementar = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  return (
    <div className="container">
      <p className="count">{count}</p>

      <div className="buttons">
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    </div>
  );
}

export default MyComponent;
