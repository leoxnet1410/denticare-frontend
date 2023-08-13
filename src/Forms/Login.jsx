
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
    <div className="formu">
      <Row className="formulario">
        <Col xs={10} sm={8} md={6}>
          <h2>Denticare</h2>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="usuario">
              <Form.Label>Usuario:</Form.Label>
              <FormControl
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="contrasena">
              <Form.Label>Contraseña:</Form.Label>
              <FormControl
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>

            <p className="forgot-password">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};































