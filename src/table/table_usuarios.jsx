import { Col, Table } from "react-bootstrap";
    
export const Table_usuarios = () => {
  return (
    <div>
    

    <h3 className="usuario">Tabla de Usuarios</h3>

      
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Table size='sm' variant="dark" striped bordered hover style={{ maxWidth: '600px', margin: '0 auto' }}>
    <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Puesto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>gonzales</td>
            <td>doctor</td>
          </tr>
          <tr>
            <td>carla</td>
            <td>LOPEZ</td>
            <td>secretaria</td>
          </tr>
          <tr>
            <td>John</td>
            <td>gonzales</td>
            <td>doctor</td>
          </tr>
          <tr>
            <td>carla</td>
            <td>LOPEZ</td>
            <td>secretaria</td>
          </tr>
          
        
        </tbody>
      </Table>
      </div>
      </div>
    


     
  );
};

export default Table_usuarios;

