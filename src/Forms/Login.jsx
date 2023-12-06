
import React, { useState } from 'react';
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