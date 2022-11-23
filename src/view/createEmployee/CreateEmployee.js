import React from 'react'
import { MainCreateEmployee, MainCreateEmployeeTitle } from './createEmloyeeStyle.js'
import Formulaire from '../../components/formulaire/Formulaire.js'

import {ModalCustom} from 'modal-custom-jb'

import { useDispatch } from 'react-redux'
import { DisplayModal } from '../../utils/store/sliceEmployees/sliceEmployees.js'
import { useSelector } from 'react-redux'


export  default function CreateEmployee () {
    const isOpen = useSelector((state)=>state.StoreState.modalForm)
    const dispatch = useDispatch()
    const closeModal = () => { dispatch(DisplayModal()) }
    
    return (
        <MainCreateEmployee>
            <MainCreateEmployeeTitle>Create a new Employee</MainCreateEmployeeTitle>
            <Formulaire />
            <ModalCustom 
                isOpen={isOpen} 
                closeModal={closeModal}
                message="Création du nouvel employé réussi !" 
                messageColor="#93ad18" 
                animation="right" 
                border="success"
            />
        </MainCreateEmployee>
    )
}
