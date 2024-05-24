import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'; // Importa Button de react-bootstrap
import CrearTratamiento from '../Forms/Crear_tratamientos';
import BotonDeleteTratamientos from '../Perfil/boton_delete_tratamientos';

const url = 'http://localhost:3200'; // URL de la API

const Tratamientos = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    cargarTratamientos();
  }, []);

  const cargarTratamientos = async () => {
    try {
      const response = await axios.get(`${url}/treatments`);
      setTreatments(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de tratamientos:', error);
    }
  };

  const handleTratamientoCreado = (nuevoTratamiento) => {
    setTreatments([...treatments, nuevoTratamiento]);
  };

  const handleTratamientoEliminado = (tratamientoId) => {
    setTreatments(treatments.filter((treatment) => treatment.id !== tratamientoId));
  };

  const handlePacienteEditado = (pacienteId) => {
    // Aquí puedes manejar la acción de edición del paciente
    console.log(`Editar paciente con ID: ${pacienteId}`);
  };

  return (
    <div className="table-usuarios-container" style={{ marginTop: '2%', maxWidth: '50%', marginLeft: '25%' }}>
      <Card>
        <div className="citas">
          <Card.Header className="justify-content-between d-flex text-dark">
            <span className="text-white">
              Tratamientos
            </span>
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
                    {/* Botón para eliminar tratamientos */}
                    <BotonDeleteTratamientos
                      tratamientoId={treatment.id}
                      onTratamientoEliminado={handleTratamientoEliminado}
                    />
                    {/* Botón para editar pacientes */}
                    <Button variant="primary" onClick={() => handlePacienteEditado(treatment.id)}>
                      Editar
                    </Button>
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
