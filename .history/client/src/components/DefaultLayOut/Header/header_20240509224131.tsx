import React from 'react'
import {Link} from "react-router-dom"
import Menu from './Menu'
import HeaderUse from './HeaderUse'
import HeaderSearch from './HeaderSearch'
import HeaderNavbar from './HeaderNavbar'
const Header = () => {
  return (
    <header className='header'>
      <div  className='header-container w-[100%] min-h[100px] bg-blue-300'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo Fahasha"/>
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
      <HeaderNavbar/>
    </header>
  )
}

export default Header