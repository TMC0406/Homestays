import React from 'react'
import {Link} from "react-router-dom"
import { dataFooter } from './dataFooter'
import logo from ".././../../assets/imgs/logo/logoPage.jpg"
const Footer = () => {
  return (
    <div className='footer w-[100%] min-h-[50vh] bg-white'>
      <div className="w-[ w-[1100px] mx-auto mt-[20px]]">
        <div className=" grid grid-cols-4 border-b-[1px] border-[black]">
            {
              dataFooter.map((item)=>{
                return (
                  <div className="p-[20px]">
                    <div className="">
                      <Link to={item.titleLink}>
                        <h1 className="text-[1.2rem] font-[600]  text-blue-400  hover:text-black">{item.title}</h1>
                      </Link>
                    </div>
                    <br/>
                    <div className="">
                      {item.listChildTitle.map((item2)=>{
                          return ( 
                            <div className="">
                              <Link to={item2.ChildTitleLink}>
                                <p className="text-[1rem] font-[600] text-blue-400 hover:text-black">{item2.ChildTitle}</p>
                              </Link>
                            </div>
                          )
                      })}
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div className=" grid grid-cols-4 min-h-[20vh]">
            <div className="p-[10px] border-r-[0.1px] border-[black]">
              <div className="w-[100%] m-auto flex items-center justify-around">
                <img src={logo} alt="logoPage"  className='w-[50px] h-[50px]'/>
                <h1 className="text-[1.2rem] font-[900] text-[#4f5091]">HOSMTAY HEALING</h1>
              </div>
                <br />
                <p>Homestay healing tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ.</p>
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Footer