import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const linkStyle = {
  textDecoration: 'none', // Aplica el estilo de "text-decoration: none"
  color: 'white'
};

export const BarraNavegacion = () => {
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
            <li className="nav-item welcome">
              <Link className="nav-link" to="welcome">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="table_usuarios">
                Usuarios
              </Link>
            </li>
            <li className="nav-item perfil">
              <Link className="nav-link" to="/Perfil">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="dark  " id="dropdown-basic">
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu className='citas'>
                  <Dropdown.Item>
                    <Link  style={linkStyle} to="Login">
                       Iniciar sesión
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link style={linkStyle} to="Crear_usuario">
                      Crear Usuario
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};