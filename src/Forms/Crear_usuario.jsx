
import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'; 

const url = "http://localhost:3200"; 

export const Crear_usuario = () => {
  const [show, setShow] = useState(false);
  const [ci, setCi] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url + '/patients', {
        ci,
        first_name,
        last_name,
        birth_date,
        gender,
        phone,
      });

      console.log('Respuesta del servidor:', response.data);
      setShow(false); 
    } catch (error) {
      console.error('Error al crear un paciente:', error);
      
    }
  };

  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
        <h3 className="text-center mb-4 text-white">Crear Usuario</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="text-white">CI:</Form.Label>
            <Form.Control type="text" id="ci" value={ci} onChange={(e) => setCi(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Nombre:</Form.Label>
            <Form.Control type="text" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Apellido:</Form.Label>
            <Form.Control type="text" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Fecha de Nacimiento:</Form.Label>
            <Form.Control type="date" id="birth_date" value={birth_date} onChange={(e) => setBirthDate(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Genero:</Form.Label>
            <Form.Control as="select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Telefono:</Form.Label>
            <Form.Control type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Crear usuario
          </Button>
        </Form>
      </Col>
    </Row>
  );
};