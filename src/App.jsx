 import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./Forms/Login";
import { CrearUsuario } from "./Forms/Crear_usuario";
import { Container, Row, Col } from "react-bootstrap";
import { Welcome } from "./Pages/Welcome";
import { BarraNavegacion } from "./Pages/BarraNavegacion";
import { Table_pacientes } from "./table/Table_pacientes";
import { Table_usuarios } from "./table/table_usuarios";
import Perfil from "./Perfil/Perfil";
import Diagrama from "./Perfil/diagrama";



function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main">
        <Row>
          <Col xs={12} className="px-0">
              <BarraNavegacion />
          </Col>
        </Row>
        <Row className='p-5'>

        <Routes>
          <Route path="welcome" element={<Welcome />} />
          <Route path="/table_usuarios" element={<Table_usuarios />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/table_pacientes" element={<Table_pacientes />} />
          <Route path="/crear_usuario" element={<CrearUsuario />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/diagrama" element={<Diagrama />} />
       
        </Routes>
        </Row>
     
      
      </Container>
    </BrowserRouter>
  );
}

export default App;
