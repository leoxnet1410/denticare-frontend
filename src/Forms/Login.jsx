import { Col, Form, FormControl, Row } from 'react-bootstrap'
export const LoginForm = () => {
  return (
    <div className='vh-100 bg-success d-flex align-items-center justify-content-center'>
      <div className="login-form w-25">
        <h2>Iniciar sesión en Denticare</h2>
        <Form>
          <FormControl type="text" placeholder="Ingrese usuario" required />
          <FormControl type="password" placeholder="Contraseña" required />
          <button type="submit">Iniciar sesión</button>
        </Form>
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  )
}


































