import { ListGroup } from "react-bootstrap";

const Paciente = () => {
  return (
    <>
      <h2 className="">Datos del paciente:</h2>
      <ListGroup>
        <ListGroup.Item>Nombre: Leonardo</ListGroup.Item>
        <ListGroup.Item>Apellido: Castillo</ListGroup.Item>
        <ListGroup.Item>Edad: 21</ListGroup.Item>
        <ListGroup.Item>Sexo: Masculino</ListGroup.Item>
        <ListGroup.Item>Telefono: 123456789</ListGroup.Item>
        <ListGroup.Item>Correo: leonardocastillo1410@gmail.com</ListGroup.Item>
      </ListGroup>
    </>
  );
};
export default Paciente;
