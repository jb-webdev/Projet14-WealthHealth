import { configureStore } from '@reduxjs/toolkit'
import sliceEmployees from './sliceEmployees/sliceEmployees.js'

export const store = configureStore({
  reducer: {
    StoreState: sliceEmployees
  },
}) 