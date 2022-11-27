import styled from "styled-components";
import { colorTwo } from "../../GlobalStyle";


var btnStyleOne = ` 
    background-color: ${colorTwo};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    height: 50px;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    &:disabled {
        color: #000000;
    }
  `
var btnStyleTwo = `
    border: none;
    border-radius: 5px;
    background-color: ${colorTwo};
    color: #ffffff;
    padding: 10px;
    cursor: pointer;
    height: 50px;
    width: 90px;
    &:disabled {
        color: #000000;
    }
  `
// ===== Filter TOP Style =====
export const WrapperFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const SelectPages = styled.select`
    background-color: ${colorTwo};
    border: none;
    padding: 10px;
    color: #ffffff;
`

// ===== Table Style =====

export const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`
export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #cacaca;
    }
    &:hover {
        background-color: #ddd;
    }
`
export const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: ${colorTwo};
    color: white;
`
export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`

// ===== Paginate Bottom Style =====
export const WrapperPaginateBottom = styled.div`
    width: 70%;
    margin-top: 20px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
`
// Btn Paginate Style
export const BtnGoToStart = styled.button`
    ${btnStyleOne}
`
export const BtnPreviousPage = styled.button`
    ${btnStyleTwo}
    margin-right: 5px;
`
export const BtnNextPage = styled.button`
    ${btnStyleTwo}
    margin-left: 5px;
`
export const BtnGoToEnd = styled.button`
    ${btnStyleOne}
`


export const WrapperSpanPaginate = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colorTwo};
    
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 5px;
`


export const TextPaginate = styled.p`
    margin-right: 10px;
    color: #ffffff
`
export const SpanTextPaginate = styled.span`
    font-weight : bolder;
    margin-left : 5px;
`

export const LabelPaginate = styled.label`
    color : #ffffff;
`
export const InputPaginate = styled.input`
    border : none;
   text-align: center; 
`

export const ErrorResearch = styled.p`
    text-align: center;
`