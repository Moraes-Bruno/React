import { useState, useEffect } from "react";

function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize)

        return () =>{
            window.removeEventListener("resize",handleResize)
            console.log("event listener removido")
        }
    },[])

    useEffect(() =>{
        document.title = `tamanho: ${width} X ${height}`
    },[width,height])

  function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      <p>Largura de Janela: {width}px</p>
      <p>Altura da janela:  {height}px</p>
    </>
  );
}

export default MyComponent2;
