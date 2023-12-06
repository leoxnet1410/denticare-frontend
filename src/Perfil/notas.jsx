import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

const url = "http://localhost:3200"; // URL de la API

const Notas = () => {
  const [notas, setNotas] = useState([]); // Estado para almacenar las notas existentes
  const [nuevaNota, setNuevaNota] = useState(""); // Estado para la nueva nota

  // Efecto que se ejecuta al montar el componente para cargar las notas existentes
  useEffect(() => {
    cargarNotas();
  }, []);

  // Función para cargar notas desde la API
  const cargarNotas = async () => {
    try {
      const response = await axios.get(`${url}/notes`);
      setNotas(response.data); // Almacena las notas en el estado
    } catch (error) {
      console.error('Error al obtener las notas:', error);
    }
  };

  // Función para guardar una nueva nota
  const guardarNotas = async () => {
    try {
      const response = await axios.post(`${url}/notes`, { text: nuevaNota }); // Envía la nueva nota a la API
      if (response.status === 201) {
        cargarNotas(); // Recarga la lista de notas
        setNuevaNota(""); // Borra el contenido del área de texto
      }
    } catch (error) {
      console.error('Error al guardar la nota:', error);
    }
  };

  return (
    <Container className="border border-light p-4 custom-rounded-container citas" style={{ width: '90%', borderRadius: '10px', marginTop: '15%' }}>
      <div className='citas'>
        <div className="note-container">
          <h3 className="text-center" style={{ color: 'white' }}>Notas</h3>
          <textarea
            className="note-textarea form-control border-white"
            style={{ resize: 'none', backgroundColor: 'white', color: 'black', border: 'none', height: '150px' }}
            placeholder="Escribe tus notas aquí"
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Button className="rounded-pill mt-3" style={{ border: '1px solid white', color: "black", background: "white" }} onClick={() => guardarNotas()}>Guardar Notas</Button>
      </div>
    </Container>
  );
};

export default Notas;