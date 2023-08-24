import { Table } from "react-bootstrap";
export const Table_pacientes = () => {
    return (
<div>
<h1>Tabla de Pacientes</h1>
<Table  size='sm' striped bordered hover>
<tbody>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cita</th>
      <th>Próxima Cita</th>
      <th>Tratamiento</th>
      <th>Saldo</th>
    </tr>
  
  
    <tr>
      <td>Leonardo</td>
      <td>Castillo</td>
      <td>14/08/2023</td>
      <td>15/09/2023</td>
      <td>limpieza</td>
      <td>500</td>
    </tr>
    <tr>
      <td>alejandro</td>
      <td>perez</td>
      <td>15/09/2023</td>
      <td>16/10/2023</td>
      <td>tratamiento de conducto</td>
      <td>-600</td>
    </tr>
    
    <tr>
      <td>alejandro</td>
      <td>perez</td>
      <td>15/09/2023</td>
      <td>16/10/2023</td>
      <td>tratamiento de conducto</td>
      <td>-600</td>
    </tr> <tr>
      <td>kiara</td>
      <td>perez</td>
      <td>15/10/2023</td>
      <td>18/12/2023</td>
      <td>chequeo de rutina</td>
      <td>200</td>
    </tr> <tr>
      <td>ramon</td>
      <td>hernandez</td>
      <td>18/09/2023</td>
      <td>16/11/2023</td>
      <td>extraccion</td>
      <td>0</td>
    </tr> <tr>
      <td>alejandro</td>
      <td>perez</td>
      <td>15/09/2023</td>
      <td>16/10/2023</td>
      <td>tratamiento de conducto</td>
      <td>-600</td>
    </tr>
    
  </tbody>
  </Table>
</div>
    )};
    export default Table_pacientes;