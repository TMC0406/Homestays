import React from 'react'
import "./styles.css"
import {Link} from "react-router-dom"
import Menu from './Menu'
import HeaderUse from './HeaderUse'
import HeaderSearch from './HeaderSearch'
import logo from "../../../assets/img/fahasa-logo.png"
const Header = () => {
  return (
    <header className='header'>
      <div  className='header-container'> 
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src={logo} alt="Logo Fahasha"/>
          </Link>
        </div>
        {/* ///////// MENU ////////// */}
          <Menu/>
        {/* ////////// SEARCH ///////// */}
        <div className='header-search'>
          <HeaderSearch/>
        </div>
        {/* ////////// USE ///////// */}
          <HeaderUse/>
      </div>
    </header>
  )
}

export default Header