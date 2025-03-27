import React, { useState } from 'react'

const AddEmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  function saveEmployee(e) {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      email,
      password
    }
    console.log(employee)
  }


  return (
    <>
      <div className="container">
        <h2 className='text-center'>Add Employee</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name='firstName'
              id='firstName'
              value={firstName} 
              onChange={handleFirstName} 
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name='lastName'
              id='lastName'
              value={lastName} 
              onChange={handleLastName}
              placeholder="Enter Last Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name='email'
              id='email'
              value={email} 
              onChange={handleEmail} 
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name='password'
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />
          </div>
          
          <button type="submit" className="btn btn-primary " onClick={saveEmployee}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default AddEmployeeComponent