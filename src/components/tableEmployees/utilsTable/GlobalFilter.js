/**
 * @author jean-jacques BOERO
 * @file GlobalFilter retourne l'input reasearch de la page employeeList
 * @returns {reactElement}
 */
import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { ResearchInputText } from './GlobalFilterStyle'

export const GlobalFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 300)

  return (
    <span >
      <label htmlFor="researchBarTable">Search : </label>
      <ResearchInputText
        id='researchBarTable'
        name='researchBarTable'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }} />
    </span>
  )
}