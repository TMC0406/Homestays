import React, {memo} from 'react'
import icons from '../../../../ultils/icons'

const {MdOutlineNavigateNext} = icons

const ItemSidebar = (data:any) => {
  // console.log(data.content?.arr);
  const newData = data.content?.arr
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#000] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold'>Danh mục cho thuê</h3>
      <div className='flex items-center text-[14px] text-[#333]'>
        {
          newData.map((item:any, index:any)=>{
            return (
              <div key={index} className="">
                <span className='pr-[20px]'><MdOutlineNavigateNext/></span>
                 <p className=''>{item.value}</p>
              </div>
            )
          })
        }
        
       
      </div>
      
    </div>
  )
}

export default memo(ItemSidebar)