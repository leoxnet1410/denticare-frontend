
import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from 'axios';

const url = "http://localhost:3200";

// Componente para crear un nuevo paciente
export const Crear_paciente = ({ cargarPacientes }) => {
  const [show, setShow] = useState(false); // Estado para mostrar/ocultar el modal de creación de pacientes
  const [ci, setCi] = useState(""); // Estado para almacenar la cédula de identidad del paciente
  const [first_name, setFirstName] = useState(""); // Estado para almacenar el nombre del paciente
  const [last_name, setLastName] = useState(""); // Estado para almacenar el apellido del paciente
  const [birth_date, setBirthDate] = useState(""); // Estado para almacenar la fecha de nacimiento del paciente
  const [gender, setGender] = useState(""); // Estado para almacenar el género del paciente
  const [phone, setPhone] = useState(""); // Estado para almacenar el número de teléfono del paciente

  const [error, setError] = useState(null); // Estado para manejar errores

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  // Función para manejar el envío del formulario de creación de pacientes
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST para crear un paciente en el servidor
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
      setCi("");
      setFirstName("");
      setLastName("");
      setBirthDate("");
      setGender("");
      setPhone("");

      // Después de crear un paciente con éxito, actualiza la lista de pacientes en Table_pacientes.
      cargarPacientes();
    } catch (error) {
      console.error('Error al crear un paciente:', error.response);
      setError("Error al crear un paciente. Por favor, verifique los datos.");
    }
  };

  return (
    <div>
      <Button variant="" style={{ background: "white" }} onClick={handleShow} className="rounded-pill">
        Crear Paciente
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className=" text-white">Crear Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>CI:</Form.Label>
              <Form.Control type="text" id="ci" value={ci} onChange={(e) => setCi(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido:</Form.Label>
              <Form.Control type="text" id="last_name" value={last_name} onChange= {(e) => setLastName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de Nacimiento:</Form.Label>
              <Form.Control type="date" id="birth_date" value={birth_date} onChange={(e) => setBirthDate(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Género:</Form.Label>
              <Form.Control as="select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>
            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} type='submit'>
              Crear paciente
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};