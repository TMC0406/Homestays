import React, {useState} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
import avatar from "../../assets/imgs/imgPersonaPage/default-user.png"
const PersonalPage = () => {
    const info = {
        username : "TMC",
        sdt : "123456789",   
        mathanhvien : "987654321",
        tkchinh : "1000000000",
        avatar :  avatar,
    }

  return (
    <div className="">
        <div className="flex">
            <div className="w-[20%] min-h-[100vh] bg-gray-100">
                <div className="bg-[#055699] h-[40px]" >
                    <h1 className='px-[60px] text-white'>LOGO</h1>
                    <div className="w-[100%] min-h-[100%] p-[10px]">
                        <div className="flex h-[200px]">
                            <div className=" w[30%] h-[100%] bg- red">
                                {/* <img className='w-[100%] h-[100%]' src={info.avatar} alt="avatar" /> */}
                            </div>
                            <div className=" w[70%] h-[100%]">

                            </div>
                        </div>
                    </div>               
                </div> 
            </div>
            <div className="w-[80%] min-h-[100vh] bg-[#f8f9fa]">
                <Navbar bg={true} />
            </div>
        </div>
    </div>
  )
}


export default PersonalPage