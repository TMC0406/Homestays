import React from 'react'
import Button from '../../../components/Button/Button.tsx'

const PostingList = () => {
  return (
    <div className='p-[20px]'>
      <h4 className='text-[18px] font-bold mb-[15px]'>Danh sách tin đăng</h4>
      <div>
        <span>Sắp xếp</span>
        <Button text={'Mặc định'} textColor={undefined} bgColor={undefined} onClick={undefined} className={undefined} icon={undefined}/>
        <Button text={'Mới Nhất'} textColor={undefined} bgColor={undefined} onClick={undefined} className={undefined} icon={undefined}/>
        <Button text={'Có video'} textColor={undefined} bgColor={undefined} onClick={undefined} className={undefined} icon={undefined}/>
      </div>
    </div>
  )
}

export default PostingList