import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    const [activeItem, setActiveItem] = useState(1);
    const handleHeaderActive = (id) => {
    setActiveItem(id);
};

  return (
   <div className="header-navbar w-[100%] bg-blue-500">
        <ul className="header-list-nav flex justify-around w-[1120px] m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] ">
            <Link to="/">
                <li className={`menu-item ${activeItem === 1 ? "bg-red-600" : ""} `}
                onClick={() => handleHeaderActive(1)}>
                    Trang chủ
                </li>
            </Link>
            <Link to="/">
                <li>Homestays độc lập</li>
            </Link>
            <Link to="/NotFoundPage">
                <li>Homestay nhóm</li>
            </Link>
            <Link to="/search">
                <li>Homestay nghỉ dưỡng</li>
            </Link>
            <Link to={""}>
                <li className='flex items-center'>
                    <FaRegHeart className='mr-[5px] text-[15px]'/> Yêu thích
                </li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar