import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop.tsx'
import Navbar from './Navbar/NavBar.tsx'
const Header = () => {
  return (
    <header className='header w-[100%] min-h-[100px] bg-white-300 fixed z-[1000] top-0'>
      <HeaderTop/>
      <Navbar/>
    </header>
  )
}

export default Header