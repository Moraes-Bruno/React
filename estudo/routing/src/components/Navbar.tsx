//navLink possui o status da pagina(ativa ou não)

import logo from "../assets/logoipsum-369.png";
import { NavLink,useNavigate } from "react-router-dom";

function NavBar() {

  const navigate = useNavigate()

  return (
    <div className="nav-bar">
      <img src={logo} alt="logotipo da empresa" width="200px" />
      <ul className="nav-bar-links">
        <NavLink to="/"><li>Inicio</li></NavLink>
        <NavLink to='/products'><li>Produtos</li></NavLink>
        <NavLink to='/about'><li>Sobre</li></NavLink>
        <NavLink to='/contacts'><li>Contato</li></NavLink>
      </ul>
      <button onClick={() => navigate('/about')}>Fazer Login</button>
    </div>
  );
}

export default NavBar;
