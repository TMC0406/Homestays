import React from "react"
import {Link} from "react-router-dom"
import Button from "../../../Button/Button.tsx"

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
          <Button text={"Đăng nhập"} textColor='text-[#ffffff]' bgColor={'bg-[#3961FB]'}/>
        </div>
        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop