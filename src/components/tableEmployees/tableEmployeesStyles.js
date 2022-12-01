import styled from "styled-components";
import { colorOne, colorTwo } from "../../GlobalStyle";

var btnStyleOne = ` 
    background-color: ${colorOne};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    height: 50px;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 10px;
    margin-left: 10px;
    &:disabled {
        color: #000000;
    }
    &:hover {
        background-color: ${colorTwo};
        color: #000000;
    }
    @media (max-width: 818px) {
        padding: 4px;
        height: 30px;
        width: 50px;
    }
  `
var btnStyleTwo = `
    border: none;
    border-radius: 5px;
    background-color: ${colorOne};
    color: #ffffff;
    padding: 10px;
    cursor: pointer;
    height: 50px;
    width: 90px;
    &:disabled {
        color: #000000;
    }
    &:hover {
        background-color: ${colorTwo};
        color: #000000;
    }
    @media (max-width: 818px) {
        padding: 4px;
        height: 30px;
        width: 50px;
    }
  `
// ===== Filter TOP Style =====
export const WrapperFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 761px) {
        flex-direction: column;
    }
`
export const SelectPages = styled.select`
    background-color: ${colorOne};
    border: none;
    padding: 10px;
    color: #ffffff;
    @media (max-width: 761px) {
        margin-bottom: 20px;
        
    }
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
    background-color: ${colorOne};
    color: white;
`
export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`
// ===== Paginate Bottom Style =====
export const WrapperPaginateBottom = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1345px) {
        width: 100%;
    }
`
// Btn Paginate Style
export const ContainerBtn = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`
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
    background-color: ${colorOne};
    
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 5px;

    @media (max-width: 818px) {
        width: auto;
        height: 35px;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
    }
`
export const TextPaginate = styled.p`
    margin-right: 10px;
    color: #ffffff;
    margin: 0;
    display: flex;
    flex-direction : row;
    text-align: center;
    @media (max-width: 818px) {
        font-size: 0.7rem;
    }
    @media (max-width: 530px) {
        font-size: 0.5rem;
    }
    @media (max-width: 390px) {
        flex-direction: column;
    }
`
export const SpanTextPaginate = styled.span`
    font-weight : bolder;
    margin-left : 5px;
`
export const SpanLabelPaginate = styled.span`
    display:flex;
    flex-direction: row;
    align-items : center;
    margin-left : 10px;
    @media (max-width: 550px) {
        display : none;
    }
`
export const LabelPaginate = styled.label`
    color : #ffffff;
    @media (max-width: 818px) {
        font-size: 0.7rem;
    }
    @media (max-width: 530px) {
        display : none;
    }
`
export const InputPaginate = styled.input`
    border : none;
    text-align: center;
    margin-left: 3px;
`
export const ErrorResearch = styled.p`
    text-align: center;
`