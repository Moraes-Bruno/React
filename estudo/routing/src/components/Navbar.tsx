import logo from "../assets/logoipsum-369.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logotipo da empresa" width="200px" />
      <ul className="nav-bar-links">
        <Link to="/"><li>Inicio</li></Link>
        <Link to='/products'><li>Produtos</li></Link>
        <Link to='/about'><li>Sobre</li></Link>
        <Link to='/contacts'><li>Contatos</li></Link>
      </ul>
      <button>Fazer Login</button>
    </div>
  );
}

export default NavBar;
