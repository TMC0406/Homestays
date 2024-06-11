import React, {useEffect} from 'react'
import Button from '../../../components/Button/Button.tsx'
import ItemDetail from '../../../components/ItemDetail/ItemDetail.tsx'
import {useDispatch} from 'react-redux'
import { getPosts } from '../../../redux/actions/post.js'

const PostingList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  },[])
  return (
    <div className='p-[20px]'>
      <h4 className='text-[18px] font-bold mb-[15px]'>Danh sách tin đăng</h4>
      <div className='flex mb-[10px]'>
        <span>Sắp xếp: </span>
        <Button text={'Mặc định'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined}/>
        <Button text={'Mới Nhất'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined}/>
        <Button text={'Có video'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined}/>
      </div>
      <div className=''>
        <ItemDetail/>
        <ItemDetail/>
        <ItemDetail/>
        <ItemDetail/>
        <ItemDetail/>
      </div>
    </div>
  )
}

export default PostingList