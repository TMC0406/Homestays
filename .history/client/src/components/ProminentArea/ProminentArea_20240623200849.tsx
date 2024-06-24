import React from 'react'
import ProminentAreaContainer from './ProminentAreaContainer/ProminentAreaContainer.tsx'
import { location } from '../../ultils/constant.js'
import {useDispatch} from 'react-redux'

const ProminentArea = () => {

  return (
    <React.Fragment>
        <h2 className='flex justify-center items-center mb-[15px] text-[17px] font-bold'>Khu vực nổi bật</h2>
        <div className='flex items-center justify-center gap-5 cursor-pointer'>
         {location.map(item => {
          return(

            <ProminentAreaContainer onClick={} key={item.id} name={item.name} img={item.img}/>
          )
         })}
        </div>
      </React.Fragment>
  )
}

export default ProminentArea