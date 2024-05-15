import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import  LoginForm  from "./Forms/Login";
=======
import { LoginForm } from "./Forms/Login";
>>>>>>> 5dccfb3ce6f2766d32f3240f5e8c3e839cf6f09c
import { Crear_paciente } from "./Forms/Crear_paciente";
import { Container, Row, Col } from "react-bootstrap";
import { Barra_navegacion } from "./Pages/Barra_navegacion";
import Table_pacientes from "./table/Table_pacientes";
import { Table_usuarios } from "./table/table_usuarios";
import Perfil from "./Perfil/Perfil";
<<<<<<< HEAD
import Forms_create from './Forms/forms_create';
=======
import { Forms_create } from './Forms/forms_create';
>>>>>>> 5dccfb3ce6f2766d32f3240f5e8c3e839cf6f09c
import Tratamientos from './Perfil/tratamientos'


function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main">
        <Row>
          <Col xs={12} className="px-0">
            <Barra_navegacion  />
         
          </Col>
        </Row>
        <Row className='p-5'>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/table_usuarios" element={<Table_usuarios />} />
         
            <Route path="/table_pacientes" element={<Table_pacientes />} />
            <Route path="/crear_paciente" element={<Crear_paciente />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/forms_create" element={<Forms_create />} />
            <Route path="/tratamientos" element={<Tratamientos/>} />
            

           
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;