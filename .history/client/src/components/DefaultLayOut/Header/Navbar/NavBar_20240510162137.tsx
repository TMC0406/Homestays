import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <div className="header-navbar w-[100%] bg-blue-500">
        <ul className="header-list-nav flex justify-around w-[1120px] m-auto h-[40px] items-center text-[#ffffff] font-bold text-[15px] ">
            <Link to="/">
                <li className=''>Trang chủ</li>
            </Link>
            <Link to="/favourite">
                <li>Homestays độc lập</li>
            </Link>
            <Link to="/NotFoundPage">
                <li>Homestay nhóm</li>
            </Link>
            <Link to="/search">
                <li>Homestay nghỉ dưỡng</li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar