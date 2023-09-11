
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';





export const Crear_Cita = () => {
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
    
  <Button variant=""style={{background:"white"}} onClick={() => setShow(true)} className="rounded-pill">
    Crear Cita
  </Button>


      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className="citas" closeButton>
       
        <Modal.Title className=" text-white">Ingresar Datos</Modal.Title>
      
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

            <Form.Group controlId="tratamiento ">
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

            <Button className="citas" style={{ marginTop: '5%', color:'white' }} onClick={() => setShow(false)}>
              Guardar Cita
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='citas' onClick={() => setShow(false)}>
           Cerrar
          </Button>
          <Button className='citas' onClick={() => setShow(false)}>
           Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

