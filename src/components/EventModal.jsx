import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form, FormGroup, FormSelect, FormControl } from 'react-bootstrap';
import { ApiClient } from '../api/ApiClient';
export const EventModal = ({ onCreate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [patients, setPatients] = useState([])
  const [patient_id, setPatientId] = useState('')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [time, setTime] = useState('')
  const [observations, setObservations] = useState('')
  useEffect(() => {
    ApiClient.patients.all().then((res) => {
      setPatients(res)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let patient = patients.find(x => x.id === patient_id)
    ApiClient.appointments.create({
      patient: patient.first_name+" "+patient.last_name,
      patient_id,
      date,
      time,
      observations
    }).then((res) => {
      onCreate()
      handleClose()
    })

  }

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Nueva Cita
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form id='appointment-form' onSubmit={handleSubmit}>
            <FormGroup>
              <label>Paciente:</label>
              <FormSelect value={patient_id} onChange={({ target }) => setPatientId(target.value)}>
                <option value="">Seleccione...</option>
                {
                  patients.map((patient, index) => (
                    <option key={index} value={patient.id}>{patient.first_name} {patient.last_name}</option>
                  ))
                }
              </FormSelect>
            </FormGroup>
            <FormGroup>
              <label>Fecha:</label>
              <FormControl type='date' onChange={({ target }) => setDate(target.value)} value={date} />
            </FormGroup>
            <FormGroup>
              <label>Hora:</label>
              <FormControl type='time' onChange={({ target }) => setTime(target.value)} value={time} />
            </FormGroup>
            <FormGroup>
              <label>Observaciones:</label>
              <FormControl as='textarea' onChange={({ target }) => setObservations(target.value)} value={observations} />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form='appointment-form'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;