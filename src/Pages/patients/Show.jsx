import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row, Table, Tabs, Tab, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ApiClient } from '../../api/ApiClient';
import { StatusBadge } from '../../components/StatusBadge';

export const PatientShow = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [details, setDetails] = useState(null)
  useEffect(() => {
    if (patient) {
      ApiClient.appointments.all({ patient_id: patient.id }).then(res => {
        setAppointments(res)
      })
    }
  }, [patient])
  const handleDetailClick = (a) => {
    if (details && details.id === a.id) {
      setDetails(null)
    }
    else {
      setDetails(a)

    }
  }
  useEffect(() => {
    ApiClient.patients.find(id).then(res => {
      setPatient(res)
    })
  }, [])
  if (patient) {
    return (
      <Row>
        <Col sm={3}>
          <Table size='sm' bordered>
            <thead>
              <tr>
                <th colSpan={2} className='text-center'>Datos Personales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>CI</th>
                <td>{patient.ci}</td>
              </tr>
              <tr>
                <th>Nombre</th>
                <td>{patient.first_name} {patient.last_name}</td>
              </tr>
              <tr>
                <th>Edad</th>
                <td>{patient.age}</td>
              </tr>
              <tr>
                <th>Sexo</th>
                <td>{patient.gender}</td>
              </tr>
            </tbody>

          </Table>

        </Col>
        <Col sm={9}>
          <Tabs>
            <Tab eventKey="appointments" title="Citas" className='rounded-0'>
              <div className='p-2'>
                <Table size="sm" >
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Observaciones</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      appointments.map((appointment, index) => (
                        <>
                          <tr className={details?.id === appointment.id ? 'bg-info' : ""} key={index} onClick={() => handleDetailClick(appointment)}>
                            <td>{appointment.date}</td>
                            <td>{appointment.observations}</td>
                            <td><StatusBadge status={appointment.status} /></td>
                          </tr>
                          {
                            details && details.id === appointment.id && (
                              <>
                                <tr className='border border-info' >
                                  <td className=' p-2 ' >Tratamiento: {details?.treatment}</td>
                                  <td>Status: {details?.status}</td>
                                  <td>Notas: {details?.closingNotes}</td>

                                </tr>

                              </>
                            )
                          }
                        </>
                      ))
                    }

                  </tbody>
                </Table>

              </div>
            </Tab>
            <Tab eventKey="history" title="Historia">

            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
  else return null
}