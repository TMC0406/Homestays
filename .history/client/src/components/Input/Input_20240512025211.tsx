import React from 'react'

const Input = ({label}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type="text" id='phone' className='outline-none bg-[#e8f0fe]' />
    </div>
  )
}

export default Input