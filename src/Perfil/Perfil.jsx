import Botones from "./botones";
import Cuenta from "./cuenta";
import Historial_citas from "./historial_citas";
import Notas from "./notas";
import Paciente from "./paciente";
import Diagrama from "./diagrama";
import Saldo from "./saldo";
import { Col, Row } from "react-bootstrap";


const Perfil = () => {
  return (
    <>
      <Col  >
        <Paciente />
        <Cuenta />
      </Col>
      <Col >
      <Botones />
        <Saldo />
        <Diagrama />
     
      </Col>
      <Col >
        <Historial_citas />
        
        <Notas />
      </Col>
      </>
   
  );
};
export default Perfil;
