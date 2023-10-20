import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import CrearCita from '../Forms/Crear_cita'; // Nombre corregido de importación
import axios from 'axios';

const url = "http://localhost:3200";

const crearCitaEnAPI = async (nuevaCita) => {
  try {
    const respuesta = await axios.post(url + "/medical_sessions", nuevaCita);
    return respuesta.data;
  } catch (error) {
    console.error("Error al crear una cita:", error);
    throw error;
  }
};

const obtenerCitasDesdeAPI = async () => {
  try {
    const respuesta = await axios.get(url + "//medical_sessions");
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener la lista de citas:", error);
    throw error;
  }
};

const Historial_citas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    cargarCitas();
  }, []);

  const cargarCitas = async () => {
    try {
      const response = await obtenerCitasDesdeAPI();
      setCitas(response);
    } catch (error) {
      console.error('Error al cargar la lista de citas:', error);
    }
  };

  return (
    <div style={{ marginTop: '5%' }}>
      <Card>
        <div className='citas'>
          <Card.Header className='justify-content-between d-flex text-dark'>
            <span className="text-white">Historial de citas</span>
            <CrearCita cargarCitas={cargarCitas} />
          </Card.Header>
        </div>
        <Card.Body className='bg-light'>
          <Table size='sm' striped bordered hover variant='light'>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Doctor</th>
                <th>Tratamiento</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cita.fecha}</td>
                  <td>{cita.doctor}</td>
                  <td>{cita.tratamiento}</td>
                  <td>{cita.estado}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Historial_citas;