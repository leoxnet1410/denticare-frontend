
import React, { useState } from 'react';
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';

export const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);
  };

  return (
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
  <h2 className="text-center mb-4 text-white">Denticare</h2>


        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="usuario">
          <Form.Label className="text-white">Usuario:</Form.Label>
            <FormControl
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="contrasena">
          <Form.Label className="text-white">Contraseña:</Form.Label>
            <FormControl
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Iniciar Sesión
          </Button>

          <p className="text-center mt-3">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
        </Form>
      </Col>
    </Row>
  );
};































