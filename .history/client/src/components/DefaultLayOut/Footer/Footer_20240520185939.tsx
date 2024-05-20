import React from 'react'
import { dataFooter } from './dataFooter'
const Footer = () => {
  return (
    <div className='footer w-[100%] min-h-[20vh] bg-white'>
      <div className="w-[ w-[1100px] mx-auto mt-[20px]]">
        <div className=" grid grid-cols-4">
            {
              dataFooter.map((item)=>{
                return (
                  <div className=""></div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Footer