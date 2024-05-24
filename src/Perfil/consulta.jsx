import React, { useState, useEffect } from 'react';
import { Table, Button, Dropdown } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Consulta = () => {
  const location = useLocation();
  const pacienteSeleccionado = location.state?.paciente; // Recibe el paciente del estado

  const [tratamientosOdontologia, setTratamientosOdontologia] = useState([
    { nombre: 'Limpieza', caries: null, nivel: '', lugar: '', precio: 50 },
    { nombre: 'Extracción', caries: null, nivel: '', lugar: '', precio: 80 },
    { nombre: 'Empaste', caries: null, nivel: '', lugar: '', precio: 100 },
    { nombre: 'Tratamiento de Conducto', caries: null, nivel: '', lugar: '', precio: 160 },
    { nombre: 'Caries', caries: null, nivel: '', lugar: '', precio: 160 },
    { nombre: 'Gingivitis', caries: null, nivel: '', lugar: '', precio: 120 },
    { nombre: 'Periodontitis', caries: null, nivel: '', lugar: '', precio: 200 },
    { nombre: ' Abscesos Dental', caries: null, nivel: '', lugar: '', precio: 150 },
    { nombre: ' Candidiasis Oral', caries: null, nivel: '', lugar: '', precio: 100 },
    { nombre: ' Herpes Labial', caries: null, nivel: '', lugar: '', precio: 80 },
    { nombre: ' Estomatitis', caries: null, nivel: '', lugar: '', precio: 90 },
    { nombre: ' Úlceras Bucales', caries: null, nivel: '', lugar: '', precio: 70 },
    { nombre: ' Halitosis', caries: null, nivel: '', lugar: '', precio: 60 },
    { nombre: ' Leucoplasia', caries: null, nivel: '', lugar: '', precio: 130 },
    { nombre: 'Papiloma Escamoso', caries: null, nivel: '', lugar: '', precio: 140 },
    { nombre: ' Xerostomía', caries: null, nivel: '', lugar: '', precio: 110 },
    { nombre: ' Llagas por Prótesis', caries: null, nivel: '', lugar: '', precio: 100 },
    { nombre: 'Prevención de Endocarditis Infecciosa', caries: null, nivel: '', lugar: '', precio: 160 },
    
    
  ]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [total, setTotal] = useState(0);

  const handleCariesChange = (index, value) => {
    const nuevosTratamientos = [...tratamientosOdontologia];
    nuevosTratamientos[index].caries = value;
    setTratamientosOdontologia(nuevosTratamientos);
  };

  const handlePrecioChange = (index, value) => {
    const nuevosTratamientos = [...tratamientosOdontologia];
    nuevosTratamientos[index].precio = parseInt(value) || 0;
    setTratamientosOdontologia(nuevosTratamientos);
    calcularTotal(nuevosTratamientos); // Llama a calcularTotal después de actualizar los precios
  };

  const handleNivelChange = (index, value) => {
    const nuevosTratamientos = [...tratamientosOdontologia];
    nuevosTratamientos[index].nivel = value;
    setTratamientosOdontologia(nuevosTratamientos);
  };

  const handleLugarChange = (index, value, lugar) => {
    const nuevosTratamientos = [...tratamientosOdontologia];
    nuevosTratamientos[index][lugar] = value;
    setTratamientosOdontologia(nuevosTratamientos);
  };

  const handleFechaChange = (date) => {
    setFechaSeleccionada(date);
  };

  const calcularTotal = (tratamientos) => {
    const total = tratamientos.reduce((acc, tratamiento) => acc + (tratamiento.precio || 0), 0);
    setTotal(total);
  };

  useEffect(() => {
    calcularTotal(tratamientosOdontologia); // Calcular el total al cargar el componente
  }, [tratamientosOdontologia]);

  const handleGuardarConsulta = async () => {
    try {
      const consulta = {
        paciente: pacienteSeleccionado,
        tratamientos: tratamientosOdontologia,
        fecha: fechaSeleccionada.toLocaleDateString(),
      };
      await axios.post('http://localhost:3200/consultas', consulta);
      alert('Consulta guardada exitosamente');
    } catch (error) {
      console.error('Error al guardar la consulta:', error);
    }
  };

  const dientesPorCuadrante = {
    SuperiorDerecho: [
      'Incisivo central superior derecho',
      'Incisivo lateral superior derecho',
      'Canino superior derecho',
      'Primer premolar superior derecho',
      'Segundo premolar superior derecho',
      'Primer molar superior derecho',
      'Segundo molar superior derecho',
      'Tercer molar superior derecho (muela del juicio)',
    ],
    SuperiorIzquierdo: [
      'Incisivo central superior izquierdo',
      'Incisivo lateral superior izquierdo',
      'Canino superior izquierdo',
      'Primer premolar superior izquierdo',
      'Segundo premolar superior izquierdo',
      'Primer molar superior izquierdo',
      'Segundo molar superior izquierdo',
      'Tercer molar superior izquierdo (muela del juicio)',
    ],
    InferiorIzquierdo: [
      'Incisivo central inferior izquierdo',
      'Incisivo lateral inferior izquierdo',
      'Canino inferior izquierdo',
      'Primer premolar inferior izquierdo',
      'Segundo premolar inferior izquierdo',
      'Primer molar inferior izquierdo',
      'Segundo molar inferior izquierdo',
      'Tercer molar inferior izquierdo (muela del juicio)',
    ],
    InferiorDerecho: [
      'Incisivo central inferior derecho',
      'Incisivo lateral inferior derecho',
      'Canino inferior derecho',
      'Primer premolar inferior derecho',
      'Segundo premolar inferior derecho',
      'Primer molar inferior derecho',
      'Segundo molar inferior derecho',
      'Tercer molar inferior derecho (muela del juicio)',
    ],
  };

  return (
    <div className="consulta-container">
      <div className="consulta-header">
        <div>
          Consulta para {pacienteSeleccionado ? `${pacienteSeleccionado.first_name} ${pacienteSeleccionado.last_name}` : ''}
        </div>
        <div className="date-picker-wrapper">
          <DatePicker selected={fechaSeleccionada} onChange={handleFechaChange} dateFormat="dd/MM/yyyy" />
        </div>
      </div>
      <div className="table-container">
        <Table bordered hover className="table table-sm table-striped table-bordered consulta-table">
          <thead>
            <tr>
              <th>Tratamiento</th>
              <th>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Sí
              </th>
              <th>
                <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} /> No
              </th>
              <th>Nivel</th>
              <th> Superior Derecho</th>
              <th> Superior Izquierdo</th>
              <th> Inferior Derecho</th>
              <th> Inferior Izquierdo</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {tratamientosOdontologia.map((tratamiento, index) => (
              <tr key={index}>
                <td>{tratamiento.nombre}</td>
                <td>
                  <input
                    type="radio"
                    value="sí"
                    checked={tratamiento.caries === 'sí'}
                    onChange={() => handleCariesChange(index, 'sí')}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    value="no"
                    checked={tratamiento.caries === 'no'}
                    onChange={() => handleCariesChange(index, 'no')}
                  />
                </td>
                <td>
                  <Dropdown onSelect={(e) => handleNivelChange(index, e)}>
                    <Dropdown.Toggle variant="secondary">
                      {tratamiento.nivel || 'Seleccionar'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Normal">Normal</Dropdown.Item>
                      <Dropdown.Item eventKey="Medio">Medio</Dropdown.Item>
                      <Dropdown.Item eventKey="Grave">Grave</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                {['SuperiorDerecho', 'SuperiorIzquierdo', 'InferiorDerecho', 'InferiorIzquierdo'].map(lugar => (
                  <td key={lugar}>
                    <Dropdown onSelect={(e) => handleLugarChange(index, e, `lugar${lugar}`)}>
                      <Dropdown.Toggle variant="secondary">
                        {tratamiento[`lugar${lugar}`] || 'Cuadrantes'}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {dientesPorCuadrante[lugar].map((diente, num) => (
                          <Dropdown.Item key={`${diente}`} eventKey={`${diente}`}>{`${diente}`}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                ))}
                <td>
                  <input
                    type="number"
                    value={tratamiento.precio}
                    onChange={(e) => handlePrecioChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="mt-2">Total: ${total}</div>
        <Button variant="success" onClick={handleGuardarConsulta}>Guardar Consulta</Button>
      </div>
    </div>
  );
};

export default Consulta;