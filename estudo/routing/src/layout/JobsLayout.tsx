import { Outlet } from "react-router-dom"

function JobsLayout(){
    return(
        <div>
            <h2>Vagas</h2>

            <p>Lista de vagas de emprego disponiveis.</p>
            <Outlet/>
        </div>
    )
}

export default JobsLayout