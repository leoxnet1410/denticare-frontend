import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';

import { CrearPago } from '../Forms/Crear_pago';

const Cuenta = () => {
  return (
    <div style={{ marginTop: '30%' }}>
    <Card >
    <div className='citas'>
    <Card.Header className='justify-content-between d-flex  text-dark' >
    <span className="text-white">Cuenta</span>
      <CrearPago/>
    </Card.Header>
    </div>
    <Card.Body className='bg-light'>
      <Table size='sm' striped bordered hover variant='light'>
      <thead>
<tr>
  <th>Fecha</th>
  <th>Tipo</th>
  <th>Monto</th>
</tr>
</thead>
<tbody>
<tr>
  <td>2023-08-19</td>
  <td>Débito</td>
  <td>$500</td>
</tr>
<tr>
  <td>2023-08-18</td>
  <td>Crédito</td>
  <td>$1000</td>
</tr>
<tr>
  <td>2023-08-18</td>
  <td>Débito</td>
  <td>$300</td>
</tr>
</tbody>

       
      </Table>
    </Card.Body>
  </Card >
  </div>
);

};

export default Cuenta;


