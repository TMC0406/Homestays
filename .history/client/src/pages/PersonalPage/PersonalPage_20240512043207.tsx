import React, {useState} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
const PersonalPage = () => {

  return (
    <div className="">
        <div className="flex">
            <div className="bg-blue-500 w-[20%]" >
                <h1 className='px-[60px]'>LOGO</h1>
            </div>
            <Navbar/>
        </div>
        <div className="flex">
            <div className="w-[20%] min-h-[95vh] bg-gray-300"></div>
            <div className="w-[80%] min-h-[95vh] bg-gray-100"></div>
        </div>
    </div>
  )
}


export default PersonalPage