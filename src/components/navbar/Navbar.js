import React from 'react'
import { Header, LinkStyled, HeaderLogo, HeaderText, WrapperNavLink, NavLinkStyled, } from './navabarStyle.js'
import Logo from '../../assets/img/logo-v2.png'

export default function Navbar() {

  return (
    <Header >
      <LinkStyled to='/'>
        <HeaderLogo src={Logo} width="50px" height="48px" alt="Logo hrnet" />
        <HeaderText >HRnet</HeaderText>
      </LinkStyled>
      <WrapperNavLink>
        <NavLinkStyled to='/'>New employee</NavLinkStyled>
        <NavLinkStyled to='/employees' >Employee list</NavLinkStyled>
      </WrapperNavLink>
    </Header>
  )
}