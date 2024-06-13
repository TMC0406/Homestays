import React, {useCallback} from "react"
import {Link, useNavigate} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { path } from "../../../../ultils/constant.js"
import { useSelector, useDispatch } from "react-redux"
import { actionTypes } from '../../../../redux/actions/actionTypes.js';
import logo from "../../../../assets/imgs/logo/logoPage.jpg"
const HeaderTop = () => {
  const navigate = useNavigate()
  const {isLoggedIn, username,phone} = useSelector((state:any) => state.auth)
  const dispatch = useDispatch()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])
 
  return (
    <div className='HeaderTop bg-white'>
      <div className="w-[70%] m-auto">
        <div  className='header-container flex justify-between h-[70px] items-center'>
          {/* //////// LOGO /////////// */}
          <div className='header-logo'>
            <Link to="/" className="flex flex items-center justify-around ">
              <img className='logo-img w-[50px]' src={logo} alt="Logo " />
              <h1 className="text-[1.2rem] font-[900] text-[#4f5091]">HOMESTAY HEALING</h1>
            </Link>
          </div>
          {!isLoggedIn &&  <div>
            <Button
              text={"Đăng nhập"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#3961FB]'} onClick={() => goLogin(false)} className={undefined} />
            <Button
              text={"Đăng ký"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#3961FB]'} onClick={() => goLogin(true)} className={undefined} />
          </div>}
          {isLoggedIn &&  
          <div className="flex">
            <div className="">
                <h1 className="">Tên tài khoản :  {username}</h1>
                <h1 className="">Số điện thoại : {phone}</h1>
            </div>
            <div className="flex">
            <span className=" mr-[10px]">Tên tài khoản</span>
              <Button
                text={"Đăng xuất"}
                textColor='text-[#ffffff]'
                bgColor={'bg-[#700]'} onClick={() => dispatch({ type: actionTypes.LOGOUT})} className={undefined} />
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderTop