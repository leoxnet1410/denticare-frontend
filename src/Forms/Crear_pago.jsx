import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

// Componente para crear un nuevo pago
export const CrearPago = () => {
  const [show, setShow] = useState(false); // Estado para mostrar/ocultar el modal de creación de pagos
  const [fecha, setFecha] = useState(''); // Estado para almacenar la fecha del pago
  const [tipo, setTipo] = useState(''); // Estado para almacenar el tipo de pago
  const [monto, setMonto] = useState(''); // Estado para almacenar el monto del pago

  // Función para manejar el envío del formulario de creación de pagos
  const handleSubmit = (e) => {
    e.preventDefault();

    // Muestra en la consola los datos ingresados
    console.log('Fecha:', fecha);
    console.log('Tipo:', tipo);
    console.log('Monto:', monto);
  };

  return (
    <>
      <Button variant="" style={{ background: "white" }} onClick={() => setShow(true)} className="rounded-pill">
        Crear Pago
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className="text-white">Ingresar Datos</Modal.Title>
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

            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} onClick={() => setShow(false)}>
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