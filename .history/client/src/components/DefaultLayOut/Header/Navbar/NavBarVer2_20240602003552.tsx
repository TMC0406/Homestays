import React , { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {formatVietnameseToString} from '../../../../ultils/constant'
import * as actions from '../../store/actions'

const notActive = 'hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const active = 'hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2'
const NavBarVer2 = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector((state:any) => state.app)
    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])
  return (
      <div className={`w-full flex ${isAdmin ? 'justify-start' : 'justify-center'} items-center h-[40px] bg-secondary1 text-white`}>
          <div className='w-3/5 flex h-full items-center text-sm font-medium'>
              <Link
                  to={`/`}
                  className={({ isActive }) => isActive ? active : notActive}
              >
                  Trang chủ
              </Link>
              {categories?.length > 0 && categories.map(item => {
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

export default NavBarVer2