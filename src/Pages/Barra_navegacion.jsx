import { Link } from 'react-router-dom';

export const Barra_navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="encabezado " href="#">
          Denticare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item welcome">
              <Link className="nav-link" to="welcome">
                Inicio
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="table_usuarios">
              Usuario
              </Link>
              
            

              
            </li>
            <li className="nav-item pacientes">
              <Link className="nav-link" to="/table_pacientes">
                Pacientes
              </Link>
            </li>
            <li className="nav-item login">
              <Link className="nav-link" to="Login">
                Iniciar sesion
              </Link>
            </li>
            <li className="nav-item Crearusuario">
              <Link className="nav-link" to="Crear_usuario">
                Crear Usuario
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};