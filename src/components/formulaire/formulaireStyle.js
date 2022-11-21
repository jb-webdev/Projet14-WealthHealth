import styled from 'styled-components'


export const FormCreateEmployee = styled.form`

`
export const Formfieldset = styled.fieldset`
    border: 2px solid #5b7009;
    margin-bottom: 20px;
`

export const FormLegend = styled.legend`
    color: #5b7009;
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
`
export const FormLabel = styled.label`
    color: #5b7009;
    margin-right: 10px;
`
export const FormInput = styled.input`
    border: 1px solid #5b7009;
    margin-bottom: 10px;
    border-radius: 5px;
`
export const FormSelect = styled.select`
    background-color: #93ad18;
    border: 2px solid #5b7009;
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
    margin-right: 40px;
    cursor: pointer;
    border: 2px solid #5b7009;
    border-radius: 5px;
    background-color: #93ad18;
    &:hover {
        background-color: #5b7009;
    }

`

// TEXT INPUT ERROR
export const FormMessageError = styled.p`
    color: red;
    margin: 0;
    font-size: 10px;
`