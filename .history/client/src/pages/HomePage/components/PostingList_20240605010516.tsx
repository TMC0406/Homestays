import React from 'react'
import Button from '../../../components/Button/Button.tsx'
import ItemDetail from '../../../components/ItemDetail/ItemDetail.tsx'

const PostingList = () => {
  return (
    <div className='p-[20px]'>
      <h4 className='text-[18px] font-bold mb-[15px]'>Danh sách tin đăng</h4>
      <div className='flex mb-[10px]'>
        <span>Sắp xếp: </span>
        <Button text={'Mặc định'} textColor={undefined} bgColor={''} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined}/>
        <Button text={'Mới Nhất'} textColor={undefined} bgColor={''} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined}/>
        <Button text={'Có video'} textColor={undefined} bgColor={''} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined}/>
      </div>
      <div>
        <ItemDetail/>
      </div>
    </div>
  )
}

export default PostingList