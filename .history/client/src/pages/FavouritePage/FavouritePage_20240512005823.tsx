import React,{useState} from 'react'

const Favourite = () => {
  const [isList, setIsLisst] = useState(false)
  return (
    <div className='favourite'>
      <h1 className='text-[2rem] mb-[5px] leading-[1.2rem] font-[600]'>
        Tin đã lưu
      </h1>
      <div className="w-[100%] flex">
        <div className="w-[70%] bg-white min-h-[300px] mr-[10px] mt-[15px]">
            
        </div>
        <div className="w-[30%] bg-white  min-h-[600px] ml-[10px] mt-[15px]">

        </div>
      </div>

    </div>
  )
}

export default Favourite;