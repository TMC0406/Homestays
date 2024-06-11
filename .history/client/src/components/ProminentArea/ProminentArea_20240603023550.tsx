import React, {memo} from 'react'

const ProminentArea = ({name, img}) => {
  return (
    <div className='w-[220px] shadow-lg rounded-[10px]'>
        <img 
        src={img}
        alt={name} 
        className='w-full h-[110px] object-cover rounded-t-[10px]'
        />
        {/* <span>{name}</span> */}
        <span className='flex justify-center items-center py-[12px] px-[10px] rounded-b-[10px] bg-[#fff] font-bold'>{name}</span>
    </div>
  )
}

export default memo(ProminentArea)