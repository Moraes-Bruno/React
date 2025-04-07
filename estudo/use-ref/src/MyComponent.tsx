import { useEffect,useRef } from "react"

function MyComponent(){

    let ref = useRef(0);

    useEffect(() => {
        console.log("Componente renderizado")
    })

    function handleClick(){{
        ref.current = ref.current+1;
        console.log(ref.current)
    }}


    return(
        <button onClick={handleClick}>
            Clique Aqui
        </button>
    )
}

export default MyComponent