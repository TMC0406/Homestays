import React, {useState, useEffect} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
import avatar from "../../assets/imgs/ImgPersonaPage/default-user.png"
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { CgDollar } from "react-icons/cg";
import { LiaHistorySolid } from "react-icons/lia";
import { RiFolderHistoryLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {Link} from "react-router-dom"
const PersonalPage = ({children}) => {
    const [activeItemNav, setActiveItem] = useState(() => {
        // Lấy giá trị activeItem từ localStorage nếu có, nếu không trả về giá trị mặc định là 1
        return Number(localStorage.getItem('activeItemNav')) || 1;
    });
    useEffect(() => {
        // Lưu giá trị activeItem vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItemNav', activeItemNav.toString());
    }, [activeItemNav]);
    
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
        <div className="flex fixed w-[100vw]">
            <div className="w-[20%]  bg-gray-100">
                <div className="bg-[#055699] h-[40px]" >
                    <h1 className='px-[60px] text-white'>LOGO</h1>
                </div> 
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
                    <div className="w-[100%] min-h-[80px] bg-[#fff9e6] rounded-[10px] p-[5px]">
                        <p className='font-[600]'>Nhân viên hỗ trợ của bạn là : </p>
                        <p className='font-[600]'>Đức Trọng </p>
                        <p className='font-[600]'>0912123456</p>
                    </div>
                    <br />
                    <div className="">
                        <ul>
                        <Link to="/personal/ManagePostings">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 1 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(1)}>
                                <span className='flex justify-around'><IoDocumentTextOutline className='m-[3px]' /> <span>Quản lý đăng tin</span>  </span>
                            </li>
                        </Link>
                        <Link to="/personal/Information">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 2 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(2)}>
                                <span className='flex justify-around'> <SlNote className='m-[3px]'  /> <span>Sửa thông tin cá nhân</span>  </span>
                            </li>
                        </Link>
                        <Link to="/personal/DepositMoney">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 3 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(3)}>
                                <span className='flex justify-around'><CgDollar className='m-[3px]'  />  <span> Nạp tiền vào tài khoản</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/DepositHistory">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 4 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(4)}>
                                <span className='flex justify-around'> <LiaHistorySolid  className='m-[3px]' />  <span> Lịch sử nạp tiền</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/PaymentHistory">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 5 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(5)}>
                                <span className='flex justify-around'> <RiFolderHistoryLine  className='m-[3px]' /> <span>Lịch sử thanh toán</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/ServicePriceList">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 6 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(6)}>
                                <span className='flex justify-around'> <FaRegClipboard  className='m-[3px]' /><span>Bảng giá dịch vụ</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/Contact">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 7 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(7)}>
                                <span className='flex justify-around'><GrContact  className='m-[3px]' /> <span>Liên hệ </span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/logout">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItem === 8 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(8)}>
                                <span className='flex justify-around'> <IoIosLogOut  className='m-[3px]' /> <span>Thoát</span> </span>
                            </li>
                        </Link>
                        </ul>
                    </div>
                </div>               
            </div>
            <div className="w-[80%] min-h-[100vh] bg-[#f8f9fa]">
                <Navbar bg={true} />
                <div className="w-[100%] h-[100%]">
                    <div className="w-[100%] h-[50px] bg-gray-300 flex items-center ">
                        <div className='pl-[30px]'>
                            <Link to={"/"}> <span className='text-blue-500'>Home</span></Link> 
                            <span> / </span>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] p-[10px]">
                         {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default PersonalPage