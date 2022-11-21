/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddEmployee, SubmitFormulaire, DisplayModal} from "../../store/sliceEmployees/sliceEmployees.js"
import validateInfo from "./validateInfo.js"

const useCustomForm = () => {
    const dispatch = useDispatch()
    const workersList = useSelector((state) => state.StoreState.employeesList)
    const isSubmitting = useSelector((state) => state.StoreState.isSubmitForm)
    const workersListLength = workersList.length

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

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
            
        })
        dispatch(SubmitFormulaire(true))
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function addWorker() {
        let newPersonnal = [...workersList]
        newPersonnal.push(values)
        console.log(newPersonnal)
        dispatch(AddEmployee(newPersonnal))
        dispatch(DisplayModal())
    }

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