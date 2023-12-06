import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const url = 'http://localhost:3200';

// Componente de botón para eliminar tratamientos
const boton_delete_tratamientos = ({ tratamientoId, onTratamientoEliminado }) => {
  // Función para manejar la eliminación de un tratamiento
  const handleEliminarTratamiento = async () => {
    try {
      // Realiza una solicitud DELETE a la API para eliminar el tratamiento específico
      await axios.delete(`${url}/treatments/${tratamientoId}`);
      // Llamar a la función proporcionada por props para notificar al componente Tratamientos
      onTratamientoEliminado(tratamientoId);
    } catch (error) {
      console.error('Error al eliminar el tratamiento:', error);
    }
  };

  return (
    <Button style={{ background: "white", color: "black" }} className='rounded-pill' onClick={handleEliminarTratamiento}>
      Eliminar
    </Button>
  );
}

export default boton_delete_tratamientos; 