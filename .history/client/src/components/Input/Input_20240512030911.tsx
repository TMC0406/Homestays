import React from 'react'

const Input = ({label}) => {
  return (
    <div className='w-'>
        <label htmlFor="phone" className='text-[13px]'>{label}</label>
        <input type="text" id='phone' className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full' />
    </div>
  )
}

export default Input