import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { apiClient } from '../api/apiClient';



export const CrearUsuario = () => {
  const crearPaciente=()=>{
    apiClient.patients.create
  }
  const [first_name,setFirstName]=useState("")
  const [last_name,setLastName]=useState("")
  const [birth_date,setBirthDate]=useState("")
  const [phone,setPhone]=useState("")
  const [gender,setGender]=useState("")
  const [ci,setCi]=useState("")
  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
        <h3 className="text-center mb-4 text-white">Crear Usuario</h3>
        <Form>
          <Form.Group>
            <Form.Label className="text-white">Nombre:</Form.Label>
            <Form.Control type="text" id="nombre" value={first_name} onChange={(ev) => setFirstName(ev.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Apellido:</Form.Label>
            <Form.Control type="text" id="apellido"value={last_name} onChange={(ev) => setLastName(ev.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Fecha de Nacimiento:</Form.Label>
            <Form.Control type="date" id="fechaNacimiento"value={birth_date} onChange={(ev) =>setBirthDate(ev.target.value)} required />
          </Form.Group>
          
          <Form.Group>
            <Form.Label className="text-white">Cedula de Identidad:</Form.Label>
            <Form.Control type="text" id="cedula"value={ci} onChange={(ev) =>setCi(ev.target.value)}  required />
          </Form.Group>
          <Form.Group>
             <Form.Label className="text-white">Género:</Form.Label>
                 <Form.Select value={gender} onChange={(ev) => setGender(ev.target.value)} required>
                    <option value="">Selecciona un género</option>
                 <option value="masculino">Masculino</option>
                 <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                     </Form.Select>
                     </Form.Group>
          <Form.Group>
            <Form.Label className="text-white">Número de Teléfono:</Form.Label>
            <Form.Control type="tel" id="telefono" value={phone} onChange={(ev) => setPhone(ev.target.value)}  required />
          </Form.Group>
          <Button  variant="primary" type="submit" className="w-100 mt-3">
            Crear Usuario
          </Button>
        </Form>
      </Col>
    </Row>
  );
};