
import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from 'axios';

const url = "http://localhost:3200";

export const Crear_usuario = ({ cargarUsuarios }) => {
  const [show, setShow] = useState(false);
  const [ci, setCi] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [puesto, setPuesto] = useState(""); // Nuevo estado para el campo "puesto"
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

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
        puesto, // Agregar el campo "puesto" a la solicitud
      });

      console.log('Respuesta del servidor:', response.data);
      setShow(false);
      setCi("");
      setFirstName("");
      setLastName("");
      setBirthDate("");
      setGender("");
      setPhone("");
      setPuesto(""); // Limpiar el campo "puesto" después de crear el usuario

      // Después de crear un usuario con éxito, actualiza la lista de usuarios en Table_usuarios.
      cargarUsuarios();
    } catch (error) {
      console.error('Error al crear un paciente:', error.response);
      setError("Error al crear un paciente. Por favor, verifique los datos.");
    }
  };

  return (
    <div>
      <Button variant="" style={{ background: "white" }} onClick={handleShow} className="rounded-pill">
        Crear Usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className=" text-white">Crear Usuario</Modal.Title>
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
              <Form.Control type="text" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
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
              <Form.Label>Puesto:</Form.Label>
              <Form.Control type="text" id="puesto" value={puesto} onChange={(e) => setPuesto(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>
            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} type='submit'>
              Crear Usuario
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};