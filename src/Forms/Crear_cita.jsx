import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from 'axios';
const url = "http://localhost:3200";

// Componente para crear una nueva cita
const CrearCita = ({ cargarCitas }) => {
  const [show, setShow] = useState(false); // Estado para mostrar/ocultar el modal de creación de citas
  const [fecha, setFecha] = useState(''); // Estado para almacenar la fecha de la cita
  const [tratamiento, setTratamiento] = useState(''); // Estado para almacenar el tratamiento de la cita
  const [estado, setEstado] = useState(''); // Estado para almacenar el estado de la cita
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para cerrar el modal
  const handleClose = () => {
    setShow(false);
  };

  // Función para mostrar el modal
  const handleShow = () => {
    setShow(true);
  };

  // Función para manejar el envío del formulario de creación de citas
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convierte la cadena de fecha en un objeto Date
      const fechaDate = new Date(fecha);

      // Objeto que representa la nueva sesión médica
      const nuevaSesion = {
        check_in: fechaDate.toISOString(),
        status: estado,
        treatment: tratamiento,
        patient_id: 1, // Reemplaza con el ID del paciente real
        doctor_id: 2, // Reemplaza con el ID del médico real
      };

      // Realiza una solicitud POST para crear la cita en el servidor
      const response = await axios.post(`${url}/medical_sessions`, nuevaSesion);

      // Si la solicitud es exitosa (código de estado 201), cierra el modal y reinicia los estados
      if (response.status === 201) {
        setShow(false);
        setFecha('');
        setTratamiento('');
        setEstado('');
        cargarCitas(); // Llama a la función para recargar la lista de citas
      }
    } catch (error) {
      console.error('Error al crear una cita:', error);
      setError('Error al crear una cita. Por favor, verifique los datos.');
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow} // Abre el modal al hacer clic en el botón
        className="rounded-pill"
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        Crear Cita
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="citas">
          <Modal.Title className="text-white">Crear cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>} {/* Muestra un mensaje de error si hay errores */}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Fecha:</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Estado:</Form.Label>
              <Form.Control
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tratamiento:</Form.Label>
              <Form.Control
                type="text"
                value={tratamiento}
                onChange={(e) => setTratamiento(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} onClick={handleSubmit}>
              Crear cita
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrearCita;