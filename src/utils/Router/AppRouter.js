import React from 'react'
import { Routes, Route } from "react-router-dom"
import EmployeesList from '../../view/employeesList/EmployeesList.js'
import CreateEmployee from '../../view/createEmployee/CreateEmployee.js'
import Error from '../../view/error/Error.js'


export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="Projet14-WealthHealth/" element={<CreateEmployee />} />
        <Route path="Projet14-WealthHealth/employees" element={<EmployeesList />} />
        <Route path="Projet14-WealthHealth/*" element={<Error />} />
      </Routes>
    </>
  )
}
