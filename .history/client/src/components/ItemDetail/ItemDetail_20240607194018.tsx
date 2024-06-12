import React, {memo,useState} from 'react'
import icons from '../../ultils/icons'
import Button from '../Button/Button.tsx'

const { IoStarSharp, GoHeart, GoHeartFill} = icons
const ItemDetail = ({images, address, attributes, star, description, title, user}) => {
    const [isHoverIcon, setIsHoverIcon] = useState(false)
    return (
        <div className='w-full flex mb-[10px] py-[15px]  border-t-[1px] border-solid border-[#E13427]'>
            <div className='w-[40%] flex flex-wrap gap-[2px] items-center relative'>
                <img src={images[0]} alt="" className='w-[140px] h-[120px] object-cover' />
                <img src={images[1]} alt="" className='w-[140px] h-[120px] object-cover' />
                <img src={images[2]} alt="" className='w-[140px] h-[120px] object-cover' />
                <img src={images[3]} alt="" className='w-[140px] h-[120px] object-cover' />
                <span className='bg-[#00000080] absolute bottom-[8px] left-[5px] text-[#fff] text-center w-[40px] h-[20px] rounded-[3px] text-[12px] px-[5px]'>{`${images.length}`}</span>
                <span
                    className='absolute text-[20px] text-[#fff] bottom-[8px] right-[5px] text-center text-[12px] px-[5px]'
                    onMouseEnter={() => setIsHoverIcon(true)}
                    onMouseLeave={() => setIsHoverIcon(false)}
                >
                    {isHoverIcon ? <GoHeartFill color='#f73859' /> : <GoHeart />}
                </span>
            </div>
            <div className='w-[60%] ml-[15px]'>
                <h3 className='mb-[10px] text-[14px] text-[#e13427] pr-[20px] font-bold'>
                    <span className='inline-block text-[#ffd454] mr-[3px]'>
                        <IoStarSharp className='star-item' size={17} />
                        <IoStarSharp className='star-item' size={17} />
                        <IoStarSharp className='star-item' size={17} />
                        <IoStarSharp className='star-item' size={17} />
                        <IoStarSharp className='star-item' size={17} />
                    </span>
                    {title}
                </h3>
                <div className='mb-[10px]'>
                    <span className='text-[16px] font-bold text-[#16c784] mr-[20px]'>{attributes?.price}</span>
                    <span className='text-[14px] mr-[20px]'>{attributes?.acreage}</span>
                    <span className='text-[14px] mr-[20px]'>{address}</span>
                    <span className='text-[14px] mr-[20px]'>{attributes?.published}</span>
                </div>
                <div className='mb-[10px]'>
                    <p className='text-[#8a8d91] leading-[19px] text-[14px]'>
                        {description}
                    </p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center '>
                        <img src="" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                        <p>{user?.name}</p>
                    </div>
                    <div className='flex'>
                        <Button text={'Gọi 0354159445'} onClick={undefined} className={'bg-[#1266dd] text-[#fff] text-[13px] py-[3px] px-[7px] mr-[5px] hover:border-[#1266dd]  hover:border-[1px] hover:border-solid hover:bg-[#fff] hover:text-[#1266dd] hover:no-underline'} icon={undefined} />
                        <Button text={'Nhắn Zalo'} onClick={undefined} className={'bg-[#fff] text-[#1266dd] text-[13px] py-[3px] px-[7px] border-[1px] border-solid border-[#1266dd] hover:bg-[#1266dd] hover:text-[#fff] hover:no-underline'} icon={undefined} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ItemDetail)