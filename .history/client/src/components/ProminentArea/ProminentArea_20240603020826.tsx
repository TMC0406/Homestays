import React from 'react'

const ProminentArea = ({name, img}) => {
  return (
    <div className=''>
        <img 
        src="https://phongtro123.com/images/location_hcm.jpg" 
        alt={name} 
        className='w-[190px] h-[110px] object-cover rounded-t-[10px]'
        />
        {/* <span>{name}</span> */}
        <span className='flex justify-center items-center'>Phòng trọ Hà Nội</span>
    </div>
  )
}

export default ProminentArea