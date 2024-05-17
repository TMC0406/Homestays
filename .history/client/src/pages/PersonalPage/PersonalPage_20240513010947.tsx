import React, {useState} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
import avatar from "../../assets/imgs/imgPersonaPage/default-user.png"
import { IoDocumentTextOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
const PersonalPage = () => {
    const [activeItem, setActiveItem] = useState(1);
    const info = {
        username : "TMC",
        sdt : "123456789",   
        mathanhvien : "987654321",
        tkchinh : "1000000",
        avatar :  avatar,
    }

    const handleHeaderActive = (id) => {
          setActiveItem(id);
    };
  return (
    <div className="">
        <div className="flex">
            <div className="w-[20%] h-[97vh] bg-gray-100">
                <div className="bg-[#055699] h-[40px]" >
                    <h1 className='px-[60px] text-white'>LOGO</h1>
                    <br/>
                    <div className="w-[100%] min-h-[100%] p-[10px] overflow-y-auto">
                        <div className="flex h-[100px]">
                            <div className=" w-[40%] h-[100%]">
                                <img className='w-[100%] h-[100%] rounded-[10rem]' src={info.avatar} alt="avatar" />
                            </div>
                            <div className=" w-[60%] h-[100%] py-[20px] px-[10px]">
                                <h1 className='font-[600]'>{info.username}</h1>
                                <h1 className=''>{info.sdt}</h1>
                            </div>
                        </div>
                        <br />
                        <p>Mã thành viên : <span className='font-[600]'>{info.mathanhvien}</span></p>
                        <p>Tài khoản chính : <span className='font-[600]'>{info.tkchinh} VND</span></p>
                        <div className="flex">
                            <button className=' px-[10px] py-[5px] m-[5px] hover:bg-yellow-400 bg-yellow-500 text-white font-[700]'>Nạp tiền </button>
                            <button className=' px-[10px] py-[5px] m-[5px] hover:bg-red-400 bg-red-500 text-white font-[700]'>Đăng tin </button>
                        </div>
                        <br />
                        <div className="w-[100%] h-[80px] bg-[#fff9e6] rounded-[10px] p-[5px]">
                            <p className='font-[600]'>Nhân viên hỗ trợ của bạn là : </p>
                            <p className='font-[600]'>Đức Trọng </p>
                            <p className='font-[600]'>0912123456</p>
                        </div>
                        <br />
                        <div className="">
                            <ul>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 1 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(1)}>
                                    <span className='flex justify-around'><IoDocumentTextOutline />  Quản lý đăng tin</span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 2 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(2)}>
                                    <span className='flex justify-around'>  Sửa thông tin cá nhân</span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 3 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(3)}>
                                    <span className='flex justify-around'>  Nạp tiền vào tài khoản</span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 4 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(4)}>
                                    <span className='flex justify-around'>  Lịch sử nạp tiền</span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 5 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(5)}>
                                    <span className='flex justify-around'>  Lịch sử thanh toán</span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 6 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(6)}>
                                    <span className='flex justify-around'>  Bảng giá dịch vụ</span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 7 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(7)}>
                                    <span className='flex justify-around'> Liên hệ </span>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 8 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(8)}>
                                    <span className='flex justify-around'>  Thoát</span>
                                </li>
                            </Link>
                            </ul>
                        </div>
                    </div>               
                </div> 
            </div>
            <div className="w-[80%] min-h-[97vh] bg-[#f8f9fa]">
                <Navbar bg={true} />
            </div>
        </div>
    </div>
  )
}


export default PersonalPage