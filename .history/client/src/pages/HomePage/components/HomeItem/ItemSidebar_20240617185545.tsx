import React, {memo} from 'react'
import icons from '../../../../ultils/icons'

const {MdOutlineNavigateNext} = icons

const ItemSidebar = ({content ,title}) => {
  // console.log(data.content?.arr);
  const newData = content?.arr
  console.log(newData);
  
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#000] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold mb-[10px]'>{title}</h3>
      {
        newData?.map((item: any, index: any) => {
          return (
            <div key={index} className='flex items-center text-[14px] text-[#333] py-[5px] border-b-dashed border-solid border-t-[1px]'>
              <span className='pr-[10px]'><MdOutlineNavigateNext /></span>
              <p className='cursor-pointer text-[#333] hover:text-[#f60]'>{item.value}</p>
            </div>
          )
        })
      }
    </div>  
  )
}

export default memo(ItemSidebar)