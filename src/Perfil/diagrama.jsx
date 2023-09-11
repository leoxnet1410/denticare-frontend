import React from 'react';
import { Container } from 'react-bootstrap';

const Diagrama = () => {
  return (
    <Container className="border border-ligth p-4 text-center citas" style={{ marginTop: '20%', width: '350px',  }}>
      <div className="titulo">Título</div>
      <img className="imagen" src="./img/diagrama.jpf" alt="Imagen" />
    </Container>
  );
};

export default Diagrama;