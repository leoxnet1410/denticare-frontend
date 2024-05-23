import React, { useState } from 'react';
import { Button, FormGroup, Modal, Form, Row, Col, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApiClient } from '../api/ApiClient';

export const PatientForm = ({ onCreate }) => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [ci, setCi] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    ApiClient.patients.create({ first_name, last_name, ci, age, phone, gender }).then(res => {
      console.log("Paciente creado con exito")
      onCreate()
      handleClose()
    })
      .finally(() => {
        handleClose()

      })
  }
  return (
    <>
      <Button size='sm' variant="primary" onClick={handleShow} className='d-flex flex-row justify-content-center align-items-center'><FontAwesomeIcon icon='fa fa-plus' className='me-2' />Agregar Paciente</Button>

      <Modal show={show} onHide={handleClose} className='rounded-0' centered>
        <Modal.Header closeButton className='bg-success text-white rounded-0'>
          <Modal.Title>Agregar Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="patient-form">
            <Row>
              <Col sm={12}>
                <FormGroup className='mb-2'>
                  <label>Nombres</label>
                  <Form.Control value={first_name} onChange={({ target }) => setFirstname(target.value)} size='sm' type='text' />
                </FormGroup>
              </Col>
              <Col sm={12}>
                <FormGroup className='mb-2'>
                  <label>Apellidos</label>
                  <Form.Control value={last_name} onChange={({ target }) => setLastname(target.value)} size='sm' type='text' />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className='mb-2'>
                  <label>CI</label>
                  <Form.Control value={ci} onChange={({ target }) => setCi(target.value)} size='sm' type='text' />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className='mb-2'>
                  <label>Edad</label>
                  <Form.Control size='sm' type='number' value={age} onChange={({ target }) => setAge(target.value)} />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className='mb-2'>
                  <label>Sexo</label>
                  <FormSelect value={gender} onChange={({ target }) => setGender(target.value)} size='sm' type='text'>
                    <option value="">Select...</option>
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                  </FormSelect>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className='mb-2'>
                  <label>Telefono</label>
                  <Form.Control value={phone} onChange={({ target }) => setPhone(target.value)} size='sm' type='number' />
                </FormGroup>
              </Col>
            </Row>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" form="patient-form" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );


}