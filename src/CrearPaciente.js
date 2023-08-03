import React, { useState } from 'react';

const CrearPaciente = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend o hacer lo que desees con ellos
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Edad:', edad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          id="edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Crear Paciente</button>
    </form>
  );
};

export default CrearPaciente;