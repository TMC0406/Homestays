import React from 'react'

const ManagePostings = () => {
  return (
    <div className='w-[100%] h-[100%] '>
        <div className="flex justify-between px-[30px]">
          <div className="">
            <h1>Quản lý tin đăng</h1>
          </div>
          <div className="">
          <label htmlFor="cars">Choose a car:</label>
          <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
          <label htmlFor="cars">Choose a car:</label>
          <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
          <button>Đăng tin</button>
          </div>
        </div>

    </div>
  )
}

export default ManagePostings