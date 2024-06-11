import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'

const SearchPage = () => {
  return (
    <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around'>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Loại'}/>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={undefined}/>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={undefined}/>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={undefined}/>
      Search
    </div>
  )
}

export default SearchPage