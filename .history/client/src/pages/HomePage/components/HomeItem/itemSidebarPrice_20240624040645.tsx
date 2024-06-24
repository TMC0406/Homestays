import React, {memo} from 'react'
import icons from '../../../../ultils/icons'
import {useDispatch} from "react-redux"
const {MdOutlineNavigateNext} = icons

const ItemSidebarPrice = ({content ,title}) => {
  const newData = content?.arr
  console.log(newData);
  
  const dispatch = useDispatch();
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#dedede] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold mb-[10px]'>{title}</h3>
      {
        
        newData?.map((item: any, index: any) => {
          return (
              <div key={index}  className="flex items-center">
                <span className='pr-[10px]'><MdOutlineNavigateNext /></span>
                <p className='cursor-pointer text-[#333] hover:text-[#f60]'>{item.value}</p>
              </div>
          )
        })
      }
    </div>  
  )
}

export default memo(ItemSidebarPrice)