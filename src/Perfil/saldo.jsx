import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Saldo = () => {
  return (
    <Container className="p-4 border border-ligth rounded d-flex flex-column align-items-center justify-content-center citas" style={{ marginTop: '35%',  width: '70%' }}>
      <h3 className="saldo text-center text-white mb-4">Saldo</h3>
      <div className="inner-box d-flex">
        <div className="small-box1 rounded"></div>
        <div className="small-box2 rounded"></div>
        <div className="small-box3 rounded"></div>
      </div>
    </Container>
  );
};

export default Saldo;




