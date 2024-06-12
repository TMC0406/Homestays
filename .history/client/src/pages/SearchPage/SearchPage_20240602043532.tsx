import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'
import icons from '../../ultils/icons.js'

const {MdOutlineNavigateNext} = icons

const SearchPage = () => {
  return (
    <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Loại'}/>
      <InputSearch IconBefore={undefined} IconAfter={<MdOutlineNavigateNext/>} text={'Địa chỉ'}/>
      <InputSearch IconBefore={undefined} IconAfter={<MdOutlineNavigateNext/>} text={'Chọn giá'}/>
      <InputSearch IconBefore={undefined} IconAfter={<MdOutlineNavigateNext/>} text={'Chọn diện tích'}/>
      Search
    </div>
  )
}

export default SearchPage