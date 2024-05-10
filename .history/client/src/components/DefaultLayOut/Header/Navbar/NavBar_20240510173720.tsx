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
                <li className={`${activeItem === 1 ? "bg-red-600" : ""} `}
                    onClick={() => handleHeaderActive(1)}>
                    Trang chủ
                </li>
            </Link>
            <Link to="/">
                <li className={`${activeItem === 2 ? "bg-red-600" : ""} `}
                    onClick={() => handleHeaderActive(2)}>
                    Homestays độc lập
                </li>
            </Link>
            <Link to="/NotFoundPage">
                <li className={`${activeItem === 3 ? "bg-red-600" : ""} `}
                    onClick={() => handleHeaderActive(3)}>
                   Homestay nhóm
                </li>
            </Link>
            <Link to="/search">
                <li className={`${activeItem === 4 ? "bg-red-600" : ""} `}
                    onClick={() => handleHeaderActive(4)}>
                    Homestay nghỉ dưỡng
                </li>
            </Link>
            <Link to={"/"}>
                <li className={`${activeItem === 5 ? "bg-red-600": ""}flex items-center`}
                    onClick={() => handleHeaderActive(5)}>
                    <FaRegHeart className='mr-[5px] text-[15px]'/> Yêu thích
                </li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar