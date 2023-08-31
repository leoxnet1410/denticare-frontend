
import React, { useState } from 'react';
import { Form, Button,Modal } from 'react-bootstrap';





export const CrearCita = () => {
  const [show, setShow] = useState(false);
  const [fecha, setFecha] = useState('');
  const [doctor, setDoctor] = useState('');
  const [tratamiento, setTratamiento] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Fecha:', fecha);
    console.log('Doctor:', doctor);
    console.log('Tratamiento:', tratamiento);
  };



  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="doctor">
              <Form.Label>Doctor</Form.Label>
              <Form.Control
                type="text"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="tratamiento">
              <Form.Label>Tratamiento</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={tratamiento}
                onChange={(e) => setTratamiento(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit">Guardar Cita</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

