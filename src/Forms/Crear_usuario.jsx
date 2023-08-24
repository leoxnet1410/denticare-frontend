import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

export const Crear_usuario = () => {
  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
        <h3 className="text-center mb-4 text-white">Crear Usuario</h3>
        <Form>
          <Form.Group>
            <Form.Label className="text-white">Nombre:</Form.Label>
            <Form.Control type="text" id="nombre" name="nombre" required />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Apellido:</Form.Label>
            <Form.Control type="text" id="apellido" name="apellido" required />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Fecha de Nacimiento:</Form.Label>
            <Form.Control type="date" id="fechaNacimiento" name="fechaNacimiento" required />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Correo Electrónico:</Form.Label>
            <Form.Control type="email" id="correo" name="correo" required />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Número de Teléfono:</Form.Label>
            <Form.Control type="tel" id="telefono" name="telefono" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Crear Usuario
          </Button>
        </Form>
      </Col>
    </Row>
  );
};