import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { Crear_paciente } from '../Forms/Crear_paciente'; // Importa el componente para crear pacientes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersLine, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Nuevos iconos
import { Link } from 'react-router-dom';
const url = 'http://localhost:3200'; // URL de la API

const Table_pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientesSeleccionados, setPacientesSeleccionados] = useState([]);
  const [alMenosUnoSeleccionado, setAlMenosUnoSeleccionado] = useState(false);

  // Efecto que se ejecuta al montar el componente para cargar la lista de pacientes
  useEffect(() => {
    cargarPacientes();
  }, []);

  // Función para cargar la lista de pacientes desde la API
  const cargarPacientes = async () => {
    try {
      const response = await axios.get(`${url}/patients`);
      setPacientes(response.data); // Almacena los pacientes en el estado
    } catch (error) {
      console.error('Error al cargar la lista de pacientes:', error);
    }
  };

  // Función para manejar la selección/deselección de pacientes
  const handleSeleccionarPaciente = (pacienteId) => {
    if (pacientesSeleccionados.includes(pacienteId)) {
      setPacientesSeleccionados(pacientesSeleccionados.filter((id) => id !== pacienteId));
    } else {
      setPacientesSeleccionados([...pacientesSeleccionados, pacienteId]);
    }
  };

  // Efecto que se ejecuta al cambiar la lista de pacientes seleccionados
  useEffect(() => {
    setAlMenosUnoSeleccionado(pacientesSeleccionados.length > 0);
  }, [pacientesSeleccionados]);

  // Función para eliminar pacientes seleccionados
  const handleEliminarPaciente = async () => {
    try {
      for (const pacienteId of pacientesSeleccionados) {
        await axios.delete(`${url}/patients/${pacienteId}`);
      }
      cargarPacientes();
      setPacientesSeleccionados([]);
    } catch (error) {
      console.error('Error al eliminar los pacientes:', error);
    }
  };

  // Función para redirigir al componente de perfil
  const handleMostrarPerfil = (pacienteId) => {
    // Aquí puedes redirigir a la ruta del perfil del paciente
    // Por ejemplo: history.push(`/perfil/${pacienteId}`);
  };

  return (
    <div style={{ marginTop: '2%', maxWidth: '50%', marginLeft: '25%' }}>
      <Card>
        <div className="citas">
          <Card.Header className="justify-content-between d-flex text-dark">
            <span className="text-white">
              Pacientes <FontAwesomeIcon icon={faUsersLine} />
            </span>
            <div className="d-flex">
              <div className="d-flex">
                <div style={{ marginRight: '20px' }}>
                  {/* Renderiza el componente para crear pacientes y le pasa la función cargarPacientes */}
                  <Crear_paciente cargarPacientes={cargarPacientes} />
                </div>
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control type="text" placeholder="Buscar" className="mr-sm-2" />
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Card.Header>
        </div>
        <Card.Body className="bg-light" style={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
          <table className="table table-sm table-striped table-bordered table-hover table-light">
            <thead>
              <tr>
                <th className="text-center">Nombre</th>
                <th className="text-center">Apellido</th>
                <th className="text-center">Acciones</th> {/* Ajuste de la cabecera */}
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td style={{ textTransform: 'capitalize' }}>{paciente.first_name}</td>
                  <td style={{ textTransform: 'capitalize' }}>{paciente.last_name}</td>
                  <td className="text-center" style={{ padding: '10px' }}>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-danger"
                      size="lg"
                      onClick={() => handleEliminarPaciente(paciente.id)}
                      style={{ cursor: 'pointer', marginRight: '10px' }}
                    />
                    <Link to={`/Perfil`}>
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        className="text-primary"
                        size="lg"
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Table_pacientes;