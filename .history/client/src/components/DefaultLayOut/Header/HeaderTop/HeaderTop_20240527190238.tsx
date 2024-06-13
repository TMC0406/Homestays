import React, {useCallback} from "react"
import {Link, useNavigate} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { path } from "../../../../ultils/constant.js"
import { useSelector, useDispatch } from "react-redux"
import { actionTypes } from '../../../../redux/actions/actionTypes.js';
const HeaderTop = () => {
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector((state:any) => state.auth)
  const dispatch = useDispatch()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])
 
  return (
    <div className='HeaderTop bg-white'>
      <div className="w-[80%] m-auto">
        <div  className='header-container flex justify-between h-[70px] items-center'>
          {/* //////// LOGO /////////// */}
          <div className='header-logo'>
            <Link to="/">
              <img className='logo-img' src="" alt="Logo " />
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
          <span className=" mr-[10px]">Tên tài khoản</span>
            <Button
              text={"Đăng xuất"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#700]'} onClick={() => dispatch({ type: actionTypes.LOGOUT})} className={undefined} />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default HeaderTop