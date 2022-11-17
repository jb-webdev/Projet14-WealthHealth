import React from 'react'
import './formulaire.css'

import dataSelectJodDepartment from '../../assets/data/dataJobDepartment.js'
import dataState from '../../assets/data/dataState.js'
import useCustomForm from '../../utils/customHook/hooksForm/UseCustomForm.js'
import validateInfo from '../../utils/customHook/hooksForm/validateInfo.js'

export default function Form() {
  const dataOptionsJob = dataSelectJodDepartment
  const data = dataState
  const { handleChange, values, handleSubmit, errors } = useCustomForm(validateInfo)
  return (
    <>
      <form className='modal-form' onSubmit={handleSubmit}>
        <fieldset className='modal-fieldset'>
          <legend className='modal-fieldset-legend'>Information</legend>
          <div className='wrapper-infoPersonal'>
            <div className='wrapperInput'>
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='entry firstName'
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className='text-input-error'>{errors.firstName}</p>}
            </div>
            <div className='wrapperInput'>
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder='entry lastName'
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className='text-input-error'>{errors.lastName}</p>}
            </div>
            <div className='wrapperInput'>
              <label htmlFor="dateOfBirth">Birthday date</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <p className='text-input-error'>{errors.dateOfBirth}</p>}
            </div>
          </div>
          <div className='wrapper-infoPersonal'>
            <div className='wrapperInput'>
              <label htmlFor="entryDate">Entry date</label>
              <input
                type="date"
                id="entryDate"
                name="entryDate"
                value={values.entryDate}
                onChange={handleChange}
              />
              {errors.entryDate && <p className='text-input-error'>{errors.entryDate}</p>}
            </div>
            <div className='wrapperInput'>
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={values.department}
                onChange={handleChange}
              >
                {dataOptionsJob.map((element) => <option key={element.key}>{element.option}</option>)}
              </select>
              {errors.departement && <p className='text-input-error'>{errors.departement}</p>}
            </div>
          </div>
        </fieldset>
        <fieldset className='modal-fieldset'>
          <legend className='modal-fieldset-legend'>Adress</legend>
          <div className='wrapper-infoPersonal'>
            <div className='wrapperInput'>
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                name="street"
                value={values.street}
                onChange={handleChange}
              />
              {errors.street && <p className='text-input-error'>{errors.street}</p>}
            </div>
            <div className='wrapperInput'>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && <p className='text-input-error'>{errors.city}</p>}
            </div>
            <div className='wrapperInput'>
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={values.state}
                onChange={handleChange}
              >
                {data.map((element) => <option key={element.label}>{element.name}</option>)}
              </select>
              {errors.state && <p className='text-input-error'>{errors.state}</p>}
            </div>
            <div className='wrapperInput'>
              <label htmlFor="zipCode">Zip code</label>
              <input
                type="number"
                id="zipCode"
                name="zipCode"
                value={values.zipCode}
                onChange={handleChange}
              />
            {errors.zipCode && <p className='text-input-error'>{errors.zipCode}</p>}
            </div>
          </div>
        </fieldset>
        <div className='wrapper-btn-modal'>
          <button className='btn-create-employe' type='submit'>create employe</button>
        </div>
      </form>
    </>
  )
}
