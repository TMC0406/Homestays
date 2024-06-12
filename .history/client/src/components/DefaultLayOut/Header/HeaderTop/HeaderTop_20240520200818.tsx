import React, {useCallback} from "react"
import {Link, useNavigate} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { path } from "../../../../ultils/constant.js"

const HeaderTop = () => {
  const navigate = useNavigate()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])
  const goRegister = useCallback(() => {
    navigate(path.REGISTER)
  }, [])
  return (
    <div className='HeaderTop bg-white'>
      <div  className='header-container flex justify-around h-[70px] items-center'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo " />
          </Link>
        </div>
        <div>
          <Button
            text={"Đăng nhập"}
            textColor='text-[#ffffff]'
            bgColor={'bg-[#3961FB]'} onClick={() => goLogin('login')} className={undefined} />
          <Button
            text={"Đăng ký"}
            textColor='text-[#ffffff]'
            bgColor={'bg-[#3961FB]'} onClick={() => goLogin('register')} className={undefined} />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop