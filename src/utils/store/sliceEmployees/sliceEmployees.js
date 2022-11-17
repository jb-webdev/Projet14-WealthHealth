import { createSlice } from "@reduxjs/toolkit"

export const sliceEmployees = createSlice({
    name: "sliceEmployees",
    initialState:
    {
        employeesList: [],
    },

    reducers: {
        AddEmployee: (state, action) => {
            state.employeesList = action.payload
        },
    }
})

export const { AddEmployee } = sliceEmployees.actions


export default sliceEmployees.reducer