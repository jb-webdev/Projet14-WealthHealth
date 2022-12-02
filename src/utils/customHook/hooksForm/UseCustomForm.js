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
    // for new id
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
    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate()

    const closeModal = () => {
        setOpenModal(false)
        setIsSubmitting(false)
        navigate('/employees')
    }
    
    function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: strUcFirst(value)
        })
        setIsSubmitting(true)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function addWorker() {
        let newPersonnal = [...workersList]
        newPersonnal.push(values)
        dispatch(AddEmployee(newPersonnal))
        if (isSubmitting) {
            setOpenModal(true)
        }
    }
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
