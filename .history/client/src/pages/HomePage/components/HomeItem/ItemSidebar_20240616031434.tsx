import React, {memo} from 'react'

const ItemSidebar = () => {
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#000] rounded-[8px]'>
      <h3 className='text-[18px] font-bold'>Danh mục cho thuê</h3>
    </div>
  )
}

export default memo(ItemSidebar)