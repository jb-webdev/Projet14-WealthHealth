import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import './GlobalFilter.css'

export const GlobalFilter = ({filter, setFilter}) => {

  const [value, setValue] = useState(filter)


  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 500)

  return (
    <span className='researchWrapper'>
        Search: {' '}
        <input 
        className='researchInputText'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }} />
    </span>
  )
}
