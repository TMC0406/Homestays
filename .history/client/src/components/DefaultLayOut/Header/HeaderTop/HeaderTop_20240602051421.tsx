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
      <div  className='header-container flex justify-around h-[70px] items-center'>
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo " />
          </Link>
        </div>
        {!isLoggedIn &&  <div className="flex">
          <Button
            text={"Đăng nhập"}
            textColor='text-[#ffffff]'
            bgColor={'bg-[#3961FB]'} onClick={() => goLogin(false)} className={'h-[40px] w-[100px] mx-[5px] rounded-[10px]'} icon={undefined} />
          <Button
            text={"Đăng ký"}
            textColor='text-[#ffffff]'
            bgColor={'bg-[#3961FB]'} onClick={() => goLogin(true)} className={'h-[40px] w-[100px] mx-[5px] rounded-[10px]'} icon={undefined} />
        </div>}
         {isLoggedIn &&  
         <div className="flex items-center">
         <span className=" mr-[10px]">Tên tài khoản</span>
          <Button
              text={"Đăng xuất"}
              textColor='text-[#ffffff]'
              bgColor={'bg-[#F73859]'} onClick={() => dispatch({ type: actionTypes.LOGOUT })} className={'h-[40px] w-[100px] mx-[5px] rounded-[10px]'} icon={undefined} />
        </div>}
      </div>
    </div>
  )
}

export default HeaderTop