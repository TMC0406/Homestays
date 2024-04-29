import React from 'react'
import { BsSearch } from 'react-icons/bs';
const HeaderSearch = () => {
  return (
    <form className='form-search'>
        <input id="search" type='search' placeholder='Enter text to search .....'/>
        <button id="search-submit">
            <BsSearch/>
        </button>
    </form>
  )
}

export default HeaderSearch