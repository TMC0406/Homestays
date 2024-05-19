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
          <select className='border-[2px] mx-[5px]' name="VIP" id="VIP">
              <option value="HOT">Tin Hot</option>
              <option value="THUONG">Tin thường</option>
              <option value="VIP10">Tin VIP 10</option>
              <option value="VIP20">Tin VIP 20</option>
              <option value="VIP30">Tin VIP 30</option>
          </select>
          <label htmlFor="NEWS">Chọn loại tin</label>
          <select className='border-[2px] mx-[5px]' name="NEWS" id="NEWS">
              <option value="NewsShowing">Tin đang hiển thị</option>
              <option value="ExpiredNews">Tin hết hạn</option>
              <option value="ExpiredNews">Tin đang ẩn</option>
          </select>
          <button className='px-[10px] py-[5px] text-white font-[500] bg-[#dc3545]'>Đăng tin mới</button>
          </div>
        </div>
        <table className='w-[100%] h-[100%] m-[5px]' >
          <thead className=' border-[2px]'>
            <tr>						
              <th className=' border-r-[2px]'>Mã tin</th>
              <th className=' border-r-[2px]'>Ảnh đại diện</th>
              <th className=' border-r-[2px]'>Tiêu đề</th>
              <th className=' border-r-[2px]'>Giá</th>
              <th className=' border-r-[2px]'>Ngày bắt đầu</th>
              <th className=' border-r-[2px]'>Ngày hết hạn</th>
              <th className=' border-r-[2px]'>Trạng thái</th>
            </tr>
          </thead>
          <tr></tr>
          <tr></tr>
        </table>

    </div>
  )
}

export default ManagePostings