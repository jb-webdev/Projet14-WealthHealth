/**
 * @author jean-jacques BOERO
 * @file sliceEmployees reducers
 */
import { createSlice } from "@reduxjs/toolkit"

export const sliceEmployees = createSlice({
    name: "sliceEmployees",
    // etat de initial de non states dans l'application
    initialState:
    {
        employeesList: [],
    },
    // reducer avec les actions necessaire pour modifier non etats
    reducers: {
        AddEmployee: (state, action) => {
            state.employeesList = action.payload
        },
    }
})

export const { AddEmployee } = sliceEmployees.actions
export const { DisplayModal } = sliceEmployees.actions


export default sliceEmployees.reducer