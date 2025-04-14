import { useNavigate } from "react-router-dom";

function Contacts(){

    const navigate = useNavigate();

    return(
        <div>
            <h1>Esta é a Pagina de Contato</h1>

            <div className="contact-buttons">
                <button onClick={() => navigate('info') }>Informações de Contato</button>
                <button onClick={() => navigate('form') }>Formulario</button>
            </div>
        </div>
    );
}

export default Contacts