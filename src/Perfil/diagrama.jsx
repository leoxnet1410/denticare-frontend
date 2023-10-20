import React from 'react';
import { Container } from 'react-bootstrap';
import diagramaImage from '../img/diagrama.jpg';

const Diagrama = () => {
  return (
    <Container className="border border-light p-4 text-center citas" style={{ marginTop: '20%', width: '350px' }}>
      <div className="titulo"></div>
      <img className="imagen" src={diagramaImage} alt="Imagen" style={{ width: '200px', height: 'auto' }} />
    </Container>
  );
};

export default Diagrama;