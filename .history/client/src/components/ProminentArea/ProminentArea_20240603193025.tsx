import React from 'react'
import ProminentAreaContainer from './ProminentAreaContainer/ProminentAreaContainer.tsx'
import { location } from '../../ultils/constant.js'


const ProminentArea = () => {
  return (
    <section>
        <h2 className='flex justify-center items-center mb-[15px] text-[17px] font-bold'>Khu vực nổi bật</h2>
        <div className='flex items-center justify-center gap-5'>
         {location.map(item => {
          return(
            <ProminentAreaContainer key={item.id} name={item.name} img={item.img}/>
          )
         })}
        </div>
      </section>
  )
}

export default ProminentArea