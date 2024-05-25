import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Card, Table } from "react-bootstrap";
import { PatientForm } from "../Forms/Patient";
import { ApiClient } from "../api/ApiClient";
import { Link } from "react-router-dom";

export const Patients = () => {
  const [patients, setPatients] = useState([]);
  const refresh = useCallback(() => {
    ApiClient.patients.all().then((res) => {
      setPatients(res);
    });
  }, []);

  const deletePatient = (id) => {
    if (window.confirm("¿Estas seguro de eliminar este paciente?")) {
      ApiClient.patients.delete(id).then((res) => {
        refresh();
      });
    }
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <div className="patients">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Pacientes </h2>

        <PatientForm onCreate={refresh} />
      </div>

      <Table size="sm" striped>
        <thead>
          <tr>
            <th>CI</th>
            <th>Nombre</th>

            <th>Edad</th>
            <th>Telefono</th>
            <th style={{ width: "20%" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr>
              <th scope="row">{patient.ci}</th>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.phone}</td>
              <td>
                <ButtonGroup>
                  <Button
                    as={Link}
                    to={`/patients/${patient.id}`}
                    size="sm"
                    variant="outline-success"
                  >
                    <FontAwesomeIcon icon="fa fa-eye" className="me-2" />
                    Ver
                  </Button>
                  <Button size="sm" variant="outline-primary">
                    <FontAwesomeIcon icon="fa fa-pencil" className="me-2" />
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => deletePatient(patient.id)}
                  >
                    <FontAwesomeIcon icon="fa fa-eye" className="me-2" />
                    Eliminar
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
