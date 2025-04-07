import { useState, createContext } from "react";
import MyComponentB from "./MyComponentB";

export const UserContext = createContext("Desconhecido");

function MyComponent(){

    const [user,setUser] = useState("John Doe");

    return(
        <>
            <div className="box">
                <h1>Componente A</h1>
                <h2>{`Olá ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <MyComponentB></MyComponentB>
                </UserContext.Provider>
    
            </div>
        </>
    );
}

export default MyComponent