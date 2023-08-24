import React from 'react';
import { Table } from 'react-bootstrap';

const Historial_citas = () => {
  return (
    <div className="p-4" style={{ backgroundColor: 'black', marginTop: '150px', marginBottom: '30px', width: '90%', marginLeft: '30px', borderRadius: '10px' }}>
      <h3 className="mb-4 text-white text-center">Historial de citas</h3>

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
    </div>
  );
};

export default Historial_citas;
 


 
  
   