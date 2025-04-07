import MyComponentC from "./MyComponentC";

function MyComponentB(){
    return(
        <>
            <div className="box">
                <h1>Componente B</h1>
                <MyComponentC></MyComponentC>
            </div>
        </>
    );
}

export default MyComponentB