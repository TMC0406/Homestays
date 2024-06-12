import React from 'react'
import Button from '../../../components/Button/Button.tsx'

const PostingList = () => {
  return (
    <div className='p-[20px]'>
      <h4 className='text-[18px] font-bold mb-[15px]'>Danh sách tin đăng</h4>
      <div className='flex'>
        <span>Sắp xếp: </span>
        <Button text={'Mặc định'} textColor={undefined} bgColor={#f1f1f1} onClick={undefined} className={'bg-[#f1f1f1]'} icon={undefined}/>
        <Button text={'Mới Nhất'} textColor={undefined} bgColor={'#f1f1f1'} onClick={undefined} className={undefined} icon={undefined}/>
        <Button text={'Có video'} textColor={undefined} bgColor={'#f1f1f1'} onClick={undefined} className={undefined} icon={undefined}/>
      </div>
    </div>
  )
}

export default PostingList