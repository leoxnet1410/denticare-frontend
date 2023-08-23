import React from 'react';
import { Table } from 'react-bootstrap';

const Cuenta = () => {
  return (
    <div className="p-4" style={{ backgroundColor: 'black', marginTop: '80px', borderRadius: '10px', marginLeft: '30px', marginRight: '0' }}>
      <h2 className="mb-4 text-white text-center">Datos de la Cuenta</h2>

      <Table size='sm' striped bordered hover variant='dark' className="custom-rounded-table">
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
    </div>
  );
};

export default Cuenta;