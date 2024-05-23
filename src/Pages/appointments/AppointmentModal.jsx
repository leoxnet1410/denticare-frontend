import React, { useMemo, useState } from 'react'
import { Modal, Button, Table, FormGroup, FormControl, Form, Col, Row, FormSelect } from 'react-bootstrap'
import { ApiClient } from '../../api/ApiClient'
import { StatusBadge } from '../../components/StatusBadge'
import { PROCEDURES } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const AppointmentModal = ({ appointment, setAppointment, onUpdate }) => {
  const [closingNotes, setClosingNotes] = useState(appointment?.closingNotes || '')
  const [stage, setStage] = useState("event")
  const [procedures, setProcedures] = useState([
    { name: "Tratamiento Principal", cost: 0, qty: 1 }
  ])
  const handleClose = () => {
    setStage('event')
    setAppointment(null)
  }

  const updateAppointment = (status) => {
    const { id, date, patient, time, observations, treatment, patient_id } = appointment
    const data = {
      status,
      closingNotes,
      id, date, patient, time, observations, treatment, patient_id
    }
    ApiClient.appointments.update(appointment.id, data).then(() => {
      onUpdate()
      setAppointment(null)
    })
  }

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

  const totalCost = useMemo(() => {
    return procedures.reduce((acc, obj) => acc + obj.cost, 0)
  }, [procedures])


  return (
    <Modal show={!!appointment} centered >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Detalles de Cita Medica</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          stage === 'event' ? (
            <Table size='sm'>
              <tbody>
                <tr>
                  <th>Paciente</th>
                  <td>{appointment?.patient}</td>
                </tr>
                <tr>
                  <th>Fecha</th>
                  <td>{new Date(appointment?.date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <th>Hora</th>
                  <td>{appointment?.time}</td>
                </tr>
                <tr>
                  <th>Tratamiento</th>
                  <td>{appointment?.treatment}</td>
                </tr>
                <tr>
                  <th>Observaciones</th>
                  <td>{appointment?.observations}</td>
                </tr>
                <tr>
                  <th>Estado</th>
                  <td><StatusBadge status={appointment?.status} /></td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label><b>Nota de cierre</b></label>
                    <FormControl disabled={appointment?.status !== 'Agendada'} as='textarea' value={closingNotes} onChange={({ target }) => setClosingNotes(target.value)}>

                    </FormControl>
                  </td>
                </tr>
                {appointment?.status === 'Agendada' && (
                  <tr>
                    <td>
                      <Button className='w-100 rounded-0' variant='danger' onClick={() => updateAppointment('Cancelada')}>Cancelar Cita</Button>
                    </td>
                    <td>
                      <Button className='w-100 rounded-0' variant='success' onClick={() => setStage('billing')}>Completar Cita</Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          ) :
            (
              <Form>
                <Row className='mb-3'>
                  <Col sm={6}>
                    <FormGroup>
                      <label>Cliente</label>
                      <FormControl size='sm' value={appointment?.patient} disabled />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup>
                      <label>Diagnostico</label>
                      <FormControl size='sm' value={appointment?.treatment} disabled />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>

                  <Col sm={12}>
                    <Table size='sm' style={{ fontSize: 12 }}>
                      <thead>
                        <tr>
                          <th colSpan={4} className='bg-primary text-white text-center'>Procedimientos</th>
                        </tr>
                        <tr>
                          <th>Descripcion</th>
                          <th>Cantidad</th>
                          <th>Costo</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          procedures.map((procedure, index) => {
                            let isMain = procedure.name === "Tratamiento Principal"
                            return (
                              <tr key={index}>
                                <td style={{ width: '70%' }}>
                                  <FormSelect size='sm' value={procedure.name} disabled={isMain} onChange={({ target }) => handleProcedureChange(index, 'name', target.value)} >
                                    <option value="">Seleccione...</option>
                                    {PROCEDURES.map((p, ii) => (
                                      <option key={ii} value={p}>{p}</option>
                                    ))}
                                  </FormSelect>

                                </td>
                                <td><FormControl size='sm' value={procedure.qty} onChange={({ target }) => handleProcedureChange(index, 'qty', parseInt(target.value))} /></td>
                                <td style={{ width: '20%' }} ><FormControl className='text-center' size='sm' value={procedure.cost} onChange={({ target }) => handleProcedureChange(index, 'cost', parseInt(target.value))} /></td>
                                <td >{!isMain && (<Button onClick={() => removeProcedure(index)} size='sm' variant='danger' className='py-0'><FontAwesomeIcon icon='fa fa-trash' /></Button>)}</td>
                              </tr>
                            )
                          }
                          )
                        }

                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={2} className='text-end'>COSTO TOTAL:</th>
                          <th>Bs. {totalCost}</th>
                        </tr>
                        <tr>
                          <td colSpan={4}>
                            <Button size='sm' className='w-100 rounded-0' variant='primary' onClick={() => setProcedures([...procedures, { name: '', cost: 0, qty: 1 }])}>Agregar Procedimiento</Button>
                          </td>
                        </tr>

                      </tfoot>
                    </Table>
                  </Col>
                </Row>


              </Form>
            )

        }


      </Modal.Body>
      <Modal.Footer>
        {stage === 'billing' && <Button size='sm' variant='warning'>Volver</Button>}
        {stage === 'billing' && <Button size='sm' variant='success'>Completar</Button>}
      </Modal.Footer>
    </Modal>
  )
}