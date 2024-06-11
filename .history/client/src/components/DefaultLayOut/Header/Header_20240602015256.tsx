import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop.tsx'
import Navbar from './Navbar/NavBar.tsx'
// import NavBarVer2 from './Navbar/NavBarVer2.tsx'

const Header = () => {
  return (
    <header className='header w-[100%] min-h-[100px] bg-white fixed  z-[1000] top-[0]'>
      <HeaderTop/>
      <Navbar  setNav="bg-blue-500"/>
      {/* <NavBarVer2/> */}
    </header>
  ) 
}

export default Header