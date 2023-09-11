import { Col, Table, Card } from "react-bootstrap";
import { Boton_crear_usuario } from '../Forms/Boton_crear_usuario';

export const Table_usuarios = () => {
  return (
   
      <div style={{ marginTop: "10%", maxWidth: "50%", marginLeft: "25%"}}>
        <Card>
          <div className="citas">
            <Card.Header className="justify-content-between d-flex text-dark">
              <span className="text-white">Usuarios</span>
              <Boton_crear_usuario/>
            </Card.Header>
          </div>
          <Card.Body className="bg-light">
            <Table size="sm" striped bordered hover variant="light">
              <thead>
                <tr>
                  <th className="text-center">Nombre</th>
                  <th className="text-center">Apellido</th>
                  <th className="text-center">Puesto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textTransform: "capitalize" }}>John</td>
                  <td style={{ textTransform: "capitalize" }}>gonzales</td>
                  <td style={{ textTransform: "capitalize" }}>doctor</td>
                </tr>
                <tr>
                  <td style={{ textTransform: "capitalize" }}>carla</td>
                  <td style={{ textTransform: "capitalize" }}>lopez</td>
                  <td style={{ textTransform: "capitalize" }}>secretaria</td>
                </tr>
                <tr>
                  <td style={{ textTransform: "capitalize" }}>John</td>
                  <td style={{ textTransform: "capitalize" }}>gonzales</td>
                  <td style={{ textTransform: "capitalize" }}>doctor</td>
                </tr>
                <tr>
                  <td style={{ textTransform: "capitalize" }}>carla</td>
                  <td style={{ textTransform: "capitalize" }}>lopez</td>
                  <td style={{ textTransform: "capitalize" }}>secretaria</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
  
  );
};

export default Table_usuarios;