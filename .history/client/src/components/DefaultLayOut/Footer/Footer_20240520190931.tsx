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
                  <div className="p-[20px]">
                    <div className="">
                      <h1 className="text-[1.2rem] font-[600] text-black text-blue-400  hover:text-black">{item.title}</h1>
                    </div>
                    <div className="">
                      {item.listChildTitle.map((item2)=>{
                          return ( 
                            <div className="">
                              <p className="text-[1rem] font-[600] text-blue-400 hover:text-black">{item2.ChildTitle}</p>
                            </div>
                          )
                      })}
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Footer