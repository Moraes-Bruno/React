import { useState, useEffect } from "react";

function MyComponent() {

  const [count, setCount] = useState(0);
  const [color,setColor] = useState("green")

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  },[count,color])


  function addCount() {
    setCount((c) => c + 1);
  }

  function subCount(){
    setCount((c) => c -1)
  }

  function changeColor(){
    setColor(c => c === "green" ? "red" : "green")
  }

  return (
    <>
      <p style={{color: color}}>Contagem: {count}</p>
      <button onClick={addCount}>Adicionar</button>
      <button onClick={subCount}>Subtrair</button>
      <br />
      <button onClick={changeColor}>Mudar Cor</button>
    </>
  );
}

export default MyComponent;
