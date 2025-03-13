function Student({name="Convidado",age=0,isStudent=false}){
    return(
        <div className="student">
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Estudante: {isStudent ? "Sim" : "Não"}</p>
        </div>
    )

}

export default Student