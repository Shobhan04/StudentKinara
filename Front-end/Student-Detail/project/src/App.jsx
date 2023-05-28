import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './StudentCrud/Home'
import DisplayStudent from './StudentCrud/DisplayStudent'
import StudentRegistrationForm from './StudentCrud/StudentRegistrationForm'
import Page from './StudentCrud/Page'






const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Home/>
      <Routes>
      
      
        <Route path='/register' element={<StudentRegistrationForm/>}></Route>
        <Route path='/display' element={<DisplayStudent/>}></Route>
        <Route path='/page' element={<Page/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App