import React, { useMemo, useState } from 'react'
import { Modal, Button, Table, FormGroup, FormControl, Form, Col, Row, FormSelect, Card } from 'react-bootstrap'
import { ApiClient } from '../../api/ApiClient'
import { StatusBadge } from '../../components/StatusBadge'
import { PROCEDURES } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const AppointmentModal = ({ appointment, setAppointment, onUpdate }) => {
  const [closingNotes, setClosingNotes] = useState(appointment?.closingNotes || '')
  const [stage, setStage] = useState("event")
  const [procedures, setProcedures] = useState([{ name: "Consulta", price: 0 }])
  const handleClose = () => {
    setStage('event')
    setAppointment(null)
  }

  const totalCost = useMemo(() => {
    return procedures.reduce((acc, obj) => acc + obj.price, 0)
  }, [procedures])

  const updateAppointment = (status) => {

    const data = {
      status,
      closingNotes,

    };

    ApiClient.appointments.update(appointment.id, { appointment: data, procedures: procedures }).then(() => {
      onUpdate()
      handleClose()
    })

  };

  const handleProcedureChange = (index, attribute, value) => {

    let newProcedures = [...procedures]
    newProcedures[index][attribute] = value
    setProcedures(newProcedures)
  }

  const removeProcedure = (index) => {
    let newProcedures = [...procedures]
    newProcedures.splice(index, 1)
    setProcedures(newProcedures)
  }







  return (
    <Modal size='xl' show={!!appointment} centered >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Cita Medica</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card className='border border-info rounded-0 h-100'>
              <Card.Header className='bg-info'>Detalles de cita</Card.Header>
              <Card.Body>
                <Table size='sm' style={{ fontSize: 14 }}>
                  <tbody>
                    <tr>
                      <th>Paciente</th>
                      <td>{appointment?.patient_name}</td>
                    </tr>
                    <tr>
                      <th>Fecha</th>
                      <td>{new Date(appointment?.date).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <th>Hora</th>

                      <td>{new Date(appointment?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</td>
                    </tr>

                    <tr>
                      <th>Observaciones</th>
                      <td>{appointment?.observations}</td>
                    </tr>
                    <tr>
                      <th>Estado</th>
                      <td><StatusBadge status={appointment?.status} /></td>
                    </tr>


                  </tbody>
                </Table>
              </Card.Body>
            </Card>

          </Col>
          {
            appointment?.status === 'Agendada' && (
              <Col sm={6}>
                <Card className='border border-primary rounded-0 h-100'>
                  <Card.Header className='bg-primary text-white'>Procedimientos Realizados</Card.Header>
                  <Card.Body>
                    <Form>

                      <Row>

                        <Col>
                          <Table size='sm' style={{ fontSize: 12 }}>
                            <thead>

                              <tr>
                                <th>Descripcion</th>

                                <th>Precio</th>
                              </tr>
                            </thead>
                            <tbody>


                              {
                                procedures.map((procedure, index) => {

                                  return (
                                    <tr key={index}>
                                      <td style={{ width: '70%' }}>

                                        <FormSelect size='sm' value={procedure.name} onChange={({ target }) => handleProcedureChange(index, 'name', target.value)} >
                                          <option value="">Seleccione....</option>
                                          {PROCEDURES.map((p, ii) => {

                                            return <option key={ii} value={p}>{p}</option>
                                          })}
                                        </FormSelect>

                                      </td>

                                      <td style={{ width: '20%' }} ><FormControl className='text-center' size='sm' value={procedure.price} onChange={({ target }) => handleProcedureChange(index, 'price', parseInt(target.value))} /></td>
                                      <td ><Button onClick={() => removeProcedure(index)} size='sm' variant='danger' className='py-0'><FontAwesomeIcon icon='fa fa-trash' /></Button></td>
                                    </tr>
                                  )
                                }
                                )
                              }
                              <tr>
                                <td>
                                  <Button size='sm' className='rounded-0 d-flex align-items-center' variant='primary' onClick={() => setProcedures([...procedures, { name: '', cost: 0, price: 1 }])}><FontAwesomeIcon icon='fas fa-plus' className='me-2' />Agregar</Button>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th className='text-end'>COSTO TOTAL:</th>
                                <th className='text-center'>Bs. {totalCost}</th>
                              </tr>


                            </tfoot>
                          </Table>
                        </Col>
                      </Row>


                    </Form>
                  </Card.Body>
                </Card>

              </Col>
            )
          }

        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button size='sm' variant='danger' onClick={() => updateAppointment("Cancelada")}>Cancelar Cita</Button>
        <Button size='sm' variant='success' onClick={() => updateAppointment('Completada')}>Completar</Button>
      </Modal.Footer>
    </Modal>
  )
}