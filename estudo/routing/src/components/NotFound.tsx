import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 | Pagina não encontrada </h2>
      <br />
      <button onClick={() => navigate("/")}>
        Retornar para a pagina Inicial
      </button>
    </div>
  );
}

export default NotFound;
