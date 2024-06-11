import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'
import icons from '../../ultils/icons.js'

const {MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding} = icons

const SearchPage = () => {
  return (
    <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
      <InputSearch IconBefore={<FaRegBuilding/>} IconAfter={undefined} text={'Loại'}/>
      <InputSearch IconBefore={<TfiLocationPin/>} IconAfter={<MdOutlineNavigateNext/>} text={'Địa chỉ'}/>
      <InputSearch IconBefore={<RiMoneyDollarCircleLine/>} IconAfter={<MdOutlineNavigateNext/>} text={'Chọn giá'}/>
      <InputSearch IconBefore={<SlCrop/>} IconAfter={<MdOutlineNavigateNext/>} text={'Chọn diện tích'}/>
      Search
    </div>
  )
}

export default SearchPage