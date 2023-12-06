import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const url = 'http://localhost:3200';

// Componente para crear un nuevo tratamiento
const CrearTratamiento = ({ onTratamientoCreado }) => {
  const [show, setShow] = useState(false); // Estado para mostrar/ocultar el modal de creación de tratamientos
  const [nombreTratamiento, setNombreTratamiento] = useState(''); // Estado para almacenar el nombre del tratamiento
  const [costoTratamiento, setCostoTratamiento] = useState(''); // Estado para almacenar el costo del tratamiento
  const bsPrefix = 'Bs. '; // Prefijo "Bs. " para el costo

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  // Función para manejar cambios en el campo de costo del tratamiento
  const handleCostoChange = (e) => {
    // Verificar si el valor ingresado comienza con el prefijo "Bs. "
    const inputValue = e.target.value;
    if (inputValue.startsWith(bsPrefix)) {
      setCostoTratamiento(inputValue); // Si ya tiene el prefijo, mantenerlo
    } else {
      setCostoTratamiento(bsPrefix + inputValue); // Agregar el prefijo "Bs. "
    }
  };

  // Función para manejar el envío del formulario de creación de tratamientos
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Quitar el prefijo "Bs. " antes de enviar los datos
    const costoSinPrefijo = costoTratamiento.replace(bsPrefix, '');

    // Realizar la solicitud a la API para crear un tratamiento
    try {
      const response = await axios.post(`${url}/treatments`, {
        name: nombreTratamiento,
        amount: costoSinPrefijo,
      });

      // Llamar a la función proporcionada por props para notificar al componente Tratamientos
      onTratamientoCreado(response.data);

      // Limpiar los campos después de la creación
      setNombreTratamiento('');
      setCostoTratamiento('');

      // Cerrar el modal después de crear el tratamiento
      handleClose();
    } catch (error) {
      console.error('Error al crear el tratamiento:', error);
    }
  };

  return (
    <div>
      <Button variant=""style={{ background: "white" }} onClick={handleShow} className="rounded-pill">
        Crear Tratamiento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className="text-white">Crear Nuevo Tratamiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre del Tratamiento</Form.Label>
              <Form.Control
                type="text"
                value={nombreTratamiento}
                onChange={(e) => setNombreTratamiento(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Costo del Tratamiento</Form.Label>
              <Form.Control
                type="text" // Cambiar a tipo "text" para permitir el prefijo
                value={costoTratamiento}
                onChange={handleCostoChange}
                required
              />
            </Form.Group>
            <Button className="citas" style={{ marginTop: '5%', color: 'white' }} type='submit'>
              Crear Tratamiento
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrearTratamiento;