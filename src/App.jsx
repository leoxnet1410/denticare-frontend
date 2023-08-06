import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginForm } from './Forms/Login'
import { Container,Row,Col } from 'react-bootstrap'
import { Welcome } from './Pages/Welcome'
function App() {

  return (
    <Container className='main'>
      <Row>
        <Col>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome/>} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/lalala" element={<p>El guevo mio</p>} />
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  )
}

export default App
