/**
 * @author jean-jacques BOERO
 * @file CreateEmployee retourne le main de la page createEmployee
 * @returns {reactElement}
 */

import { MainCreateEmployee, MainCreateEmployeeTitle } from './createEmloyeeStyle.js'
import Formulaire from '../../components/formulaire/Formulaire.js'

export default function CreateEmployee() {
    return (
        <MainCreateEmployee>
            <MainCreateEmployeeTitle>Create a new Employee</MainCreateEmployeeTitle>
            <Formulaire /> 
        </MainCreateEmployee>
    )
}