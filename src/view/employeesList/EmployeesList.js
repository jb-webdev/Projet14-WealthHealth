import React from 'react'
import './employeesList.css'
import TableList from '../../components/tableList/TableList.js'

export default function EmployeesList() {

  return (
    <main className='main-employeesList'>
      <h1 className='titleEmployeesList'>Employees List</h1>
      <TableList />
    </main>
  )
}
