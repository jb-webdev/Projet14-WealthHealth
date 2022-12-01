/**
 * @author jean-jacques BOERO
 * @file CreateEmployee retourne le main de la page createEmployee
 * @returns {reactElement}
 */
import React from 'react'
import { MainCreateEmployee, MainCreateEmployeeTitle } from './createEmloyeeStyle.js'
import Formulaire from '../../components/formulaire/Formulaire.js'

import { ModalCustom } from 'modal-custom-jb'

import { useDispatch } from 'react-redux'
import { DisplayModal } from '../../utils/store/sliceEmployees/sliceEmployees.js'
import { useSelector } from 'react-redux'

export default function CreateEmployee() {
    /**
     * isOpen => recupere l'etat du state modalForm dans le store
     */
    const isOpen = useSelector((state) => state.StoreState.modalForm)
    const dispatch = useDispatch()
    /**
     * action DisplayModal pour changer l'etat de la modal dans le store
     * @returns bolean !state.StoreState.modalForm
     */
    const dispatModal = () => dispatch(DisplayModal())

    return (
        <MainCreateEmployee>
            <MainCreateEmployeeTitle>Create a new Employee</MainCreateEmployeeTitle>
            <Formulaire />
            <ModalCustom
                openModal={isOpen}
                closeModal={dispatModal}
                message="Création du nouvel employé réussi !"
                messageColor="#93ad18"
                animation="right"
                border="success"
            />
        </MainCreateEmployee>
    )
}