import React from 'react';
import { Container } from 'react-bootstrap';

const Diagrama = () => {
  return (
    <Container className="border border-dark p-4 text-center" style={{ marginTop: '150px', width: '350px', backgroundColor: 'black' }}>
      <div className="titulo">Título</div>
      <img className="imagen" src="./img/diagrama.jpf" alt="Imagen" />
    </Container>
  );
};

export default Diagrama;