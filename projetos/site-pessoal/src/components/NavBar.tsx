import { NavLink } from "react-router-dom";

//implementar sistema de troca de temas (claro/escuro)

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <span>Bruno Silva</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="#" className="nav-link activate" aria-current="page">
                <span>Perfil</span>
              </NavLink>

              <NavLink to="#" className="nav-link activate" aria-current="page">
                <span>Projetos</span>
              </NavLink>

              <button id="modo-btn" className="btn btn-outline-light">
                Alternar Modo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
