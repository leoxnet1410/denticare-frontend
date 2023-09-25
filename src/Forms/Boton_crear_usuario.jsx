import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";

export const Boton_crear_usuarioyarn = () => {
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [puesto, setPuesto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    
    setShow(false);
  };

  return (
    <>
      <Button
        variant=""
        style={{ background: "white" }}
        onClick={() => setShow(true)}
        className="rounded-pill"
      >
        Crear Usuario
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className="citas" closeButton>
          <Modal.Title className="text-white">Ingresar Datos del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="puesto">
              <Form.Label>Puesto</Form.Label>
              <Form.Control
                type="text"
                value={puesto}
                onChange={(e) => setPuesto(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              className="citas"
              style={{ marginTop: "5%", color: "white" }}
              type="submit"
            >
              Guardar Usuario
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="citas" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};