import React, {memo} from 'react'
import icons from '../../ultils/icons'
import Button from '../Button/Button.tsx'


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
        <div className='w-[40%] flex flex-wrap gap-[2px] items-center'>
            <img src={images[0]} alt="" className='w-[140px] h-[120px] object-cover'/>
            <img src={images[1]} alt="" className='w-[140px] h-[120px] object-cover'/>
            <img src={images[2]} alt="" className='w-[140px] h-[120px] object-cover'/>
            <img src={images[3]} alt="" className='w-[140px] h-[120px] object-cover'/>
        </div>
        <div className='w-[60%] ml-[15px]'>
            <h3 className='mb-[10px] text-[14px] text-[#e13427] pr-[20px] font-bold'>
                <span className='inline-block text-[#ffd454] mr-[3px]'>
                    <IoStarSharp className='star-item' size={17}/>
                    <IoStarSharp className='star-item' size={17}/>
                    <IoStarSharp className='star-item' size={17}/>
                    <IoStarSharp className='star-item' size={17}/>
                    <IoStarSharp className='star-item' size={17}/>
                </span>  
                PHÒNG CHO THUÊ HẺM LÊ VĂN THỊNH GIAO VỚI NGUYỄN DUY TRINH
            </h3>
            <div className='mb-[10px]'>
                <span className='text-[16px] font-bold text-[#16c784] mr-[20px]'>3.5 triệu/tháng</span>
                <span className='text-[14px] mr-[20px]'>20m²</span>
                <span className='text-[14px] mr-[20px]'>Quận 2, Hồ Chí Minh</span>
                <span className='text-[14px] mr-[20px]'>Hôm nay</span>
            </div>
            <div className='mb-[10px]'>
                <p className='text-[#8a8d91] leading-[19px] text-[14px]'>
                    Phòng nằm trong hẻm,khu vực an ninh, xung quanh là các tiện ích như : chợ, siêu thị,bệnh viện, nhà thuốc, các quán ăn...Không chung chủ, giờ giấc tự…
                </p>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center '>
                    <img src="" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                    <p>Trọng</p>
                </div>
                <div className='flex'>
                    <Button text={'Gọi 0354159445'} textColor={undefined}  onClick={undefined} className={'bg-[#1266dd] text-[#fff] text-[13px] py-[3px] px-[7px] mr-[5px] hover:bg-[#fff] hover:text-[#1266dd] hover:no-underline'} icon={undefined}/>
                    <Button text={'Nhắn Zalo'} textColor={undefined} onClick={undefined} className={'bg-[#fff] text-[#1266dd] text-[13px] py-[3px] px-[7px] border-[1px] border-solid border-[#1266dd] hover:bg-[#1266dd] hover:text-[#fff] hover:no-underline'} icon={undefined}/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default memo(ItemDetail)