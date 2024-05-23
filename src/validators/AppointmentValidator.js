import moment from 'moment'
import { ApiClient } from '../api/ApiClient'
class AppointmentValidator {

  constructor(data) {
    this.openTime = '08:00'
    this.closeTime = '17:00'
    this.data = data
    this.result = true
    this.errors = []
  }

  isValidTime() {
    const openMoment = moment.utc(`2000-01-01T${this.openTime}:00`);
    const closeMoment = moment.utc(`2000-01-01T${this.closeTime}:00`);
    const providedTime = moment.utc(`2000-01-01T${this.data.time}:00`);
    if (!providedTime.isBetween(openMoment, closeMoment, 'hour', '[]')) {
      this.result = false
      this.errors.push({ time: "La hora de la cita debe estar entre las 8:00 y las 17:00" })
    }
  }
  scheduleConflict() {
    ApiClient.appointments.all({ date: this.data.date, time: this.data.time }).then((res) => {

      if (res.length > 0) {
        console.log("SHOULD BE INVALID")
        this.result = false
        this.errors.push({ date: "Ya existe una cita programada a esa hora" })
      }
    })

  }


  call() {
    this.isValidTime()
    this.scheduleConflict()

    return this.result

  }
}

export default AppointmentValidator

