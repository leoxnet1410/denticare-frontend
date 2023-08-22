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
      <Col style={{background:'pink'}}>
        <Saldo />
        <Diagrama />
        <Botones />
      </Col>
      <Col style={{background:'yellow'}}>
        <Historial_citas />
        <Notas />
      </Col>
      </>
   
  );
};
export default Perfil;
