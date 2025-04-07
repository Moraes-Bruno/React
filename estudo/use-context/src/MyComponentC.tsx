import { useContext } from "react";
import { UserContext } from "./MyComponent";
import MyComponentD from "./MyComponentD";

function MyComponentC(){

    const user = useContext(UserContext);

    return(
        <>
            <div className="box">
                <h1>Componente C</h1>
                <h2>{`Ola denovo ${user}`}</h2>
                <MyComponentD></MyComponentD>
            </div>
        </>
    );
}

export default MyComponentC