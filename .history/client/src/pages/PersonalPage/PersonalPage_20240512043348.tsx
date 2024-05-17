import React, {useState} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
const PersonalPage = () => {

  return (
    <div className="">
        <div className="flex">
            <div className="w-[20%] min-h-[100vh] bg-gray-300">
                <div className="bg-blue-500 h-[40px]" >
                        <h1 className='px-[60px]'>LOGO</h1>
                    </div>                
            </div>
            <div className="w-[80%] min-h-[100vh] bg-gray-100">
                <Navbar/>
            </div>
        </div>
    </div>
  )
}


export default PersonalPage