import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const url = "http://localhost:3200";

const CrearCita = ({ cargarCitas }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(''); // Agregar id
  const [patient_id, setPatientId] = useState(''); // Agregar patient_id
  const [fecha, setFecha] = useState('');
  const [check_in, setCheckIn] = useState(''); // Agregar check_in
  const [doctor_id, setDoctorId] = useState(''); // Agregar doctor_id
  const [tratamiento, setTratamiento] = useState('');
  const [treatment_id, setTreatmentId] = useState(''); // Agregar treatment_id

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaCita = {
      id, // Agregar id
      patient_id, // Agregar patient_id
      fecha,
      check_in, // Agregar check_in
      doctor_id, // Agregar doctor_id
      tratamiento,
      treatment_id, // Agregar treatment_id
    };

    try {
      await axios.post(url + "/medical_sessions", nuevaCita);

      cargarCitas();
      setShow(false);
    } catch (error) {
      console.error('Error al crear la cita:', error);
    }
  };

  const handleGuardarCambios = async () => {
    const citaActualizada = {
      id, // Agregar id
      patient_id, // Agregar patient_id
      fecha,
      doctor_id, // Agregar doctor_id
      tratamiento,
     
    };

    try {
      // Implementa la lógica para actualizar la cita existente en la API
      // Por ejemplo, puedes usar axios.put() o axios.patch() según los requisitos de tu API.
      // Después de la actualización, es posible que desees llamar a cargarCitas() para actualizar la lista.
      // Debes agregar también el manejo de errores para esta operación.
      // ...

      cargarCitas(); // Actualiza la lista
      setShow(false); // Cierra el modal
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <>
      <Button variant="" style={{ background: "white" }} onClick={() => setShow(true)} className="rounded-pill">
        Crear Cita
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className="text-white">Ingresar Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="patient_id">
              <Form.Label>Patient ID</Form.Label>
              <Form.Control
                type="text"
                value={patient_id}
                onChange={(e) => setPatientId(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </Form.Group>
          
           
            <Form.Group controlId="tratamiento">
              <Form.Label>Tratamiento</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                style={{ resize: "none" }}
                value={tratamiento}
                onChange={(e) => setTratamiento(e.target.value)}
                required
              />
            </Form.Group>
          

            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} onClick={() => setShow(false)}>
              Guardar Cita
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='citas' onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button className='citas' onClick={handleGuardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CrearCita;