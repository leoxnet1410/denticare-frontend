import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';





const linkStyles = {
  color: 'blue', 
  marginleft: '20%', 
  textDecoration: 'none', 

};

const BotonPerfil = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/Perfil" style={linkStyles}>
        <FontAwesomeIcon icon={faUser} />
      </Link>
    
        
    
    </div>
  );
}

export default BotonPerfil;