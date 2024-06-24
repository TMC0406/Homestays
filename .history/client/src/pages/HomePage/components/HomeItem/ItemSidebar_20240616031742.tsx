import React, {memo} from 'react'

const ItemSidebar = () => {
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#000] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold'>Danh mục cho thuê</h3>
      <p>Cho thuê căn hộ</p>
    </div>
  )
}

export default memo(ItemSidebar)