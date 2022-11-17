import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.js'
import AppRouter from './utils/Router/AppRouter.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
