import React from 'react'
import SearchPage from '../SearchPage/SearchPage.tsx'

const HomePage = () => {
  return (
    <section className='w-1100 '>
      <SearchPage/>
      <div className=''>
        <h1 className='flex justify-center text-[2rem] font-bold'>
          Tìm kiếm chỗ thuê ưng ý
        </h1>
        <p className='text-[15px] text-[#65676b] font-normal leading-normal'>
          Kênh thông tin Homestay số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
        </p>
      </div>
    </section>
  )
}

export default HomePage