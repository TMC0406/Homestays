import React, {useState} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
const PersonalPage = () => {

  return (
    <div className="">
        <div className="flex">
            <div className="bg-blue-500 " >
                <h1 className='px-[60px]'>LOGO</h1>
            </div>
            <Navbar/>
        </div>
        <div className="flex">
            <div className="w-[30%] bg-gray-300"></div>
            <div className="w-[70%] bg-gray-100"></div>
        </div>
    </div>
  )
}


export default PersonalPage