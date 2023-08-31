import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { CrearCita } from '../Forms/Crear_cita';
 

const Historial_citas = () => {
 
  return (
    <Card >

      <Card.Header className='justify-content-between d-flex bg-dark text-light' >
        <span>Historial de citas</span>
        <CrearCita/>
      </Card.Header>
      <Card.Body className='bg-dark'>
        <Table size='sm' striped bordered hover variant='dark'>
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
  );

};

export default Historial_citas;





