import React,{useState,useEffect} from 'react'

const Favourite = () => {
  const [listFavourite, setListFavourite] = useState([1])

  return (
    <div className='favourite'>
      <h1 className='text-[2rem] mb-[5px] leading-[1.2rem] font-[600]'>
        Tin đã lưu
      </h1>
      <div className="w-[100%] flex">
        <div className="w-[70%] bg-white rounded-lg border-[2px] min-h-[300px] mr-[10px] mt-[15px] p-[10px]">
            {listFavourite.length > 0 ?
            <div className="">
              <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh sách tin đăng</h3>
            </div>
            :
            <div className="">
              

            </div>
            }
        </div>
        <div className="w-[30%] bg-white rounded-lg border-[2px]  min-h-[600px] ml-[10px] mt-[15px] p-[10px]">

        </div>
      </div>

    </div>
  )
}

export default Favourite;