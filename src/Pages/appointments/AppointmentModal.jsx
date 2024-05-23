import React, { useState } from 'react'
import { Modal, Button, Table, FormGroup, FormControl } from 'react-bootstrap'
import { ApiClient } from '../../api/ApiClient'
export const AppointmentModal = ({ appointment, setAppointment, onUpdate }) => {
  const [closingNotes, setClosingNotes] = useState(appointment?.closingNotes || '')

  const handleClose = () => {
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


  return (
    <Modal show={!!appointment} >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Detalles de Cita Medica</Modal.Title>
      </Modal.Header>
      <Modal.Body>

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
              <td>{appointment?.status}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <label><b>Nota de cierre</b></label>
                <FormControl disabled={appointment?.status !== 'Agendada'} as='textarea' value={closingNotes} onChange={({ target }) => setClosingNotes(target.value)}>

                </FormControl>
              </td>
            </tr>
            <tr>
              <td>
                <Button className='w-100 rounded-0' variant='danger' onClick={() => updateAppointment('Cancelada')}>Cancelar Cita</Button>
              </td>
              <td>
                <Button className='w-100 rounded-0' variant='success' onClick={() => updateAppointment('Completada')}>Completar Cita</Button>
              </td>
            </tr>
          </tbody>
        </Table>

      </Modal.Body>

    </Modal>
  )
}