import {Col, Form, FormControl, Row} from 'react-bootstrap'
export const LoginForm =()=>{

    return(
        <div className="login-container">
      <div className="login-form">
        <h2>Iniciar sesión en Denticare</h2>
        <Form>
          <FormControl type="text" placeholder="Ingrese usuario" required />
          <FormControl type="password" placeholder="Contraseña" required />
          <button type="submit">Iniciar sesión</button>
        </Form>
        <div className="separator">
          <span>o</span>
        </div>
        <button className="invitado"> Iniciar como invitado</button>
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
    )
}


































