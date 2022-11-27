import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom'
import { colorOne, colorTwo } from '../../GlobalStyle.js'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: ${colorOne};
    overflow: auto;
    position: relative;
    top: 0;
    width: 100%;
    height: 80px;
    padding-left: 50px;
    z-index: 100;
    border-bottom: 5px solid ${colorTwo};
`
export const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`
export const HeaderLogo = styled.img`
    width: 50px;
    height: auto;
    margin-right: 20px;
`
export const HeaderText = styled.p`
    color: #ffffff;
    margin: 0;
    font-size: 35px;
`
export const WrapperNavLink = styled.div``

export const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    color: #ffffff;
    font-family: 'Oxygen', sans-serif;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 2px;
    margin: 0;
    margin-right: 4rem;
    padding: 20px 18px 10px 18px;
    text-transform: uppercase;
    text-decoration: none;
    &.active {
        display: none;
      }
}
`