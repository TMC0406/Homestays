import React from "react"
import {Link} from "react-router-dom"
import Button from "../../../Button/Button.tsx"

const HeaderTop = () => {
  const token = localStorage.getItem('token')
  console.log(token);
  
  if(token){
    return
  }
  return (
    <div className='HeaderTop bg-white'>
      <div  className='header-container flex justify-around'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo "/>
          </Link>
        </div>
        {
          token 
          ?
          <div>Trọng đẹp trai vãi ò</div>
          :
          <div>
          <Link to='/login'>
            <Button
              text={"Đăng nhập"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#3961FB]'} onClick={undefined} className={undefined}/>
          </Link>
          <Link to='/register'>
            <Button
              text={"Đăng ký"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#3961FB]'} onClick={undefined} className={undefined}/>
          </Link>
        </div>
        }
       

        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop