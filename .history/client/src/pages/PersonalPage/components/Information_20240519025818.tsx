import React from 'react'

const Information = () => {
  return (
    <div className="">
      <h1  className='text-[30px] font-[600]'>Cập nhật thông tin cá nhân</h1>
      <div className="p-[30px] w-[70%]">
        <table className='w-[70%] m-[auto]'>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="id">Mã thành viên</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='id' />
            </td>
          </tr>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="phone">Số điện thoại</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='phone' />
              <p className='text-blue-500 font-[700]'> Đổi số điện thoại</p>
            </td>
          </tr>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="username">Tên hiển thị</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='username' />
            </td>
          </tr>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="Email">Email</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='Email' />
            </td>
          </tr>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="zalo">Số Zalo</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='zalo' />
            </td>
          </tr>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="password">Mật khẩu</label></td>
            
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='password' />
              <p className='text-blue-500 font-[700]'>Đổi mật khẩu</p>
            </td>
          </tr>
          <tr className='m-[15px]'>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="changeAvatar">Ảnh đại diện</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='changeAvatar' />
            </td>
          </tr>
          <tr className='m-[15px]'></tr>
        </table>
      </div>
    </div>
  )
}

export default Information