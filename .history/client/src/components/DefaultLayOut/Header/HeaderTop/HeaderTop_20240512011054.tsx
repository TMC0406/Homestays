import React from "react"
import {Link} from "react-router-dom"
import Button from "../../../Button"

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
        <div>
          <Button text={""} textColor='text-[#ffffff]' bgColor={'bg-[#3961FB]'}/>
        </div>
        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop