
import React from 'react';
import ReactDOM from 'react-dom/client';
import CrearPaciente from './CrearPaciente';
import './estilos.css';
// Definir el componente Navbar fuera de ReactDOM.createRoot
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src="Denticare-frontend/react/img/546.png"
               width="30"
                height="30"
                className="d-inline-block align-top"/>Denticare</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="inicio">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="pacientes">
              <a className="nav-link" href="#">Pacientes</a>
            </li>
            <li className="usuarios">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="login">
              <a className="nav-link" href="CrearPaciente.js">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



const App = () => {
  return (
    <div className="container">
      <h1>Formulario para crear paciente</h1>
      <CrearPaciente />
    </div>
  );
};

export default App;
// Renderizar el componente Navbar dentro de ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Navbar />);


