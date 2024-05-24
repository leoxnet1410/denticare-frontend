import React, { useEffect, useState,useMemo } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row, Table, Tabs, Tab, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ApiClient } from '../../api/ApiClient';
import { StatusBadge } from '../../components/StatusBadge';

export const PatientShow = () => {
  const { id } = useParams();
  
  const [patient, setPatient] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [billings, setBillings] = useState([])
  const [payments, setPayments] = useState([])
  const [details, setDetails] = useState(null)
  useEffect(() => {
    ApiClient.patients.find(id).then(res => {
      setPatient(res)
    })
    ApiClient.bills.all({ patient_id: id }).then(res => {
      setBillings(res)
    })
    ApiClient.payments.all({ patient_id: id }).then(res => {
      setPayments(res)
    })
  }, [])
  useEffect(() => {
    if (patient) {
      console.log(patient.id)
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


  let saldo = useMemo(()=>{
    let total = 0
    billings.forEach(billing=>{
      total-=billing.totalCost
    })
    payments.forEach(payment=>{
      total+=payment.amount
    })
    return total
  },[payments,billings])
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
                <th>Nombres</th>
                <td>{patient.first_name} {patient.last_name}</td>
              </tr>
              <tr>
                <th>Apellidos</th>
                <td>{patient.last_name}</td>
              </tr>
              <tr>
                <th>Edad</th>
                <td>{patient.age}</td>
              </tr>
              <tr>
                <th>Sexo</th>
                <td>{patient.gender}</td>
              </tr>
              <tr>
                <th>Estado de cuenta</th>
                <th>{saldo}</th>
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
                            <td>{new Date(appointment.date).toLocaleDateString()}</td>
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
            <Tab eventKey="history" title="Facturacion">
              <div className="p-2">
                <Row>
                  <Col sm={6}>
                    <Card>
                      <Card.Header>Servicios</Card.Header>
                      <Card.Body>
                        <Table size='sm'>
                          <thead>
                            <tr>
                              <th>Fecha</th>
                              <th>Descripcion</th>
                              <th>Monto</th>

                            </tr>
                          </thead>
                          <tbody>
                            {
                              billings.map((billing, index) => (
                                <tr key={index}>
                                  <td>{new Date(billing.date).toLocaleDateString()}</td>
                                  <td>{billing.description}</td>
                                  <td>{billing.total}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col sm={6}>
                    <Card>
                      <Card.Header>Pagos Realizados</Card.Header>
                      <Card.Body>
                        <Table size='sm'>
                          <thead>
                            <tr>
                              <th>Fecha</th>
                              <th>Monto</th>
                              <th>Tipo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              payments.map((payment, index) => (
                                <tr>
                                  <td>{new Date(payment.date).toLocaleDateString()}</td>
                                  <td>{payment.amount}</td>
                                  <td>{payment.type}</td>
                                </tr>
                              ))
                            }

                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
  else return null
}