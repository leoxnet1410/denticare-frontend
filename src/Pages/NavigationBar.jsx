import { Link } from 'react-router-dom';
import { PaymentForm } from './payments/Form';

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="encabezado" href="#">
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
            <li className="welcome">
              <Link className="nav-link " to="/">
                Inicio
              </Link>
            </li>
            <li className="pacientes">
              <Link className="nav-link " to="/patients">
                Pacientes
              </Link>
            </li>
            <li className="pacientes">
              <Link className="nav-link " to="/appointments">
                Citas
              </Link>
            </li>
            <li className="pacientes">
              <Link className="nav-link " to="/billing">
                Facturacion
              </Link>
            </li>
            <li className="login">
              <Link className="nav-link " to="Login">
                Login
              </Link>
            </li>
            <li >
              <PaymentForm />

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};