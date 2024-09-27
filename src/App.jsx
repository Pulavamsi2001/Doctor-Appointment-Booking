import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import MyAppointments from './Pages/MyAppointments'
import Contact from './Pages/Contact'
import Myprofile from './Pages/Myprofile'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] ' >

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/appointment/docID' element={<Appointment />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<Myprofile />} />


      </Routes>

    </div>
  )
}

export default App