import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Patients } from './Pages/Patients'
import { Appointments } from './Pages/Appointments'
import { BasicLayout } from './Layout/Basic'
import { PatientShow } from './Pages/patients/Show'
import { Billing } from './Pages/billing/Billing'




function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<BasicLayout />}>
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientShow />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/billing" element={<Billing />} />
        </Route>
        {/* <Route path="welcome" element={<Welcome />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/crear_usuario" element={<UserForm />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
