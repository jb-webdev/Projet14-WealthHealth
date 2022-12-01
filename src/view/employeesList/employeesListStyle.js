import styled from "styled-components";
import { colorOne } from "../../GlobalStyle";

export const MainList = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    overflow: hidden;
    @media (max-width: 1200px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`
export const TitleEmployeesList = styled.h1`
    color: ${colorOne};
    text-align: center;
    @media (max-width: 471px) {
        font-size: 1.1rem;
    }
`