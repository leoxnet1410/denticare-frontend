import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Modal, Form, FormGroup, FormSelect, FormControl, Alert } from 'react-bootstrap';
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
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    ApiClient.patients.all().then((res) => {
      setPatients(res)
    })
  }, [])





  const handleSubmit = (e) => {
    e.preventDefault()
    const datetimeString = `${date}T${time}:00`;
    const appointmentDate = new Date(datetimeString);
    const utcDate = appointmentDate.toISOString();
    ApiClient.appointments.create({
      patient_id,
      date: utcDate,
      status: "Agendada",
      observations,
      treatment
    }).then(() => {
      onCreate()
      handleClose()
    })
      .catch((err) => {
        console.log()
        setNotifications(err.response.data)
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
          {
            notifications.length > 0 &&
            <>
              <p className='mb-0'>Se han producido errores:</p>
              {
                notifications.map(x => (
                  <Alert variant='danger' className='border border-3 border-danger border-top-0 border-end-0 border-bottom-0 px-3 py-1 rounded-0' >{x}</Alert>
                ))
              }

            </>
          }
    


          <Form id='appointment-form' onSubmit={handleSubmit}>
            <FormGroup>
              <label>Paciente:</label>
              <FormSelect value={patient_id} onChange={({ target }) => setPatientId(target.value)} required={true}>
                <option value="">Seleccione...</option>
                {
                  patients.map((patient, index) => (
                    <option key={index} value={patient.id}>{patient.name}</option>
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