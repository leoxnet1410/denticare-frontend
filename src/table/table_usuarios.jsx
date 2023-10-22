
import React, { useState, useEffect } from 'react';  // Importa React, y las funciones useState y useEffect de React.
import axios from 'axios';  // Importa la biblioteca Axios para realizar solicitudes HTTP.
import { Card, Button, Form, Row, Col } from "react-bootstrap";  // Importa componentes de React Bootstrap.
import { Crear_usuario } from '../Forms/Crear_usuario';  // Importa un componente llamado Crear_usuario desde otro archivo.

const url = "http://localhost:3200";  // Define una URL base para las solicitudes HTTP.

export const Table_usuarios = () => {  // Define un componente funcional llamado Table_usuarios.
  const [usuarios, setUsuarios] = useState([]);  // Declara un estado 'usuarios' y su función 'setUsuarios' con un valor inicial de una lista vacía.
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);  // Declara un estado 'usuariosSeleccionados' y su función 'setUsuariosSeleccionados' con una lista vacía como valor inicial.

  useEffect(() => {  // Utiliza el efecto useEffect para cargar datos cuando el componente se monta.
    cargarUsuarios();  // Llama a la función cargarUsuarios.
  }, []);

  const cargarUsuarios = async () => {  // Define una función asincrónica llamada 'cargarUsuarios'.
    try {
      const response = await axios.get(`${url}/patients`);  // Realiza una solicitud GET a la URL compuesta y almacena la respuesta en 'response'.
      setUsuarios(response.data);  // Actualiza el estado 'usuarios' con los datos obtenidos.
    } catch (error) {
      console.error('Error al cargar la lista de usuarios:', error);  // Maneja errores si la solicitud no se realiza correctamente.
    }
  };

  const handleEliminarUsuario = async () => {  // Define una función asincrónica para manejar la eliminación de usuarios.
    try {
      for (const usuarioId of usuariosSeleccionados) {  // Recorre los IDs de usuarios seleccionados.
        await axios.delete(`${url}/patients/${usuarioId}`);  // Realiza solicitudes DELETE para eliminar usuarios seleccionados.
      }
      cargarUsuarios();  // Vuelve a cargar la lista de usuarios después de la eliminación.
      setUsuariosSeleccionados([]);  // Limpia la selección después de eliminar.
    } catch (error) {
      console.error('Error al eliminar los usuarios:', error);  // Maneja errores si la eliminación no se realiza correctamente.
    }
  };

  const handleSeleccionarUsuario = (usuarioId) => {  // Define una función para manejar la selección/deselección de usuarios.
    if (usuariosSeleccionados.includes(usuarioId)) {  // Verifica si el usuario ya está seleccionado.
      setUsuariosSeleccionados(usuariosSeleccionados.filter(id => id !== usuarioId));  // Si está seleccionado, lo elimina de la lista de seleccionados.
    } else {
      setUsuariosSeleccionados([...usuariosSeleccionados, usuarioId]);  // Si no está seleccionado, lo agrega a la lista de seleccionados.
    }
  };

  return (
    <div style={{ marginTop: "2%", maxWidth: "50%", marginLeft: "25%" }}>  // Estilo para el contenedor principal del componente.
      <Card>  // Renderiza un componente Card de React Bootstrap.
        <div className="citas">  // Un contenedor con clase "citas".
          <Card.Header className="justify-content-between d-flex text-dark">  // Encabezado de la tarjeta.
            <span className="text-white">Usuarios</span>  // Título 'Usuarios'.
            <div className="d-flex">  // Contenedor flex dentro del encabezado.
              <Crear_usuario cargarUsuarios={cargarUsuarios} />  // Renderiza un componente Crear_usuario y pasa la función 'cargarUsuarios'.
              <Button
                className='citas'
                onClick={handleEliminarUsuario}  // Maneja el clic en el botón de eliminación.
                style={{
                  background: "white",
                  borderRadius: "50px",
                  color:"black" 
                }}
              >
                Eliminar  // Etiqueta del botón "Eliminar".
              </Button>
              <Form inline>  // Renderiza un formulario en línea.
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"  // Campo de entrada para buscar.
                      className="mr-sm-2"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </Card.Header>
        </div>
        <Card.Body className="bg-light" style={{ maxHeight: "400px", overflowY: "auto", scrollbarWidth: "thin" }}>
          <table className="table table-sm table-striped table-bordered table-hover table-light">  // Renderiza una tabla con clases CSS.
            <thead>
              <tr>
                <th className="text-center">Nombre</th>  // Cabecera de la columna "Nombre".
                <th className="text-center">Apellido</th>  // Cabecera de la columna "Apellido".
                <th className="text-center">Puesto</th>  // Cabecera de la columna "Puesto".
                <th className="text-center">Acción</th>  // Cabecera de la columna "Acción".
              </tr>
            </thead>
            <tbody>  // Cuerpo de la tabla.
              {usuarios.map((usuario, index) => (  // Mapea los usuarios y muestra cada fila de la tabla.
                <tr key={index}>  // Asigna una clave única a cada fila.
                  <td style={{ textTransform: "capitalize" }}>{usuario.first_name}</td>  // Muestra el nombre del usuario.
                  <td style={{ textTransform: "capitalize" }}>{usuario.last_name}</td>  // Muestra el apellido del usuario.
                  <td style={{ textTransform: "capitalize" }}>{usuario.puesto}</td>  // Muestra el puesto del usuario.
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleSeleccionarUsuario(usuario.id)}  // Maneja el cambio de estado del checkbox.
                      checked={usuariosSeleccionados.includes(usuario.id)}  // Verifica si el usuario está seleccionado.
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