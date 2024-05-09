import React from 'react'
import {Link} from "react-router-dom"
import Menu from './Menu'
import HeaderUse from './HeaderUse'
import HeaderSearch from './HeaderSearch'
import HeaderNavbar from './HeaderNavbar/HeaderNavBar.tsx'
const Header = () => {
  return (
    <header className='header w-[100%] min-h-[100px] bg-white-300'>
      <div  className='header-container flex justify-around'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo "/>
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