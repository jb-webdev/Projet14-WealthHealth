/**
 * @author jean-jacques BOERO
 * @file Form retourne le formulaire de création d'emloyé'
 * @returns {reactElement}
 */
import React from 'react'
import { FormCreateEmployee, Formfieldset, FormLegend, FormWrapperInfo, FormWrapperInput, FormLabel, FormInput, FormSelect, FormWrapperButton, FormMessageError, FormButton, } from './formulaireStyle'

import { ModalCustom } from 'modal-custom-jb'

import dataSelectJodDepartment from '../../assets/data/dataJobDepartment.js'
import dataState from '../../assets/data/dataState.js'
import useCustomForm from '../../utils/customHook/hooksForm/UseCustomForm.js'
import validateInfo from '../../utils/customHook/hooksForm/validateInfo.js'

export default function Form() {
  const dataOptionsJob = dataSelectJodDepartment
  const data = dataState

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    closeModal,
    openModal
  } = useCustomForm(validateInfo)

  return (
    <>
      <FormCreateEmployee onSubmit={handleSubmit} >
        <Formfieldset>
          <FormLegend>Information</FormLegend>
          <FormWrapperInfo>
            < FormWrapperInput >
              <FormLabel htmlFor="firstName">Firstname</FormLabel >
              <FormInput type="text" id="firstName" name="firstName" placeholder='entry firstName' value={values.firstName} onChange={handleChange} />
              {errors.firstName && <FormMessageError>{errors.firstName}</FormMessageError>}
            </FormWrapperInput >
            <FormWrapperInput>
              <FormLabel htmlFor="lastName">Lastname</FormLabel >
              <FormInput type="text" id="lastName" name="lastName" placeholder='entry lastName' value={values.lastName} onChange={handleChange} />
              {errors.lastName && <FormMessageError>{errors.lastName}</FormMessageError>}
            </FormWrapperInput>
            <FormWrapperInput>
              <FormLabel htmlFor="dateOfBirth">Birthday date</FormLabel >
              <FormInput type="date" id="dateOfBirth" name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange} />
              {errors.dateOfBirth && <FormMessageError>{errors.dateOfBirth}</FormMessageError>}
            </FormWrapperInput>
          </FormWrapperInfo>
          <FormWrapperInfo>
            <FormWrapperInput>
              <FormLabel htmlFor="entryDate">Entry date</FormLabel >
              <FormInput type="date" id="entryDate" name="entryDate" value={values.entryDate} onChange={handleChange} />
              {errors.entryDate && <FormMessageError>{errors.entryDate}</FormMessageError>}
            </FormWrapperInput>
            <FormWrapperInput>
              <FormLabel htmlFor="department">Department</FormLabel >
              <FormSelect
                id="department"
                name="department"
                value={values.department}
                onChange={handleChange}
              >
                {dataOptionsJob.map((element) => <option key={element.key}>{element.option}</option>)}
              </FormSelect>
              {errors.departement && <FormMessageError>{errors.departement}</FormMessageError>}
            </FormWrapperInput>
          </FormWrapperInfo>
        </Formfieldset>
        <Formfieldset>
          <FormLegend>Adress</FormLegend>
          <FormWrapperInfo>
            <FormWrapperInput>
              <FormLabel htmlFor="street">Street</FormLabel >
              <FormInput type="text" id="street" name="street" placeholder='entry street' value={values.street} onChange={handleChange} />
              {errors.street && <FormMessageError>{errors.street}</FormMessageError>}
            </FormWrapperInput>
            <FormWrapperInput>
              <FormLabel htmlFor="city">City</FormLabel >
              <FormInput type="text" id="city" name="city" value={values.city} onChange={handleChange} />
              {errors.city && <FormMessageError>{errors.city}</FormMessageError>}
            </FormWrapperInput>
            <FormWrapperInput>
              <FormLabel htmlFor="state">State</FormLabel >
              <FormSelect
                name="state"
                id="state"
                value={values.state}
                onChange={handleChange}
              >
                {data.map((element) => <option key={element.label}>{element.name}</option>)}
              </FormSelect>
              {errors.state && <FormMessageError>{errors.state}</FormMessageError>}
            </FormWrapperInput>
            <FormWrapperInput>
              <FormLabel htmlFor="zipCode">Zip code</FormLabel >
              <FormInput type="number" id="zipCode" name="zipCode" value={values.zipCode} onChange={handleChange} />
              {errors.zipCode && <FormMessageError>{errors.zipCode}</FormMessageError>}
            </FormWrapperInput>
          </FormWrapperInfo>
        </Formfieldset>
        <FormWrapperButton>
          <FormButton type='submit'>create employe</FormButton>
        </FormWrapperButton>
      </FormCreateEmployee>

      <ModalCustom
        openModal={openModal}
        closeModal={closeModal}
        message="Création du nouvel employé réussi !"
        messageColor="#000000"
        animation="right"
        border="success"
      />
    </>
  )
}