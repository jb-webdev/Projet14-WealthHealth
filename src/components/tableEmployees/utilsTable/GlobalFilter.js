import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { ResearchInputText } from './GlobalFilterStyle'

export const GlobalFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter)


  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 500)

  return (
    <span >
      Search: {' '}
      <ResearchInputText
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }} />
    </span>
  )
}