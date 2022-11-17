import React from 'react'
import './createEmployee.css'
import Formulaire from '../../components/formulaire/Formulaire.js'

import { useSelector } from 'react-redux'

export default function CreateEmployee() {

    const testOpenModal = useSelector((state)=> state.StoreState.employeesList)

    console.log(testOpenModal)

    return (
        <main className='main-createEmployee'>
            <h1 className='title-createEmployee'>Create a new Employee</h1>
            <Formulaire />
        </main>
    )
}
