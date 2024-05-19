import React from 'react'

const ManagePostings = () => {
  return (
    <div className='w-[100%] h-[100%] '>
        <div className="flex justify-between px-[30px] items-center">
          <div className="">
            <h1 className='text-[30px] font-[600]'>Quản lý tin đăng</h1>
          </div>
          <div className="">
          <label htmlFor="VIP">Chọn loại VIP</label>
          <select className='border-[2px] mx-[5px]' name="VIP" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
          <label htmlFor="cars">Chọn loại tin</label>
          <select className='border-[2px] mx-[5px]' name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
          <button>Đăng tin</button>
          </div>
        </div>
        <table className='w-[100%] h-[100%] ' >
          <thead>
            <tr>						
              <th>Mã tin</th>
              <th>Ảnh đại diện</th>
              <th>Tiêu đề</th>
              <th>Giá</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày hết hạn</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tr></tr>
          <tr></tr>
        </table>

    </div>
  )
}

export default ManagePostings