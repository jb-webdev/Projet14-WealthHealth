import React from 'react'
import TableEmployees from '../../components/tableEmployees/TableEmployees.js'
import { MainList, TitleEmployeesList } from './employeesListStyle.js'

export default function EmployeesList() {

  return (
    <MainList>
      <TitleEmployeesList className='titleEmployeesList'>Employees List</TitleEmployeesList>
      <TableEmployees />
    </MainList>
  )
}