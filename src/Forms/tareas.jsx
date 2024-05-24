import React, { useState, useEffect } from 'react';

import { Card, Button } from 'react-bootstrap'; // Importa Button de react-bootstrap

const url = 'http://localhost:3200'; // URL de la API

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTareaTexto, setNuevaTareaTexto] = useState('');
  const [tareaEditando, setTareaEditando] = useState(null);
  const [textoEditando, setTextoEditando] = useState('');

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const response = await axios.get(`${url}/tareas`);
      setTareas(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de tareas:', error);
    }
  };

  const agregarTarea = async () => {
    if (nuevaTareaTexto.trim() !== '') {
      try {
        const response = await axios.post(`${url}/tareas`, {
          texto: nuevaTareaTexto,
          completada: false,
        });
        setTareas([...tareas, response.data]);
        setNuevaTareaTexto('');
      } catch (error) {
        console.error('Error al agregar la tarea:', error);
      }
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await axios.delete(`${url}/tareas/${id}`);
      setTareas(tareas.filter(tarea => tarea.id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const editarTarea = (id) => {
    const tareaEdit = tareas.find(tarea => tarea.id === id);
    setTareaEditando(id);
    setTextoEditando(tareaEdit.texto);
  };

  const guardarEdicion = async () => {
    try {
      const response = await axios.put(`${url}/tareas/${tareaEditando}`, {
        texto: textoEditando,
        completada: tareas.find(tarea => tarea.id === tareaEditando).completada,
      });
      setTareas(tareas.map(tarea =>
        tarea.id === tareaEditando ? response.data : tarea
      ));
      setTareaEditando(null);
      setTextoEditando('');
    } catch (error) {
      console.error('Error al guardar la edición:', error);
    }
  };

  return (
    <div className="table-usuarios-container" style={{ marginTop: '2%', maxWidth: '50%', marginLeft: '25%' }}>
      <Card>
        <div className="citas">
          <Card.Header className="justify-content-between d-flex text-dark">
            <span className="text-white">
              Lista de Tareas
            </span>
            <div className="add-todo">
              <input
                type="text"
                className="input-add"
                placeholder="¿Qué hay que hacer?"
                value={nuevaTareaTexto}
                onChange={(e) => setNuevaTareaTexto(e.target.value)}
              />
              <Button className="btn-add" onClick={agregarTarea}>Agregar</Button>
            </div>
          </Card.Header>
        </div>
        <Card.Body className="bg-light usuarios-list" style={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
          <table className="table table-sm table-striped table-bordered table-hover table-light">
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <tr key={tarea.id}>
                  <td>
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
                  </td>
                  <td>
                    {tarea.id === tareaEditando ? (
                      <Button variant="primary" onClick={guardarEdicion}>Guardar</Button>
                    ) : (
                      <>
                        <Button variant="warning" onClick={() => editarTarea(tarea.id)}>Editar</Button>
                        <Button variant="danger" onClick={() => eliminarTarea(tarea.id)}>Eliminar</Button>
                      </>
                    )}
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

export default Tareas;