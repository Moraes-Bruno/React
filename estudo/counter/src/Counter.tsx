import { useState } from "react";

function Counter(){


    const [count,setCount] = useState(0)

    const incrementar = () =>{
        setCount(count+1)
    }

    const reiniciar = () =>{
        setCount(0)
    }

    const decrementar = () =>{
        setCount(count-1)
    }

    return(
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

export default Counter