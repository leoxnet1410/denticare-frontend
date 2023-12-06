import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from 'axios';

const url = "http://localhost:3200";

// Componente para crear un nuevo usuario (doctor)
const CrearUsuario = ({ cargarUsuarios, setDoctorId }) => {
  const [show, setShow] = useState(false); // Estado para mostrar/ocultar el modal de creación de usuarios
  const [first_name, setFirstName] = useState(''); // Estado para almacenar el nombre del usuario
  const [last_name, setLastName] = useState(''); // Estado para almacenar el apellido del usuario
  const [puesto, setPuesto] = useState(''); // Estado para almacenar el puesto del usuario
  const [error, setError] = useState(null); // Estado para manejar errores

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  // Función para manejar el envío del formulario de creación de usuarios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST para crear un usuario (doctor) en el servidor
      const response = await axios.post(url + '/doctors', {
        first_name,
        last_name,
        puesto,
      });

      console.log('Respuesta del servidor:', response.data);
      setShow(false);
      setFirstName('');
      setLastName('');
      setPuesto('');

      // Actualiza el estado de doctorId en CrearCita con el ID del doctor creado
      setDoctorId(response.data.id);

      // Después de crear un doctor con éxito, actualiza la lista de doctores en la tabla de doctores
      cargarUsuarios();
    } catch (error) {
      console.error('Error al crear un doctor:', error.response);
      setError("Error al crear un doctor. Por favor, verifique los datos.");
    }
  };

  return (
    <div>
      <Button variant="" style={{ background: "white" }} onClick={handleShow} className="rounded-pill">
        Crear Usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className="text-white">Crear Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido:</Form.Label>
              <Form.Control type="text" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Puesto:</Form.Label>
              <Form.Control type="text" id="puesto" value={puesto} onChange={(e) => setPuesto(e.target.value)} required />
            </Form.Group>
            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} type='submit'>
              Crear usuario
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrearUsuario;





