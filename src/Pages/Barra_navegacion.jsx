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
        <span  >
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
              <Link className="nav-link" to="/tareas">
               Agenda
              </Link>
            </li>
            <li className="nav-item">


              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};