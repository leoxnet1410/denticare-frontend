import React, { useState } from 'react';
import { Button, Col, Form, FormControl, Row, Alert } from 'react-bootstrap';

// Componente para crear un nuevo usuario
export const Forms_create = () => {
  const [nombre, setNombre] = useState(''); // Estado para almacenar el nombre del usuario
  const [apellido, setApellido] = useState(''); // Estado para almacenar el apellido del usuario
  const [fechaNacimiento, setFechaNacimiento] = useState(''); // Estado para almacenar la fecha de nacimiento del usuario
  const [correoElectronico, setCorreoElectronico] = useState(''); // Estado para almacenar el correo electrónico del usuario
  const [contrasena, setContrasena] = useState(''); // Estado para almacenar la contraseña del usuario

  // Estados para manejar errores en los campos
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorFechaNacimiento, setErrorFechaNacimiento] = useState('');
  const [errorCorreoElectronico, setErrorCorreoElectronico] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');

  // Función para manejar el envío del formulario de creación de usuarios
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (!nombre) {
      setErrorNombre('El campo Nombre es obligatorio');
    } else {
      setErrorNombre('');
    }

    if (!apellido) {
      setErrorApellido('El campo Apellido es obligatorio');
    } else {
      setErrorApellido('');
    }

    if (!fechaNacimiento) {
      setErrorFechaNacimiento('El campo Fecha de Nacimiento es obligatorio');
    } else {
      setErrorFechaNacimiento('');
    }

    if (!correoElectronico) {
      setErrorCorreoElectronico('El campo Correo Electrónico es obligatorio');
    } else {
      setErrorCorreoElectronico('');
    }

    if (!contrasena) {
      setErrorContrasena('El campo Contraseña es obligatorio');
    } else {
      setErrorContrasena('');
    }

    // Si no hay errores, puedes continuar con la creación del usuario
    if (nombre && apellido && fechaNacimiento && correoElectronico && contrasena) {
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Fecha de Nacimiento:', fechaNacimiento);
      console.log('Correo Electrónico:', correoElectronico);
      console.log('Contraseña:', contrasena);
    }
  };

  return (
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
        <h2 className="text-center mb-4 text-white">Crear Usuario</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label className="text-white">Nombre:</Form.Label>
            <FormControl
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            {errorNombre && <Alert variant="danger">{errorNombre}</Alert>}
          </Form.Group>

          <Form.Group controlId="apellido">
            <Form.Label className="text-white">Apellido:</Form.Label>
            <FormControl
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
            {errorApellido && <Alert variant="danger">{errorApellido}</Alert>}
          </Form.Group>

          <Form.Group controlId="fechaNacimiento">
            <Form.Label className="text-white">Fecha de Nacimiento:</Form.Label>
            <FormControl
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
            {errorFechaNacimiento && <Alert variant="danger">{errorFechaNacimiento}</Alert>}
          </Form.Group>

          <Form.Group controlId="correoElectronico">
            <Form.Label className="text-white">Correo Electrónico:</Form.Label>
            <FormControl
              type="email"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              required
            />
            {errorCorreoElectronico && <Alert variant="danger">{errorCorreoElectronico}</Alert>}
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
            Crear Usuario
          </Button>
        </Form>
      </Col>
    </Row>
  );
};