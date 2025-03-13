function Food(){

    const food1 = "Laranja"
    const food2 = "Banana"

    return(
        <ul>
            <li>Maçã</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
            <li>Abacaxi</li>
        </ul>
    );
}

export default Food