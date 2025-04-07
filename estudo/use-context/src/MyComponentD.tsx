import { useContext } from "react";
import { UserContext } from "./MyComponent";

function MyComponentD(){

    const user = useContext(UserContext)

    return(
        <>
            <div className="box">
                <h1>Componente D</h1>
                <h2>{`Adeus ${user}`}</h2>
            </div>
        </>
    );
}

export default MyComponentD