/**
 * @author jean-jacques BOERO
 * @file AppRouter router gere les routes de l'application
 */
import React from 'react'
import { Routes, Route } from "react-router-dom"
import EmployeesList from '../../view/employeesList/EmployeesList.js'
import CreateEmployee from '../../view/createEmployee/CreateEmployee.js'
import Error from '../../view/error/Error.js'


export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  )
}
