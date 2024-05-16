import React from 'react'
import {Link} from "react-router-dom"
import HeaderTop from './HeaderTop/HeaderTop.tsx'
import Navbar from './Navbar/NavBar.tsx'
const Header = () => {
  return (
    <header className='header w-[100%] bg-white-300 fixed z-[100]'>
      <HeaderTop/>
      <Navbar/>
    </header>
  )
}

export default Header