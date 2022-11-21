import styled from 'styled-components'
import { keyframes } from 'styled-components'


export const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-12rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`


export const Modal = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

export const ModalContent = styled.div`
    padding: 5px;
    width: 50%;
    background-color: #fff;
    line-height: 1.5;
    font-size: 18px;
    cursor: initial;
    border-radius: 15px;
    border : 4px solid green;
    animation: ${fadeInAnimation} 0.6s ease-in-out;
`


/* ===== IMAGE CLOSE ===== */
export const ModalWrapperIcon = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ModalImage = styled.img`
    width: 30px;
    margin: 0;
    position: relative;
    top: -15px; left: 15px;
    cursor: pointer;
    &:hover {
        transition: 0.9s;
        transform: rotate(360deg);
    }
`


/* ===== MESSAGE ===== */

export const ModalMessage = styled.p`
    color: #313131;
    text-align: center;
    margin-top: 0;
    margin-bottom: 30px
`

