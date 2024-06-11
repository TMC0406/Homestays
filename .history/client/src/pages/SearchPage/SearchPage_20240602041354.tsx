import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'

const SearchPage = () => {
  return (
    <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around'>
      <InputSearch/>
      <InputSearch/>
      <InputSearch/>
      <InputSearch/>
      Search
    </div>
  )
}

export default SearchPage