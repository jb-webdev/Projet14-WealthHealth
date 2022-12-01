import { createSlice } from "@reduxjs/toolkit"

export const sliceEmployees = createSlice({
    name: "sliceEmployees",
    // etat de initial de non states dans l'application
    initialState:
    {
        employeesList: [],
        modalForm: false,
        isSubmitForm: false,
    },
    // reducer avec les actions necessaire pour modifier non etats
    reducers: {
        AddEmployee: (state, action) => {
            state.employeesList = action.payload
        },
        DisplayModal: (state, action) => {
            state.modalForm = !state.modalForm
            state.isSubmitForm = false
        },
        SubmitFormulaire:  (state, action) => {
            state.isSubmitForm = action.payload
        },
    }
})

export const { AddEmployee } = sliceEmployees.actions
export const { DisplayModal } = sliceEmployees.actions
export const { SubmitFormulaire } = sliceEmployees.actions


export default sliceEmployees.reducer