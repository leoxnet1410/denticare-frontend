import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginForm } from './Forms/Login'
import {Crear_usuario} from './Forms/Crear_usuario'
import { Container,Row,Col } from 'react-bootstrap'
import { Welcome } from './Pages/Welcome'
import { Barra_navegacion} from './Pages/Barra_navegacion'
import {Pacientes_table} from './Pages/Pacientes_table'




function App() {

  return (
    <Container className='main'>
     
      <Row>
        <Col>
          <BrowserRouter>
          <Barra_navegacion/>
            <Routes>
              <Route path="welcome" element={<Welcome/>} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/barra_navegacion" element={<Barra_navegacion/>} />
              <Route path="/Pacientes_table" element={<Pacientes_table/>} />
              <Route path="/crear_usuario" element={<Crear_usuario/>} />
          
             
              
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  )
}

export default App
