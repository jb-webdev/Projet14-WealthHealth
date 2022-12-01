import styled from 'styled-components'
import { colorOne } from '../../GlobalStyle'

export const MainCreateEmployee = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    @media (max-width: 768px) {
        padding-bottom: 20px
    }
    @media (max-width: 471px) {
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom: 20px
    }
`
export const MainCreateEmployeeTitle = styled.h1`
    color: ${colorOne};
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
    @media (max-width: 530px) {
        font-size: 1.2rem;
    }
    @media (max-width: 471px) {
        font-size: 1.1rem;
    }
`