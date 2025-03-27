import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent'
import ShowDetailEmployeeComponent from './components/ShowDetailEmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} ></Route>
          <Route path='/employees' element={<ListEmployeeComponent />} ></Route>
          <Route path='/add-employee' element={<AddEmployeeComponent />} ></Route>
          <Route path='/show-employee' element={<ShowDetailEmployeeComponent />}> </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
