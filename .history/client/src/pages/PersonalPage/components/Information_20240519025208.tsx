import React from 'react'

const Information = () => {
  return (
    <div className="">
      <h1  className='text-[30px] font-[600]'>Cập nhật thông tin cá nhân</h1>
      <div className="">
        <table>
          <tr>
            <td><label htmlFor="id">Mã thành viên</label></td>
            <td>
              <input type="text" id='id' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="phone">Số điện thoại</label></td>
            <td>
              <input type="text" id='phone' />
              <p className='text-blue-300 font-[400]'> Đổi số điện thoại</p>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="username">Tên hiển thị</label></td>
            <td>
              <input type="text" id='username' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="Email">Email</label></td>
            <td>
              <input type="text" id='Email' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="zalo">Số Zalo</label></td>
            <td>
              <input type="text" id='zalo' />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="password">Mật khẩu</label></td>
            
            <td>
              <input type="text" id='password' />
              <p className='text-blue-300 font-[400]'>Đổi mật khẩu</p>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="changeAvatar">Ảnh đại diện</label></td>
            <td>
              <input type="text" id='changeAvatar' />
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  )
}

export default Information