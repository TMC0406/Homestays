import React from 'react'
import {Link} from "react-router-dom"
import HeaderMenu from './HeaderMenu/HeaderMenu.tsx'
import HeaderUser from './HeaderUse/HeaderUser.tsx'
import HeaderSearch from './HeaderSearch/HeaderSeach.tsx'
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
          <HeaderMenu/>
        {/* ////////// SEARCH ///////// */}
        <div className='header-search'>
          <HeaderSearch/>
        </div>
        {/* ////////// USE ///////// */}
          <HeaderUser/>
      </div>
      <HeaderNavbar/>
    </header>
  )
}

export default Header