import React from 'react';
import { Button } from 'react-bootstrap';

const styles = {
  deleteButton: {
    backgroundColor: 'red', 
    color: 'white', 
    height: '30px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    border: 'none', 
    borderRadius: '0', 
    marginLeft: '70px', 
  },
};

// Componente de botón para eliminar pacientes
export const Boton_delete_paciente = ({ handleEliminarPaciente }) => {
  return (
    <Button
      style={styles.deleteButton} // Aplica el estilo definido arriba
      onClick={handleEliminarPaciente} // Ejecuta la función proporcionada al hacer clic
    >
      ✕ {/* Muestra una "X" como contenido del botón */}
    </Button>
  );
};



