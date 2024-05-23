import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Modal, Form, FormGroup, FormSelect, FormControl } from 'react-bootstrap';
import { ApiClient } from '../api/ApiClient';
import AppointmentValidator from '../validators/AppointmentValidator';
import { TREATMENTS } from '../constants';
export const EventModal = ({ onCreate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [patients, setPatients] = useState([])
  const [patient_id, setPatientId] = useState('')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [time, setTime] = useState('')
  const [observations, setObservations] = useState('')
  const [treatment, setTreatment] = useState("")
  useEffect(() => {
    ApiClient.patients.all().then((res) => {
      setPatients(res)
    })
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    let patient = patients.find(x => x.id === patient_id)
    let validator = new AppointmentValidator({ date, time })
    validator.call()
    if (validator.result) {
      console.log(validator.result)
      ApiClient.appointments.create({
        patient: patient.first_name + " " + patient.last_name,
        patient_id,
        date,
        time,
        status: "Agendada",
        observations,
        treatment
      }).then(() => {
        onCreate()
        handleClose()
      })
    }
    else {
      console.log(validator.errors)
    }




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
              <FormSelect value={patient_id} onChange={({ target }) => setPatientId(target.value)} required={true}>
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
              <label>Tratamiento:</label>
              <FormSelect onChange={({ target }) => setTreatment(target.value)} value={treatment}>
                <option value="">Seleccione...</option>
                {TREATMENTS.map((treatment, index) => (
                  <option key={index} value={treatment}>{treatment}</option>
                ))}
              </FormSelect>
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