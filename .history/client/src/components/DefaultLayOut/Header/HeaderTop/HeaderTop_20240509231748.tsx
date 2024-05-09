import React from "react"
import {Link} from "react-router-dom"
const HeaderTop = () => {
  return (
    <div className='HeaderTop'>
      <div  className='header-container flex justify-around'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo "/>
          </Link>
        </div>
        {/* ///////// MENU ////////// */}
        {/* ////////// SEARCH ///////// */}
        <div className='header-search'>
        </div>
        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop