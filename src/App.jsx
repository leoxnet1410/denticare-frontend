import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginForm } from './Forms/Login'
import { Crear_usuario } from './Forms/Crear_usuario'
import { Container,Row,Col } from 'react-bootstrap'
import { Welcome } from './Pages/Welcome'
import { Barra_navegacion} from './Pages/Barra_navegacion'
import { Table_pacientes} from './table/Table_pacientes'
import { Table_usuarios} from './table/table_usuarios'
import  Perfil from './Perfil/Perfil'




function App() {

  return (
    <Container className='main'>
     
      <Row>
        <Col>
          <BrowserRouter>
          <Barra_navegacion/>
            <Routes>
              <Route path="welcome" element={<Welcome/>} />
              <Route path="/table_usuarios" element={<Table_usuarios/>} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/table_pacientes" element={<Table_pacientes/>} />
              <Route path="/crear_usuario" element={<Crear_usuario/>} />
              <Route path="/perfil" element={<Perfil/>} />
           
             
          
             
              
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  )
}

export default App
