import React from 'react'
import Input from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'

const LoginPage = () => {
  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>ĐĂNG NHẬP</h1>
        <React.Fragment>
          <Input label={'SỐ ĐIỆN THOẠI'}/>
          <Input label={'MẬT KHẨU'}/>
        </React.Fragment>
        <div>
          <Button
            text={'Đăng nhập'}
            textColor={'text-[#ffffff]'}
            bgColor={'bg-[#3961fb]'}
            className={'w-full h-[45px] font-bold'} onClick={undefined}          />
        </div>
        <div >
          <small className='text-[#1266dd] hover:text-[#f60]'>
            Bạn quên mật khẩu?
          </small>
          <small className='text-[#1266dd] hover:text-[#f60]'>
            Tạo mật khẩu mới
          </small>
        </div>
      </div>

    </section>
  )
}

export default LoginPage