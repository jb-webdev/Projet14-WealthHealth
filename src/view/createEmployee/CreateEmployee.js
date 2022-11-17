import React from 'react'
import './createEmployee.css'
import Formulaire from '../../components/formulaire/Formulaire.js'

import ModalCustomP14 from '../../components/modal/ModalCustomP14'

import { useDispatch } from 'react-redux'
import {DisplayModal} from '../../utils/store/sliceEmployees/sliceEmployees.js'
import { useSelector } from 'react-redux'

export  default function CreateEmployee () {
    const isOpen = useSelector((state)=>state.StoreState.modalForm)
    
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(DisplayModal())
    }

    return (
        <main className='main-createEmployee'>
            <h1 className='title-createEmployee'>Create a new Employee</h1>
            <Formulaire />
            {isOpen ? <ModalCustomP14 message="Création du nouvel employé réussi !" closeModal={closeModal}/> : ""}
        </main>
    )
}
