import React ,{useState ,useEffect} from 'react'
import ProminentArea from '../../components/ProminentArea/ProminentArea.tsx'
import PostingList from './components/PostingList.tsx'
import Sidebar from './components/Sidebar.tsx'
import Button from '../../components/Button/Button.tsx'
import Pagination from '../../components/Pagination/Pagination.tsx'
import {useDispatch, useSelector} from 'react-redux'
import { actionTypes } from '../../redux/actions/actionTypes.js'
import { apiGetPosts } from '../../service/post.js'

const HomePage = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector((state:any) => state.post)
  const getPost = async () =>{
    const response = await apiGetPosts()
    dispatch({type: actionTypes.GET_POSTS ,data:response.data})
  }
  useEffect(  () => {
    getPost()
  },[]) 
  return (
    <section className='w-1100 '>
      <div className='mb-[15px]'>
        <h1 className='flex justify-center text-[2rem] font-bold'>
          Tìm kiếm chỗ thuê ưng ý
        </h1>
        <p className='text-[15px] text-[#65676b] font-normal leading-normal'>
          Kênh thông tin Homestay số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
        </p>
      </div>
      <div className='mb-[20px]'>
        <ProminentArea />
      </div>
      <section className='flex justify-around'>
        <div className='bg-[#fff] w-[70%] mr-[10px]'>
          <div className='p-[20px]'>
            <h4 className='text-[18px] font-bold mb-[15px]'>Danh sách tin đăng</h4>
            <div className='flex mb-[10px]'>
              <span>Sắp xếp: </span>
              <Button text={'Mặc định'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined} />
              <Button text={'Mới Nhất'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined} />
              <Button text={'Có video'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined} />
            </div>
            <div className='flex'>
              <Pagination data={posts} />
              <Sidebar />
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5f5] w-[30%]'>
          {/* <Sidebar/> */}
        </div>
      </section>
    </section>
  )
}

export default HomePage