
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Button, Card } from 'react-bootstrap'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import EventModal from '../components/EventModal';
import { ApiClient } from '../api/ApiClient';
import moment from 'moment'
import 'moment/dist/locale/es';
import { AppointmentModal } from './appointments/AppointmentModal';
moment.locale("es");

const localizer = momentLocalizer(moment)

export const Appointments = () => {
  const [currentEvent, setCurrentEvent] = useState(null)
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
        ...appointment,
        start: startTime.toDate(),
        end: endTime.toDate(),
        title: `${appointment.patient}`

      }
    )
  })

  const eventTypeGetter = (event, start, end, isSelected) => {
    let classValue;
    if (event.status === 'Agendada') {
      classValue = 'bg-primary border-0 rounded-0'
    }
    else if (event.status === 'Completada') {
      classValue = 'bg-success border-0 rounded-0'
    }
    else {
      classValue = 'bg-danger border-0 rounded-0'
    }
    return ({
      className: classValue,
    })
  }

  const CustomMonthEvent = ({ event }) => {
    return (
      <div>
        <p className='mb-0' style={{fontSize:14}}>{event.time} {event.title}</p>

      </div>
    );
  }

  const CustomWeekEvent = ({ event }) => {
    return (
      <div>
        <p className='mb-0' style={{fontSize:14}}>{event.title} - {event.treatment}</p>

      </div>
    );
  }
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
          <AppointmentModal onUpdate={refreshAppointments} appointment={currentEvent} setAppointment={setCurrentEvent} />
        </Card.Header>
        <Card.Body>

          <Calendar
            culture='es'
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
            onSelectEvent={(event) => setCurrentEvent(event)}
            eventPropGetter={eventTypeGetter}
            components={{
              month: {
                event: CustomMonthEvent
              },
              week: {
                event: CustomWeekEvent
              }

            }}


          />
        </Card.Body>
      </Card>

    </div>

  )
}