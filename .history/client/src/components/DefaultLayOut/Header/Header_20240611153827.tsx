import React, {useEffect, useRef} from 'react'
import HeaderTop from './HeaderTop/HeaderTop.tsx'
import Navbar from './Navbar/NavBar.tsx'
import { useSearchParams } from 'react-router-dom'
// import NavBarVer2 from './Navbar/NavBarVer2.tsx'

const Header = () => {
  const [searchPrams] = useSearchParams()
  const headerRef = useRef()
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [searchPrams.get('currentPage')])
  return (
    <header ref={headerRef} className='header w-[100%] min-h-[100px] bg-white fixed  z-[1000] top-[0]'>
      <HeaderTop/>
      <Navbar  setNav="bg-blue-500"/>
    </header>
  ) 
}

export default Header