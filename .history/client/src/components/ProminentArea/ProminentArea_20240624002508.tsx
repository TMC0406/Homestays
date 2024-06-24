import React from 'react'
import ProminentAreaContainer from './ProminentAreaContainer/ProminentAreaContainer.tsx'
import { location } from '../../ultils/constant.js'
import {useDispatch, useSelector} from 'react-redux'
import {setFilterArea} from "../../redux/slides/searchSlide.js";

const ProminentArea = () => {
  const dispatch = useDispatch()
  const areas = useSelector((state:any) => state.search.area)
  console.log(areas);
  
  return (
    <React.Fragment>
        <h2 className='flex justify-center items-center mb-[15px] text-[17px] font-bold'>Khu vực nổi bật</h2>
        <div className='flex items-center justify-center gap-5 cursor-pointer'>
         {location.map(item => {
          return(
            <ProminentAreaContainer onClick={
              dispatch(setFilterArea(item))
            } key={item.id} name={item.name} img={item.img}/>
          )
         })}
        </div>
      </React.Fragment>
  )
}

export default ProminentArea