import { useState } from "react";

function MyComponent(){

    const [foods,setFoods] = useState(["Maça","Laranja","Banana"])

    function handleAddFood() {
        const newFood = (document.getElementById("foodInput") as HTMLInputElement)?.value;

        (document.getElementById("foodInput") as HTMLInputElement).value = "";

        setFoods((f) => [...f,newFood])
    }
    

    function handleRemoveFood(index: number){
        setFoods(foods.filter((_,i) => i !== index))
    }

    return(<>
    <div>
        <h2>Comidas</h2>
        <ul>
            {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Digite o nome da Comida"/>

        <button onClick={handleAddFood}>Adicionar Comida</button>
        </div></>);
}

export default MyComponent