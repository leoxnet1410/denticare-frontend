import React, { useState, useEffect } from 'react';
import { Form, Modal, FormGroup, FormControl, FormSelect, Nav, Button } from 'react-bootstrap';
import { ApiClient } from '../../api/ApiClient';
import { PAYMENT_TYPES } from '../../constants';

export const PaymentForm = () => {
  const [show, setShow] = useState(false)
  const [patients, setPatients] = useState([])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [type, setType] = useState("Efectivo")
  const [amount, setAmount] = useState(0)
  const [patient_id, setPatientId] = useState("")
  const handleClose = () => {
    setShow(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ApiClient.payments.create({ patient_id, date, type, amount }).then(() => {
      handleClose()
    })
  }
  useEffect(() => {
    ApiClient.patients.all().then(res => setPatients(res))
  }, [])
  return (
    <>
      <Nav.Link onClick={() => setShow(true)}>Registrar Pago</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Pago</Modal.Title>
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
              <label>Monto:</label>
              <FormControl type='number' onChange={({ target }) => setAmount(parseInt(target.value))} value={amount} />
            </FormGroup>
            <FormGroup>
              <label>Tipo:</label>
              <FormSelect value={type} onChange={({ target }) => setType(target.value)} required={true}>
                <option value="">Seleccione...</option>
                {
                  PAYMENT_TYPES.map((payment_type, index) => (
                    <option key={index} value={payment_type}>{payment_type}</option>
                  ))
                }
              </FormSelect>
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
  )
}