
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Button, Card } from 'react-bootstrap'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import EventModal from '../components/EventModal';
import { ApiClient } from '../api/ApiClient';


const localizer = momentLocalizer(moment)


export const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const messages = { // new
    allDay: 'Todo el dia',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
  };

  const refreshAppointments = () => {
    ApiClient.appointments.all().then((res) => {
      setAppointments(res)
    })

  }

  useEffect(() => {
    refreshAppointments()
  }, [])

  const events = appointments.map((appointment) => {
    const startTime = moment(appointment.date + 'T' + appointment.time);
    const endTime = startTime.clone().add(1, 'hour');
    return (
      {
        start: startTime.toDate(),
        end: endTime.toDate(),
        title: appointment.patient
      }
    )
  })
  const minTime = new Date();
  minTime.setHours(8, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(20, 0, 0);
  return (
    <div >


      <Card className='rounded-0'>
        <Card.Header className='d-flex flex-row justify-content-between align-items-center'>
          <h2>Citas</h2>
          <EventModal onCreate={refreshAppointments} />

        </Card.Header>
        <Card.Body>
       
          <Calendar
            messages={messages}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="week"
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            min={minTime}
            max={maxTime}


            culture='es'
          />
        </Card.Body>
      </Card>

    </div>

  )
}