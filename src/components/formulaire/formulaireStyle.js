import styled from 'styled-components'
import { colorOne, colorTwo } from '../../GlobalStyle'
export const FormCreateEmployee = styled.form`
`
export const Formfieldset = styled.fieldset`
    border: 2px solid ${colorOne};
    margin-bottom: 20px;
`
export const FormLegend = styled.legend`
    color: ${colorOne};
    font-weight: bold;
`
export const FormWrapperInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`
export const FormWrapperInput = styled.div`
    margin-right: 30px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        margin-right: 0;
    }
`
export const FormLabel = styled.label`
    color: ${colorOne};
    margin-right: 10px;
`
export const FormInput = styled.input`
    border: 1px solid ${colorOne};
    margin-bottom: 10px;
    border-radius: 5px;
`
export const FormSelect = styled.select`
    background-color: ${colorTwo};
    border: 2px solid ${colorOne};
    border-radius: 5px;
`
// WRAPPER BUTTON && BUTTON SUBMIT
export const FormWrapperButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const FormButton = styled.button`
    color: #FFF;
    display: inline-block;
    font-family: 'Oxygen', sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 0;
    padding: 20px 18px 20px 18px;
    text-transform: uppercase;
    
    cursor: pointer;
    border: 2px solid ${colorTwo};
    border-radius: 5px;
    background-color: ${colorOne};
    &:hover {
        background-color: ${colorTwo};
    }

`
// TEXT INPUT ERROR
export const FormMessageError = styled.p`
    color: red;
    margin: 0;
    font-size: 10px;
`