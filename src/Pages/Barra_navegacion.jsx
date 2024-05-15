import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth} from '@fortawesome/free-solid-svg-icons';


const linkStyle = {
  textDecoration: 'none', 
};

export const Barra_navegacion = () => {
  return (
    <nav class="navbar navbar-expand-lg  bg-white">
      <div className="container">
        <span className="encabezado" >
          Denticare <FontAwesomeIcon icon={faTooth} />
        </span>
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
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item tratamientos">
              <Link className="nav-link" to="/tratamientos">
               Tratamientos
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="table_usuarios">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="table_pacientes">
                pacientes
              </Link>
            </li>
            <li className="nav-item perfil">
              <Link className="nav-link" to="/Perfil">
                Perfil
              </Link>
            </li>
            <li className="nav-item perfil">
              <Link className="nav-link" to="/forms_create">
               Agenda
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
             
=======
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
                    <Link style={linkStyle} to="Forms_create">
                      Crear Usuario
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
>>>>>>> 5dccfb3ce6f2766d32f3240f5e8c3e839cf6f09c
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};