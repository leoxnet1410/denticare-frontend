import React, { useState } from 'react';
<<<<<<< HEAD
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Forms_create = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Reunion a las 10', completada: false },
    { id: 2, texto: 'Compra de insumos ', completada: false },
    { id: 3, texto: 'Feriado', completada: false },
  ]);
  const [nuevaTareaTexto, setNuevaTareaTexto] = useState('');
  const [tareaEditando, setTareaEditando] = useState(null);
  const [textoEditando, setTextoEditando] = useState('');

  const agregarTarea = () => {
    if (nuevaTareaTexto.trim() !== '') {
      const nuevaTarea = {
        id: Date.now(),
        texto: nuevaTareaTexto,
        completada: false,
      };
      setTareas([...tareas, nuevaTarea]);
      setNuevaTareaTexto('');
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const editarTarea = (id) => {
    const tareaEdit = tareas.find(tarea => tarea.id === id);
    setTareaEditando(id);
    setTextoEditando(tareaEdit.texto);
  };

  const guardarEdicion = () => {
    setTareas(tareas.map(tarea =>
      tarea.id === tareaEditando ? { ...tarea, texto: textoEditando } : tarea
    ));
    setTareaEditando(null);
    setTextoEditando('');
  };

  return (
    <div className="card-to-do-container">
      <h1>Lista de Tareas</h1>
      <div className="counter-todos">
        <h3>Nº Tareas: <span>{tareas.length}</span></h3>
        <h3>Pendientes: <span>{tareas.filter(tarea => !tarea.completada).length}</span></h3>
      </div>
      <div className="add-todo">
        <input
          type="text"
          className="input-add"
          placeholder="¿Qué hay que hacer?"
          value={nuevaTareaTexto}
          onChange={(e) => setNuevaTareaTexto(e.target.value)}
        />
        <button className="btn-add" onClick={agregarTarea}>Agregar</button>
      </div>
      <ul className='tarea'>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <div
              className={`container-done ${tarea.completada ? 'active' : ''}`}
              onClick={() => eliminarTarea(tarea.id)}
            ></div>
            {tarea.id === tareaEditando ? (
              <input
                type="text"
                className="input-edit"
                value={textoEditando}
                onChange={(e) => setTextoEditando(e.target.value)}
              />
            ) : (
              <span className={tarea.completada ? 'text-decoration-dashed' : ''}>{tarea.texto}</span>
            )}
            <div className="botones-container">
              {tarea.id === tareaEditando ? (
                <button className="btn-save" onClick={() => guardarEdicion()}>Guardar</button>
              ) : (
                <>
                  <FaPencilAlt className="btn-edit" onClick={() => editarTarea(tarea.id)} />
                  <FaTrashAlt className="btn-delete" onClick={() => eliminarTarea(tarea.id)} />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forms_create;
=======
import { Button, Col, Form, FormControl, Row, Alert } from 'react-bootstrap';

// Componente para crear un nuevo usuario
export const Forms_create = () => {
  const [nombre, setNombre] = useState(''); // Estado para almacenar el nombre del usuario
  const [apellido, setApellido] = useState(''); // Estado para almacenar el apellido del usuario
  const [fechaNacimiento, setFechaNacimiento] = useState(''); // Estado para almacenar la fecha de nacimiento del usuario
  const [correoElectronico, setCorreoElectronico] = useState(''); // Estado para almacenar el correo electrónico del usuario
  const [contrasena, setContrasena] = useState(''); // Estado para almacenar la contraseña del usuario

  // Estados para manejar errores en los campos
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorFechaNacimiento, setErrorFechaNacimiento] = useState('');
  const [errorCorreoElectronico, setErrorCorreoElectronico] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');

  // Función para manejar el envío del formulario de creación de usuarios
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (!nombre) {
      setErrorNombre('El campo Nombre es obligatorio');
    } else {
      setErrorNombre('');
    }

    if (!apellido) {
      setErrorApellido('El campo Apellido es obligatorio');
    } else {
      setErrorApellido('');
    }

    if (!fechaNacimiento) {
      setErrorFechaNacimiento('El campo Fecha de Nacimiento es obligatorio');
    } else {
      setErrorFechaNacimiento('');
    }

    if (!correoElectronico) {
      setErrorCorreoElectronico('El campo Correo Electrónico es obligatorio');
    } else {
      setErrorCorreoElectronico('');
    }

    if (!contrasena) {
      setErrorContrasena('El campo Contraseña es obligatorio');
    } else {
      setErrorContrasena('');
    }

    // Si no hay errores, puedes continuar con la creación del usuario
    if (nombre && apellido && fechaNacimiento && correoElectronico && contrasena) {
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Fecha de Nacimiento:', fechaNacimiento);
      console.log('Correo Electrónico:', correoElectronico);
      console.log('Contraseña:', contrasena);
    }
  };

  return (
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Col xs={6} sm={4} md={2} className="mt-5 border border-dark p-4" style={{ backgroundColor: 'black' }}>
        <h2 className="text-center mb-4 text-white">Crear Usuario</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label className="text-white">Nombre:</Form.Label>
            <FormControl
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            {errorNombre && <Alert variant="danger">{errorNombre}</Alert>}
          </Form.Group>

          <Form.Group controlId="apellido">
            <Form.Label className="text-white">Apellido:</Form.Label>
            <FormControl
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
            {errorApellido && <Alert variant="danger">{errorApellido}</Alert>}
          </Form.Group>

          <Form.Group controlId="fechaNacimiento">
            <Form.Label className="text-white">Fecha de Nacimiento:</Form.Label>
            <FormControl
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
            {errorFechaNacimiento && <Alert variant="danger">{errorFechaNacimiento}</Alert>}
          </Form.Group>

          <Form.Group controlId="correoElectronico">
            <Form.Label className="text-white">Correo Electrónico:</Form.Label>
            <FormControl
              type="email"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              required
            />
            {errorCorreoElectronico && <Alert variant="danger">{errorCorreoElectronico}</Alert>}
          </Form.Group>

          <Form.Group controlId="contrasena">
            <Form.Label className="text-white">Contraseña:</Form.Label>
            <FormControl
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
            {errorContrasena && <Alert variant="danger">{errorContrasena}</Alert>}
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Crear Usuario
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
>>>>>>> 5dccfb3ce6f2766d32f3240f5e8c3e839cf6f09c
