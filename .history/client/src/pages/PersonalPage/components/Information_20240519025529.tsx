import React from 'react'

const Information = () => {
  return (
    <div className="">
      <h1  className='text-[30px] font-[600]'>Cập nhật thông tin cá nhân</h1>
      <div className="p-[30px] w-[70%]">
        <table className='w-[70%] m-[auto]'>
          <tr>
            <td><label htmlFor="id">Mã thành viên</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='id' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="phone">Số điện thoại</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='phone' />
              <p className='text-blue-300 font-[400]'> Đổi số điện thoại</p>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="username">Tên hiển thị</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='username' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="Email">Email</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='Email' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="zalo">Số Zalo</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='zalo' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="password">Mật khẩu</label></td>
            
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='password' />
              <p className='text-blue-300 font-[400]'>Đổi mật khẩu</p>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="changeAvatar">Ảnh đại diện</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='changeAvatar' />
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  )
}

export default Information