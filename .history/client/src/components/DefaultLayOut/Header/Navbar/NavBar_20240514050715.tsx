import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
const Navbar = (bg) => {
    const [activeItem, setActiveItem] = useState(1);
    const handleHeaderActive = (id) => {
    setActiveItem(id);
};

  return (
   <div className={`header-navbar w-[100%] ${bg ? "bg-[#055699]" : "bg-blue-500"} `}>
        <ul className="header-list-nav flex justify-around w-[1120px] m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] ">
            <Link to="/">
                <li className={`flex  items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 1 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(1)}>
                    <span>Trang chủ</span>
                </li>
            </Link>
            <Link to="/">
                <li className={`flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 2 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(2)}>
                    Homestays độc lập
                </li>
            </Link>
            <Link to="/">
                <li className={`flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 3 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(3)}>
                   Homestay nhóm
                </li>
            </Link>
            <Link to="/">
                <li className={`${activeItem === 4 ? "bg-[#f73859]" : ""} flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(4)}>
                    Homestay nghỉ dưỡng
                </li>
            </Link>
            <Link to={"/favourite"}>
                <li className={`flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 5 ? "bg-[#f73859]": ""}`}
                    onClick={() => handleHeaderActive(5)}>
                    <FaRegHeart className='mr-[5px] text-[15px]'/> Yêu thích
                </li>
            </Link>
            <Link to="/">
                <li className={`${activeItem === 6 ? "bg-[#f73859]" : ""} flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(6)}>
                    Tin tức
                </li>
            </Link>
            <Link to="/personal">
                <li className={`${activeItem === 7 ? "bg-[#f73859]" : ""} flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(7)}>
                   Bảng giá dịch vụ
                </li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar