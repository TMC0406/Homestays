import React from 'react'
import {useSelector} from "react-redux"
const Information = () => {
  const { username,phone ,id ,avatar} = useSelector((state:any) => state.auth)
  return (
    <div className=" h-[100vh] overflow-auto ">
      <h1  className='text-[30px] font-[600]'>Cập nhật thông tin cá nhân</h1>
      <form className="p-[30px] w-[70%]">
        <table className='w-[70%] m-[auto] border-spacing-3'>
          <tr>
            <td><label className='font-[500] text-[1.2rem] ' htmlFor="id">Mã thành viên</label></td>
            <td>
              <p  className='w-[100%] bg-gray-400 p-[5px] border-[2px] min-w-[100%]' id='id' >{id}</p>
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="phone">Số điện thoại</label></td>
            <td>
              <input type="text" value={phone} className=' p-[5px]  border-[2px] min-w-[100%]' id='phone' />
              <p className='text-blue-500 font-[700]'> Đổi số điện thoại</p>
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="username">Tên hiển thị</label></td>
            <td>
              <input type="text" value={username} className=' p-[5px]  border-[2px] min-w-[100%]' id='username' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="Email">Email</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='Email' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="zalo">Số Zalo</label></td>
            <td>
              <input type="text" className=' p-[5px]  border-[2px] min-w-[100%]' id='zalo' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="password">Mật khẩu</label></td>

            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='password' />
              <p className='text-blue-500 font-[700]'>Đổi mật khẩu</p>
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="changeAvatar">Ảnh đại diện</label></td>
            <td>
              <img className='w-[100px] h-[100px] shadow-[1px_1px_1px_1px_#a7acaf]  m-[10px]' src={avatar} alt="avatar" />
              <input type="file" className='border-[2px] min-w-[100%]' id='changeAvatar' />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
                <button className='w-[100%] h-[50px] text-center bg-blue-400 font-[600] text-white text-[1.2tem]'>Lưu thay đổi & Cập nhập</button>
            </td>
            </tr>
        </table>
      </form>
    </div>
  )
}

export default Information