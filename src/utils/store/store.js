/**
 * @author jean-jacques BOERO
 * @file store de l'application
 */
import { configureStore } from '@reduxjs/toolkit'
import sliceEmployees from './sliceEmployees/sliceEmployees.js'

export const store = configureStore({
  reducer: {
    StoreState: sliceEmployees
  },
}) 