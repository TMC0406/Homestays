import React, {useCallback} from "react"
import {Link} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { useNavigate } from "react-router-dom"

const HeaderTop = () => {
  const navigate = useNavigate()
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
          <Button text={"Đăng ký"} textColor={"text-[#ffffff]"} bgColor={'bg-[#3961fb]'}/>
        </div>
        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop