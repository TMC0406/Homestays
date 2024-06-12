import React, {useCallback} from "react"
import {Link, useNavigate} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { path } from "../../../../ultils/constant.js"
import { useSelector, useDispatch } from "react-redux"
import logo from "../../../../assets/imgs/logo/logoPage.jpg"
import { RxDashboard } from "react-icons/rx";
import { setActiveItemNav} from "../../../../redux/slides/main1Slice.js"
const HeaderTop = () => {
  const navigate = useNavigate()
  const {isLoggedIn, username,id , money} = useSelector((state:any) => state.auth)
  const dispatch = useDispatch()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])
  const handleHeaderActive = (id: number) => {
    dispatch(setActiveItemNav(id));
};
 
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
              <img src="" alt="" srcset="" />
            </div>
            <Link to={`/personal/Information`} onClick={()=> handleHeaderActive(2)}>
              <div className=" mx-[10px]  ">
                  <span className="">Tên tài khoản : <span className="font-[600]"> {username}</span></span> <br />
                  <small className="">Mã tài khoản : <span className="font-[600]">{id}</span> </small><br />
                  <small className="">TK chính :<span className="font-[600]">{money}  VND</span></small>

              </div>
            </Link>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderTop