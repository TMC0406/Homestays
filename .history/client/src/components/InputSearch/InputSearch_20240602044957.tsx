import React, {memo} from 'react'

const InputSearch = ({IconBefore, IconAfter, text}) => {
  return (
    <div className='bg-[#fff] mx-[3px] rounded-[5px] h-[35px] w-full py-[10px] pr-[30px] pl-[22px] inline-flex items-center justify-between text-[#777] '>
        {IconBefore}
        {text}
        {IconAfter}
    </div>
  )
}

export default memo(InputSearch)