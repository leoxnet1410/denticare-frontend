import React, { useState } from 'react';
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
