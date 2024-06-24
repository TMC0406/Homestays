import React ,{useState ,useEffect} from 'react'
import ProminentArea from '../../components/ProminentArea/ProminentArea.tsx'
import PostingList from './components/PostingList.tsx'
import Sidebar from './components/Sidebar.tsx'
// import ItemSidebar from './components/HomeItem/ItemSidebar.tsx'
// import { apiGetCategories } from '../../service/category.js'
// import { apiGetPrices } from '../../service/price.js'
// import { apiGetAcreages } from '../../service/acreage.js'

const HomePage = () => {
  // const [data ,setData] = useState({
  //   arr : [],
  //   msg : "",
  // })
  // const [dataPrice, setDataPrice] = useState({
  //   arr: [],
  //   msg : "",
  // })
  // const [dataAcreage, setDataAcreage] = useState({
  //   arr: [],
  //   msg: []
  // })
  // useEffect(() => {
  // categories()
  // prices()
  // acreage()
  // }, [])
  
  // const categories = async () => {
  //   try {
  //     const response = await apiGetCategories()
  //     if (response?.data.err  === 0) {
  //       setData({...data , arr : response.data.response})
  //     }else{
  //       setData({...data , msg : response.data.msg})
  //     }
  // } catch (error) {
  //   setData({...data , msg : error})
  // }}

  // const prices = async () => {
  //   try {
  //     const response = await apiGetPrices()
  //     if(response?.data.err === 0) {
  //       setDataPrice({...dataPrice, arr: response.data.response.sort((a:any, b:any)=> {return +a.order - +b.order})})
  //     }else{
  //       setDataPrice({...dataPrice , msg : response.data.msg})
  //     }
  //   } catch (error) {
  //     setDataPrice({...dataPrice , msg : error})
  //   }
  // }

  // const acreage = async () => {
  //   try {
  //     const response = await apiGetAcreages()
  //     if(response?.data.err === 0) {
  //       setDataAcreage({...dataAcreage, arr: response.data.response.sort((a:any, b:any)=> {return +a.order - +b.order})})
  //     }else{
  //       setDataAcreage({...dataAcreage , msg : response.data.msg})
  //     }
  //   } catch (error) {
  //     setDataAcreage({...dataAcreage , msg : error})
  //   }
  // }

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
        <div className='bg-[#f5f5f5] w-[30%]'>
          {/* <ItemSidebar content={data} title='Danh sách cho thuê'/>
          <ItemSidebar content={dataPrice} title={'Xem theo giá'}/>
          <ItemSidebar content={dataAcreage} title={'Xem theo diện tích'}/> */}
          <Sidebar/>
        </div>
      </section>
    </section>
  )
}

export default HomePage