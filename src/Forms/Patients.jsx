import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, Modal } from "react-bootstrap";
import { ApiClient } from "../services/ApiClient";

export const PatientForm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleFormSubmit = (e) => {
    e.preventDefault()
    let patient = {name,last_name,age}
    ApiClient.patients.create(patient).then((data)=>{
        console.log(data)
        setShow(false)
    })
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nuevo Paciente
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos Del Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="patient-form" onSubmit={handleFormSubmit}>
            <FormGroup className="mb-2">
              <label>Nombre</label>
              <FormControl value={name} onChange={({target})=>setName(target.value)} size="sm" type="text" />
            </FormGroup>
            <FormGroup className="mb-2">
              <label>Apellido</label>
              <FormControl value={last_name} onChange={({target})=>setLastName(target.value)} size="sm" type="text" />
            </FormGroup>
            <FormGroup className="mb-2">
              <label>Edad</label>
              <FormControl value={age} onChange={({target})=>setAge(target.value)} size="sm" type="number" />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' form='patient-form' variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
