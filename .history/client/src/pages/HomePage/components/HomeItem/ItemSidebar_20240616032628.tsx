import React, {memo} from 'react'
import icons from '../../../../ultils/icons'

const {MdOutlineNavigateNext} = icons
const ItemSidebar = () => {
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#000] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold'>Danh mục cho thuê</h3>
      <div className='flex items-center text-[14px] text-[#333]'>
        <MdOutlineNavigateNext/>
        <p className=''>Cho thuê căn hộ</p>
      </div>
      
    </div>
  )
}

export default memo(ItemSidebar)