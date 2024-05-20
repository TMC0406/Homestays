import React, {useState , useEffect} from 'react'
import {Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
<<<<<<< HEAD
const Navbar = ({bg}) => {
    const [activeItem, setActiveItem] = useState(() => {
        // Lấy giá trị activeItem từ localStorage nếu có, nếu không trả về giá trị mặc định là 1
        return Number(localStorage.getItem('activeItem')) || 1;
    });
    useEffect(() => {
        // Lưu giá trị activeItem vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItem', activeItem.toString());
    }, [activeItem]);
    useEffect(() => {
    setActiveItem(0);

    }, [bg]);
    const handleHeaderActive = (id:any) => {
=======
const Navbar = () => {
    const [activeItem, setActiveItem] = useState(1);
    const handleHeaderActive = (id) => {
>>>>>>> parent of add13f91 (cuonggg update)
    setActiveItem(id);
};

  return (
<<<<<<< HEAD
   <div className={`header-navbar w-[100%] ${bg ? "bg-[#055699]" : "bg-blue-500"} `}>
        <ul className={`header-list-nav flex justify-around w-[1120px]  m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] `}>
=======
   <div className="header-navbar w-[100%] bg-blue-500">
        <ul className="header-list-nav flex justify-around w-[1120px] m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] ">
>>>>>>> parent of add13f91 (cuonggg update)
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
<<<<<<< HEAD
            <Link to={"/favourite"}>
=======
            <Link to={"/"}>
>>>>>>> parent of add13f91 (cuonggg update)
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
            <Link to="/">
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