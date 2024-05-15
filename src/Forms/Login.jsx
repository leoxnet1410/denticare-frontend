import React, { useState } from 'react';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className={`auth-container ${isActive ? 'active' : ''}`} id="auth-container">
        <div className="form-container sign-up">
          <form>
            <h1>Crea una cuenta</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span> Usa tu correo electrónico para registrarte</span>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>
            Denticare<FontAwesomeIcon icon={faTooth} className="rotating-icon" /> 
            </h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>o usa tu correo electrónico y contraseña</span>
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button>Iniciar sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>¡Bienvenido de nuevo!</h1>
              <p>Ingresa tus datos personales para usar todas las funciones del sitio</p>
              <button className="hidden" onClick={() => setIsActive(false)}>Iniciar sesión</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Bienvenido</h1>
              <p>Regístrate con tus datos personales</p>
              <button className="hidden" onClick={() => setIsActive(true)}>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
=======
import { Button, Col, Form, FormControl, Row, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

// Componente para el formulario de inicio de sesión
export const LoginForm = () => {
  const [usuario, setUsuario] = useState(''); // Estado para almacenar el nombre de usuario
  const [contrasena, setContrasena] = useState(''); // Estado para almacenar la contraseña
  const [errorUsuario, setErrorUsuario] = useState(''); // Estado para manejar errores en el campo de usuario
  const [errorContrasena, setErrorContrasena] = useState(''); // Estado para manejar errores en el campo de contraseña

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de usuario y contraseña
    if (!usuario) {
      setErrorUsuario('El campo Usuario es obligatorio');
    } else {
      setErrorUsuario('');
    }

    if (!contrasena) {
      setErrorContrasena('El campo Contraseña es obligatorio');
    } else {
      setErrorContrasena('');
    }

    // Si no hay errores, puedes continuar con el inicio de sesión
    if (usuario && contrasena) {
      console.log('Usuario:', usuario);
      console.log('Contraseña:', contrasena);
    }
  };

  return (
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
        <h2 className="text-center mb-4 text-white">Denticare <FontAwesomeIcon icon={faTooth} /></h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="usuario">
            <Form.Label className="text-white">Usuario:</Form.Label>
            <FormControl
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            {errorUsuario && <Alert variant="danger">{errorUsuario}</Alert>}
          </Form.Group>

          <Form.Group controlId="contrasena">
            <Form.Label className="text-white">Contraseña:</Form.Label>
            <FormControl
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
            {errorContrasena && <Alert variant="danger">{errorContrasena}</Alert>}
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Iniciar Sesión
          </Button>

          <p className="text-center mt-3">
            <Link to="#" style={{ textDecoration: 'none', color: 'white' }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <p className="text-center mt-3">
            <Link to="forms_create" style={{ textDecoration: 'none', color: 'white' }}>
              Crear Usuario
            </Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};
>>>>>>> 5dccfb3ce6f2766d32f3240f5e8c3e839cf6f09c
