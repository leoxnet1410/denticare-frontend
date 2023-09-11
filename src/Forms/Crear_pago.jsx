import React, { useState } from 'react';

import { Form, Button, Modal } from 'react-bootstrap';

export const CrearPago = () => {
  const [show, setShow] = useState(false);
  const [fecha, setFecha] = useState('');
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Fecha:', fecha);
    console.log('Tipo:', tipo);
    console.log('Monto:', monto);
  };

  return (
    <>
      
      <Button variant=""style={{background:"white"}} onClick={() => setShow(true)} className="rounded-pill">
          Crear Pago
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

            <Form.Group controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="monto">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                required
              />
            </Form.Group>

            <Button className="citas " style={{ marginTop: '5%', color:'white' }} onClick={() => setShow(false)}>
              Guardar Pago
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
}