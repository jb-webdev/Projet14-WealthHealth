import React from 'react'

import Navbar from './components/navbar/Navbar.js'
import AppRouter from './utils/Router/AppRouter.js'

import { useSelector, useDispatch } from 'react-redux'
import { AddEmployee } from './utils/store/sliceEmployees/sliceEmployees.js'

import MOCK_DATA from './assets/data/MOCK_DATA.json'

function App() {

  const dispatch = useDispatch()
  const employeesListStore = useSelector((state) => state.StoreState.employeesList)

  if (employeesListStore.length === 0) {
    dispatch(AddEmployee(MOCK_DATA))
  }

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App