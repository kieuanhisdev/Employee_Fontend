import React, { useEffect, useState } from 'react'
import { ListEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployee] = useState([])

    const navigator = useNavigate()

    useEffect(()=> {
        ListEmployee().then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);

        }
        )
    }, [])

    function addNewEmployee(){
        navigator('/add-employee')
    }

    return (
        <>
        <div className='container'>
            <h2 className='text-center'>List Of Employee</h2>
            <button type="button" class="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Fisrt Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default ListEmployeeComponent