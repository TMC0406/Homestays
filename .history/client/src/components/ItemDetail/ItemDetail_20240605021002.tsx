import React, {memo} from 'react'
import icons from '../../ultils/icons'


const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/1379ebdf-eda5-4ef8-bb22-7da1d19551f2_1658240490.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg"
]
const { IoStarSharp, GoHeart, GoHeartFill} = icons
const ItemDetail = () => {
  return (
    <div className='w-full flex mb-[10px]'>
        <div className='w-2/5 flex flex-wrap gap-[2px] items-center'>
            <img src={images[0]} alt="" className='w-[140px] h-[120px] object-cover'/>
            <img src={images[1]} alt="" className='w-[140px] h-[120px] object-cover'/>
            <img src={images[2]} alt="" className='w-[140px] h-[120px] object-cover'/>
            <img src={images[3]} alt="" className='w-[140px] h-[120px] object-cover'/>
        </div>
        <div className='w-[60%] flex justify-center'>
            <h3>
                <span className='flex'>
                    <IoStarSharp/>
                    <IoStarSharp/>
                    <IoStarSharp/>
                    <IoStarSharp/>
                    <IoStarSharp/>
                </span>
            </h3>
        </div>
    </div>
  )
}

export default memo(ItemDetail)