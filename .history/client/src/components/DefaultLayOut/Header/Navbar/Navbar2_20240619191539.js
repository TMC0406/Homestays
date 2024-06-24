import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../../../../ultils/Common/formatVietnameseToString'
import { apiGetCategories } from '../../../../service/category'


const notActive = 'hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const active = 'hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2'

const NavBar2 = ({ isAdmin }) => {
    const [data ,setData] = useState({
        arr : [],
        msg : "",
      })
    // const dispatch = useDispatch()
    // const { categories } = useSelector(state => state.app)
    // useEffect(() => {
    //     dispatch(actions.getCategories())
    // }, [])
    
    const categories = async () => {
        try {
          const response = await apiGetCategories()
          console.log(response);
          if (response?.data.err  === 0) {
            setData({...data , arr : response.data.response})
          }else{
            setData({...data , msg : response.data.msg})
          }
      } catch (error) {
        setData({...data , msg : error})
      }}
      categories()

    return (
        <div className={`w-full flex ${isAdmin ? 'justify-start' : 'justify-center'} items-center h-[40px] bg-secondary1 text-white`}>
            <div className='w-3/5 flex h-full items-center text-sm font-medium'>
                <Link
                    to={`/`}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Trang chủ
                </Link>
                {categories?.d > 0 && categories.map(item => {
                    return (
                        <div key={item.code} className='h-full flex justify-center items-center' >
                            <Link
                                to={`/${formatVietnameseToString(item.value)}`}
                                className={({ isActive }) => isActive ? active : notActive}
                            >
                                {item.value}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NavBar2