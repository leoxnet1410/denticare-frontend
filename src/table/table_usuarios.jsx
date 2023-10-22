
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Crear_usuario } from '../Forms/Crear_usuario';

const url = "http://localhost:3200";

export const Table_usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const response = await axios.get(`${url}/patients`);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al cargar la lista de usuarios:', error);
    }
  };

  const handleEliminarUsuario = async () => {
    try {
      for (const usuarioId of usuariosSeleccionados) {
        await axios.delete(`${url}/patients/${usuarioId}`);
      }
      cargarUsuarios();
      setUsuariosSeleccionados([]);
    } catch (error) {
      console.error('Error al eliminar los usuarios:', error);
    }
  };

  const handleSeleccionarUsuario = (usuarioId) => {
    if (usuariosSeleccionados.includes(usuarioId)) {
      setUsuariosSeleccionados(usuariosSeleccionados.filter(id => id !== usuarioId));
    } else {
      setUsuariosSeleccionados([...usuariosSeleccionados, usuarioId]);
    }
  };

  return (
    <div style={{ marginTop: "2%", maxWidth: "50%", marginLeft: "25%" }}>
      <Card>
        <div className="citas">
          <Card.Header className="justify-content-between d-flex text-dark">
            <span className="text-white">Usuarios</span>
            <div className="d-flex">
              <Crear_usuario cargarUsuarios={cargarUsuarios} />
              <Button
                className='citas'
                onClick={handleEliminarUsuario}
                style={{
                  background: "white",
                  borderRadius: "50px",
                  color:"black" 
                }}
              >
                Eliminar
              </Button>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </Card.Header>
        </div>
        <Card.Body className="bg-light" style={{ maxHeight: "400px", overflowY: "auto", scrollbarWidth: "thin" }}>
          <table className="table table-sm table-striped table-bordered table-hover table-light">
            <thead>
              <tr>
                <th className="text-center">Nombre</th>
                <th className="text-center">Apellido</th>
                <th className="text-center">Puesto</th>
                <th className="text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td style={{ textTransform: "capitalize" }}>{usuario.first_name}</td>
                  <td style={{ textTransform: "capitalize" }}>{usuario.last_name}</td>
                  <td style={{ textTransform: "capitalize" }}>{usuario.puesto}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleSeleccionarUsuario(usuario.id)}
                      checked={usuariosSeleccionados.includes(usuario.id)}
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
};