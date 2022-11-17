import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.js'
import AppRouter from './utils/Router/AppRouter.js'

import { useSelector, useDispatch } from 'react-redux'
import { AddEmployee } from './utils/store/sliceEmployees/sliceEmployees.js'
import dataEmployees from './assets/data/dataEmployees.js'

function App() {
  const dispatch = useDispatch()
  const employeesListStore = useSelector((state) => state.StoreState.employeesList)

  if (employeesListStore.length === 0){
    dispatch(AddEmployee(dataEmployees))
  }

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
