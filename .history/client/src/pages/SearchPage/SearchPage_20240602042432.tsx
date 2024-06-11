import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'

const SearchPage = () => {
  return (
    <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px]'>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Loại'}/>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Địa chỉ'}/>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Chọn giá'}/>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Chọn diện tích'}/>
      Search
    </div>
  )
}

export default SearchPage