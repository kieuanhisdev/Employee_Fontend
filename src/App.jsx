import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <>
      <HeaderComponent />
      <div className='container'>
      <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </>
  )
}

export default App
