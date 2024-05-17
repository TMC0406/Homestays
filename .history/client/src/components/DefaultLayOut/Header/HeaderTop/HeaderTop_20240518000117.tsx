import React from "react"
import {Link} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
// import Logo from '../../../../assets/imgs/Logo/Logo.png'

const HeaderTop = () => {
  return (
    <div className='HeaderTop bg-white'>
      <div  className='header-container flex justify-around'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            {/* <img className='logo-img' src={Logo} alt=""/> */}
          </Link>
        </div>
        <div>
          <Link to='/login'>
            <Button
              text={"Đăng nhập"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#3961FB]'} onClick={undefined} className={undefined}/>
          </Link>
          <Link to=''>
            <Button
              text={"Đăng ký"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#3961FB]'} onClick={undefined} className={undefined}/>
          </Link>
        </div>

        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop