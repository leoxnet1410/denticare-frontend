import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { Crear_Cita } from '../Forms/Crear_cita';
 

const Historial_citas = () => {
 
  return (
    <div style={{ marginTop: '5%' }}>
    <Card >
      <div className='citas'>
      <Card.Header className='justify-content-between d-flex  text-dark' >
      <span className="text-white">Historial de citas</span>
        <Crear_Cita/>
      </Card.Header>
      </div>
      <Card.Body className='bg-light'>
        <Table size='sm' striped bordered hover variant='light'>
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Doctor</th>
              <th>Tratamiento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2023-08-19</td>
              <td>Dr. perez</td>
              <td>Tratamiento A</td>
              <td>En proceso</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-08-21</td>
              <td>Dr. guzman</td>
              <td>Tratamiento B</td>
              <td>Completado</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card >
    </div>
  );

};

export default Historial_citas;





