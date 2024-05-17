import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop.tsx'
import HeaderNavbar from './HeaderNavbar/HeaderNavBar.tsx'
const Header = () => {
  return (
    <header className='header w-[100%] min-h-[100px] bg-white-300'>
      <HeaderTop/>
      <HeaderNavbar/>
    </header>
  )
}

export default Header