import Navbar from './Navbar';
import './App.css';
import React from 'react';

function App() {
  
  
  const App = () => {
    return (
      <div>
        <Navbar />
        {<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Mi Sitio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>}
      </div>
    );
  };
  
  
 
  
}

import CrearPaciente from './CrearPaciente';

const App = () => {
  return (
    <div className="container">
      <h1>Formulario para crear paciente</h1>
      <CrearPaciente />
    </div>
  );
};

export default App;


