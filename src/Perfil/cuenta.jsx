import { Table } from "react-bootstrap";

const Cuenta = () => {
  return (
    <>
      <h2>Datos de la Cuenta</h2>

      <Table  size='sm' striped bordered hover>
        <tbody>
        <tr>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Monto</th>
        </tr>
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
    </>
  );
};
export default Cuenta;
