import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Paciente = () => {
  return (
    <div style={{ marginTop: '1%' }}>
    <div className="p-4 text-right border-2 text-muted">
      <Card bg="light" text="light" border="light">
        <div className='citas'>
          <Card.Header>Datos del paciente</Card.Header>
        </div>
        <Card.Body>
          <ListGroup size='sm' striped bordered hover variant='light'>
            <ListGroup.Item><strong>Nombre:</strong> Leonardo</ListGroup.Item>
            <ListGroup.Item><strong>Apellido:</strong> Castillo</ListGroup.Item>
            <ListGroup.Item><strong>Edad:</strong> 21</ListGroup.Item>
            <ListGroup.Item><strong>Sexo:</strong> Masculino</ListGroup.Item>
            <ListGroup.Item><strong>Teléfono:</strong> 123456789</ListGroup.Item>
            <ListGroup.Item><strong>Correo:</strong> leonardocastillo1410@gmail.com</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default Paciente;