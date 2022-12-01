/**
 * @author jean-jacques BOERO
 * @file useCustomForm hooks custom pour gerer notre formulaire
 */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddEmployee, SubmitFormulaire, DisplayModal} from "../../store/sliceEmployees/sliceEmployees.js"
import validateInfo from "./validateInfo.js"

const useCustomForm = () => {
    const dispatch = useDispatch()
    // on recupere l'etat de employeesList dans le store
    const workersList = useSelector((state) => state.StoreState.employeesList)
    // on recupere l'etat de isSubmitForm dans le store
    const isSubmitting = useSelector((state) => state.StoreState.isSubmitForm)
    const workersListLength = workersList.length
    // on gere le nouvel id pour crée notre nouvel employé
    const idNewWorker = (workersListLength + 1)

    const [values, setValues] = useState({
        id: `${idNewWorker}`,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        entryDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    })
    
    const [errors, setErrors] = useState({})
    // function qui ajoute les majuscules
    function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}
    // on ecoute les changement dans les inputs des formulaires
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: strUcFirst(value)
        })
        dispatch(SubmitFormulaire(true))
    }

    // on gere la validation du formulaire avant l"envoi
    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
    }
    // function pour ajouter le nouvel utilisateur 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function addWorker() {
        let newPersonnal = [...workersList]
        newPersonnal.push(values)
        //console.log(newPersonnal)
        dispatch(AddEmployee(newPersonnal))
        dispatch(DisplayModal())
    }
    // Ici si les conditions son validées on enregistre notre nouvel employé
    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                addWorker()
            }
        },
        [errors]
    )
    return { handleChange, values, handleSubmit, errors }
}

export default useCustomForm
