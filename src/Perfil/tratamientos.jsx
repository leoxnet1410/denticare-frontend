import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import CrearTratamiento from '../Forms/Crear_tratamientos'; // Importa el componente para crear tratamientos
import BotonDeleteTratamientos from '../Perfil/boton_delete_tratamientos'; // Importa el botón para eliminar tratamientos

const url = 'http://localhost:3200'; // URL de la API

const Tratamientos = () => {
  const [treatments, setTreatments] = useState([]); // Estado para almacenar la lista de tratamientos

  // Efecto que se ejecuta al montar el componente para cargar la lista de tratamientos
  useEffect(() => {
    cargarTratamientos();
  }, []);

  // Función para cargar la lista de tratamientos desde la API
  const cargarTratamientos = async () => {
    try {
      const response = await axios.get(`${url}/treatments`);
      setTreatments(response.data); // Almacena los tratamientos en el estado
    } catch (error) {
      console.error('Error al obtener la lista de tratamientos:', error);
    }
  };

  // Función para manejar la creación de un nuevo tratamiento
  const handleTratamientoCreado = (nuevoTratamiento) => {
    setTreatments([...treatments, nuevoTratamiento]); // Agrega el nuevo tratamiento a la lista
  };

  // Función para manejar la eliminación de un tratamiento
  const handleTratamientoEliminado = (tratamientoId) => {
    // Actualiza la lista de tratamientos después de eliminar uno
    setTreatments(treatments.filter((treatment) => treatment.id !== tratamientoId));
  };

  return (
    <div className="table-usuarios-container" style={{ marginTop: '2%', maxWidth: '50%', marginLeft: '25%' }}>
      <Card>
        <div className="citas">
          <Card.Header className="justify-content-between d-flex text-dark">
            <span className="text-white">
              Tratamientos
            </span>
            {/* Renderiza el componente para crear tratamientos y le pasa la función handleTratamientoCreado */}
            <CrearTratamiento onTratamientoCreado={handleTratamientoCreado} />
          </Card.Header>
        </div>
        <Card.Body className="bg-light usuarios-list" style={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
          <table className="table table-sm table-striped table-bordered table-hover table-light">
            <thead>
              <tr>
                <th>Tratamiento</th>
                <th>Costo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((treatment) => (
                <tr key={treatment.id}>
                  <td>{treatment.name}</td>
                  <td>{`$${treatment.amount}`}</td>
                  <td>
                    {/* Renderiza el botón para eliminar tratamientos y le pasa el tratamientoId y la función handleTratamientoEliminado */}
                    <BotonDeleteTratamientos
                      tratamientoId={treatment.id}
                      onTratamientoEliminado={handleTratamientoEliminado}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tratamientos;