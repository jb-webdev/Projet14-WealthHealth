import React from 'react'
import "./navabr.css"
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/img/logo-v2.png'

export default function Navbar() {

  return (

    <header className="navigation">
      <Link className="link-logo-nav" to='/'>
        <img className='logo-navbar' src={Logo} alt="Logo hrnet" />
        <p className='logoText'>HRnet</p>
      </Link>
      <div>
        <NavLink className='link-navbar' to='/'>New employee</NavLink>
        <NavLink className='link-navbar' to='/employees'>Employee list</NavLink>
      </div>
    </header>
  )
}