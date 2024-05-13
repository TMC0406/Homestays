import React,{useState} from 'react'
import heat from "../../assets/imgs/imgFavouritePage/Capture.JPG"
import { FaChevronRight } from "react-icons/fa";
const Favourite = () => {
  const [listFavourite, setListFavourite] = useState([])
  // setListFavourite(listFavourite)
  return (
    <div className='favourite'>
      <h1 className='text-[2rem] mb-[5px] leading-[1.2rem] font-[600]'>
        Tin đã lưu
      </h1>
      <div className="w-[100%] flex">
        <div className={`w-[70%] bg-white rounded-lg border-[2px] ${listFavourite.length > 0 ? "" : "h-[250px]"}  mr-[10px] mt-[15px] p-[10px]`}>
            {listFavourite.length > 0 ?
            <div className="">
              <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh sách tin đăng</h3>
              {/* listFavourite.map((item) => {

              }) */}
            </div>
            :
            <div className="">
              <img className='w-[100%] h-[100%] boder-none'  src={heat} alt="Danh sách trống " />

            </div>
            }
        </div>
        <div className="w-[30%] bg-white rounded-lg border-[2px]  min-h-[600px] ml-[10px] mt-[15px] p-[10px]">
        <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh mục cho thuê</h3>
            <ul>
              <li className='flex text-center text-[1.2rem] font-[500]'  > <FaChevronRight className='mt-[6px]' /> Cho thuê Homestays độc lập</li>
              <li className='flex text-center text-[1.2rem] font-[500]'  > <FaChevronRight className='mt-[6px]' /> Cho thuê Homestay nhóm</li>
              <li className='flex text-center text-[1.2rem] font-[500]'  > <FaChevronRight className='mt-[6px]' /> Cho thuê Homestay nghỉ dưỡng</li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Favourite;