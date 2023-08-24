import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Paciente = () => {
  return (
    <div className="p-4 text-rigth" style={{ maxWidth: '350px', margin: '0 auto', marginTop: '120px' }}>
      <div className="border border-dark">
        <div className="bg-dark text-center text-white p-2">Datos del paciente</div>
        <ListGroup variant="flush bg-dark" className="bg-dark">
          <ListGroup.Item variant="dark">Nombre: Leonardo</ListGroup.Item>
          <ListGroup.Item variant="dark" >Apellido: Castillo</ListGroup.Item>
          <ListGroup.Item variant="dark" >Edad: 21</ListGroup.Item>
          <ListGroup.Item variant="dark" >Sexo: Masculino</ListGroup.Item>
          <ListGroup.Item variant="dark" >Telefono: 123456789</ListGroup.Item>
          <ListGroup.Item variant="dark" >Correo: leonardocastillo1410@gmail.com</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Paciente;

