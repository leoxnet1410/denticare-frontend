import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className={`auth-container ${isActive ? 'active' : ''}`} id="auth-container">
        <div className="form-container sign-up">
          <form>
            <h1>Crea una cuenta</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span> Usa tu correo electrónico para registrarte</span>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>
            Denticare<FontAwesomeIcon icon={faTooth} className="rotating-icon" /> 
            </h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>o usa tu correo electrónico y contraseña</span>
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button>Iniciar sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>¡Bienvenido de nuevo!</h1>
              <p>Ingresa tus datos personales para usar todas las funciones del sitio</p>
              <button className="hidden" onClick={() => setIsActive(false)}>Iniciar sesión</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Bienvenido</h1>
              <p>Regístrate con tus datos personales</p>
              <button className="hidden" onClick={() => setIsActive(true)}>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;