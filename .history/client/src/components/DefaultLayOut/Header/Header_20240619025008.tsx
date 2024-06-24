import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop.tsx'
// import Navbar from './Navbar/NavBar.tsx'
import NavBar from './Navbar/Navbar.js'

const Header = () => {

  return (
    <header  className='header w-[100%] min-h-[100px] bg-white fixed  z-[1000] top-[0]'>
      <HeaderTop/>
      {/* <Navbar  setNav="bg-[#3e4095]"/> */}
      <NavBar setNav={undefined}/>
    </header>
  ) 
}

export default Header