import React from 'react'
import Input from '../../components/Input/Input.tsx'

const LoginPage = () => {
  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>ĐĂNG NHẬP</h1>
        <React.Fragment>
          <Input label={'SỐ ĐIỆN THOẠI'}/>
        </React.Fragment>
        <div></div>
      </div>

    </section>
  )
}

export default LoginPage