
import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import CrearCita from '../Forms/Crear_Cita'; // Importa el componente CrearCita
import axios from 'axios';

const url = 'http://localhost:3200';

const HistorialCitas = () => {
  const [citas, setCitas] = useState([]);

  // Función para cargar la lista de citas desde la API
  const cargarCitas = async () => {
    try {
      const response = await axios.get(`${url}/medical_sessions`);
      setCitas(response.data);
    } catch (error) {
      console.error('Error al cargar la lista de citas:', error);
    }
  };

  // Carga la lista de citas al cargar el componente
  useEffect(() => {
    cargarCitas();
  }, []);

  return (
    <div style={{ marginTop: '5%' }}>
      <Card>
        <div className='citas'>
          <Card.Header className='justify-content-between d-flex text-dark'>
            <span className='text-white'>Historial de citas</span>
            <CrearCita cargarCitas={cargarCitas} /> {/* Botón para crear una nueva cita */}
          </Card.Header>
        </div>
        <Card.Body className='bg-light'>
          <Table size='sm' striped bordered hover variant='light'>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Tratamiento</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.check_in}</td> {/* Fecha de la cita */}
                  <td>{cita.status}</td> {/* Estado de la cita */}
                  <td>{cita.treatment}</td> {/* Tratamiento de la cita */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HistorialCitas;