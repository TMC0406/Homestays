import React, {memo} from 'react'

const ItemDetail = () => {
  return (
    <div>
        <div className='w-[40%]'>img</div>
        <div>
            content
        </div>
    </div>
  )
}

export default memo(ItemDetail)