import React from 'react'

const Input = ({label}) => {
  return (
    <div className='flex'>
        <label htmlFor="">{label}</label>
        <input type="text" id='phone' className='outline-none bg-[#e8f0fe] p-2 rounded-md' />
    </div>
  )
}

export default Input