import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Form, Row, Col } from 'react-bootstrap';
import Crear_usuario from '../Forms/Crear_usuario';

const url = 'http://localhost:3200'; // URL de la API

export const Table_usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Efecto que se ejecuta al montar el componente para cargar la lista de usuarios
  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Función para cargar la lista de usuarios desde la API
  const cargarUsuarios = async () => {
    try {
      const response = await axios.get(`${url}/doctors`);
      setUsuarios(response.data); // Almacena los usuarios en el estado
    } catch (error) {
      console.error('Error al cargar la lista de usuarios:', error);
    }
  };

  return (
    <div style={{ marginTop: '2%', maxWidth: '50%', marginLeft: '25%' }}>
      <Card>
        <div className="citas">
          <Card.Header className="justify-content-between d-flex text-dark">
            <span className="text-white"> Usuarios </span>
            <div className="d-flex">
              <div className="d-flex">
                <div style={{ marginRight: '20px' }}>
                  {/* Renderiza el componente para crear usuarios y le pasa la función cargarUsuarios */}
                  <Crear_usuario cargarUsuarios={cargarUsuarios} />
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
                <th className="text-center">Puesto</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td style={{ textTransform: 'capitalize' }}>{usuario.first_name}</td>
                  <td style={{ textTransform: 'capitalize' }}>{usuario.last_name}</td>
                  <td style={{ textTransform: 'capitalize' }}>{usuario.puesto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};