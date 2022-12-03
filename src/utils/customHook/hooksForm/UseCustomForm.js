/**
 * @author jean-jacques BOERO
 * @file useCustomForm hooks custom pour gerer notre formulaire
 */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddEmployee } from "../../store/sliceEmployees/sliceEmployees.js"
import validateInfo from "./validateInfo.js"
import { useNavigate } from "react-router-dom"


const useCustomForm = () => {
    // Store
    const dispatch = useDispatch()
    const workersList = useSelector((state) => state.StoreState.employeesList)
    const workersListLength = workersList.length
    // pour créer un nouvel id lors de l'enregistrement
    const idNewWorker = (workersListLength + 1)
    const [isSubmitting, setIsSubmitting ] = useState(false)
    const [errors, setErrors] = useState({})

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
    // ici on gere la Modal
    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate()

    const closeModal = () => {
        setOpenModal(false)
        setIsSubmitting(false)
        navigate('/employees')
    }
    // ici on verifie qu'il y a une majuscule au début des mots
    function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}
    // ici on écoute l'évenement onChange des inputs
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: strUcFirst(value)
        })
        setIsSubmitting(true)
    }
    // ici on écoute l'évenement onSubmit du formulaire
    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
    }
    // ici prépare notre fonction pour l'enregistrement
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function addWorker() {
        let newPersonnal = [...workersList]
        newPersonnal.push(values)
        dispatch(AddEmployee(newPersonnal))
        if (isSubmitting) {
            setOpenModal(true)
        }
    }
    // ici on enregistre les données dans le store si les conditions sont réunis
    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                addWorker()
            }
        },
        [errors]
    )
    return { 
        handleChange, 
        values, 
        handleSubmit, 
        errors,
        closeModal,
        openModal
    }
}

export default useCustomForm
