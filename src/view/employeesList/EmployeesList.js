import React from 'react'
import './employeesList.css'
import TableEmployees from '../../components/tableEmployees/TableEmployees.js'


export default function EmployeesList() {

  return (
    <main className='main-employeesList'>
      <h1 className='titleEmployeesList'>Employees List</h1>
      <TableEmployees />
    </main>
  )
}
