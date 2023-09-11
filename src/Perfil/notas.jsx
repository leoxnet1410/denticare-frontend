import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Notas = () => {
  return (
    <Container className="border border-light p-4 custom-rounded-container citas" style={{  width: '90%', borderRadius: '10px', marginTop: '15%' }}>
      <div className='citas'>
        <div className="note-container">
          <h3 className="text-center" style={{ color: 'white' }}>Notas</h3>
          <textarea
            className="note-textarea form-control border-white"
            style={{ resize: 'none', backgroundColor: 'white', color: 'black', border: 'none', height: '150px' }}
            placeholder="Escribe tus notas aquí"
          ></textarea>
        </div>
      </div>
      
      <div className="d-flex justify-content-end">
        <Button className=" rounded-pill mt-3" style={{ border: '1px solid white',color:"black" ,background:"white" }} onClick={() => guardarNotas()}>Guardar Notas</Button>
      </div>
    </Container>
  );
};

export default Notas;













