import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginForm } from './Forms/Login'
import { UserForm } from './Forms/User'
import { Container, Row, Col } from 'react-bootstrap'
import { Welcome } from './Pages/Welcome'
import { NavigationBar } from './Pages/NavigationBar'
import { Pacientes_table } from './Pages/Pacientes_table'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="welcome" element={<Welcome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/barra_navegacion" element={<NavigationBar />} />
        <Route path="/Pacientes_table" element={<Pacientes_table />} />
        <Route path="/crear_usuario" element={<UserForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
