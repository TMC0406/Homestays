import React ,{useState ,useEffect} from 'react'
import ProminentArea from '../../components/ProminentArea/ProminentArea.tsx'
import PostingList from './components/PostingList.tsx'
import ItemSidebar from './components/HomeItem/ItemSidebar.tsx'
import { apiGetCategories } from '../../service/category.js'
import { apiGetPrices } from '../../service/price.js'

const HomePage = () => {
  const [data ,setData] = useState({
    arr : [],
    msg : "",
  })
  const [dataPrice, setDataPrice] = useState({
    arrPrice: [],
    msgPrice : "",
  })
  useEffect(() => {
  categories()
  prices()
  }, [])
  
   const categories = async () => {
    try {
      const response = await apiGetCategories()
      if (response?.data.err  === 0) {
        setData({...data , arr : response.data.response})
      }else{
        setData({...data , msg : response.data.msg})
      }
  } catch (error) {
    setData({...data , msg : error})
  }}

  const prices = async () => {
    try {
      const response = await apiGetPrices()
      if(response?.data.err === 0) {
        setDataPrice({...dataPrice, arrPrice: response.data.response})
      }else{
        setDataPrice({...dataPrice , msgPrice : response.data.msg})
      }
    } catch (error) {
      setDataPrice({...dataPrice , msgPrice : error})
    }
  }

  return (
    <section className='w-1100 '>
      <div className='mb-[15px]'>
        <h1 className='flex justify-center text-[2rem] font-bold'>
          Tìm kiếm chỗ thuê ưng ý
        </h1>
        <p className='text-[15px] text-[#65676b] font-normal leading-normal'>
          Kênh thông tin Homestay số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
        </p>
      </div>
      <div className='mb-[20px]'>
        <ProminentArea />
      </div>
      <section className='flex justify-around'>
        <div className='bg-[#fff] w-[70%] mr-[10px]'>
          <PostingList/>
        </div>
        <div className='bg-red-500 w-[30%]'>
          <ItemSidebar content={data} title='Danh sách cho thuê'/>
          <ItemSidebar content={dataPrice} title={'Xem theo giá'}/>
          <ItemSidebar content={undefined} title={'Xem theo diện tích'}/>
        </div>
      </section>
    </section>
  )
}

export default HomePage