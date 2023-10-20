import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Paciente = () => {
  // Define el estado local para controlar si se muestra el formulario de edición.
  const [editMode, setEditMode] = useState(false);

  // Define los datos del paciente como estado local.
  const [patientData, setPatientData] = useState({
    nombre: 'Leonardo',
    apellido: 'Castillo',
    edad: 21,
    sexo: 'Masculino',
    telefono: '123456789',
    correo: 'leonardocastillo1410@gmail.com',
  });

  // Función para manejar el cambio al modo de edición.
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  // Función para manejar cambios en los datos del paciente.
  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setPatientData({ ...patientData, [name]: value });
  };

  return (
    <div style={{ marginTop: '1%' }}>
      <div className="p-4 text-right border-2 text-muted">
        <Card bg="light" text="light" border="light">
          <div className='citas'>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5>{editMode ? 'Editar Datos del paciente' : 'Datos del paciente'}</h5>
              <button
                className={`btn citas rounded-pill ${editMode ? '' : 'bg-white'}`}
                onClick={handleEditClick}
                style={{ backgroundColor: 'white' }}
              >
                {editMode ? 'Guardar' : 'Modificar'}
              </button>
            </Card.Header>
          </div>
          <Card.Body>
            {editMode ? (
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label"><strong>Nombre:</strong></label>
                  <input type="text" className="form-control" id="nombre" name="nombre" value={patientData.nombre} onChange={handleDataChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label"><strong>Apellido:</strong></label>
                  <input type="text" className="form-control" id="apellido" name="apellido" value={patientData.apellido} onChange={handleDataChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edad" className="form-label"><strong>Edad:</strong></label>
                  <input type="number" className="form-control" id="edad" name="edad" value={patientData.edad} onChange={handleDataChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="sexo" className="form-label"><strong>Sexo:</strong></label>
                  <input type="text" className="form-control" id="sexo" name="sexo" value={patientData.sexo} onChange={handleDataChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label"><strong>Teléfono:</strong></label>
                  <input type="text" className="form-control" id="telefono" name="telefono" value={patientData.telefono} onChange={handleDataChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label"><strong>Correo:</strong></label>
                  <input type="email" className="form-control" id="correo" name="correo" value={patientData.correo} onChange={handleDataChange} />
                </div>
              </form>
            ) : (
              <ListGroup size='sm' striped bordered hover variant='light'>
                <ListGroup.Item><strong>Nombre:</strong> {patientData.nombre}</ListGroup.Item>
                <ListGroup.Item><strong>Apellido:</strong> {patientData.apellido}</ListGroup.Item>
                <ListGroup.Item><strong>Edad:</strong> {patientData.edad}</ListGroup.Item>
                <ListGroup.Item><strong>Sexo:</strong> {patientData.sexo}</ListGroup.Item>
                <ListGroup.Item><strong>Teléfono:</strong> {patientData.telefono}</ListGroup.Item>
                <ListGroup.Item><strong>Correo:</strong> {patientData.correo}</ListGroup.Item>
              </ListGroup>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Paciente;