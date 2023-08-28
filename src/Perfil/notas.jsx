import React from 'react';
import { Container } from 'react-bootstrap';

const Notas = () => {
  return (
    <Container className="border border-dark p-4 mt-4 custom-rounded-container" style={{ backgroundColor: 'black', width: '90%', borderRadius: '10px', marginTop: '150px' }}>
      <div className="note-container">
        <h3 className="text-center mb-4" style={{ color: 'white' }}>Notas</h3>
        <textarea
          className="note-textarea form-control border-white"
          style={{ resize: 'none', backgroundColor: 'white', color: 'black', border: 'none', height: '150px' }}
          placeholder="Escribe tus notas aquí"
        ></textarea>
      </div>
    </Container>
  );
};

export default Notas;








