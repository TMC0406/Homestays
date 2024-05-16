import React from 'react'
import Input from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'

const Register = () => {
  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>ĐĂNG KÝ</h1>
        <React.Fragment>
            <Input label={'HỌ TÊN'} id={'text'} type={'text'} value={undefined}/>
            <Input label={'SỐ ĐIỆN THOẠI'} id={'number'} type={'number'} value={undefined}/>
            <Input label={'TẠO MẬT KHẨU'} id={'password'} type={'password'} value={undefined}/>
            <Input label={<Input
                label={'Tìm kiếm'} id={'radio'} type={'radio'}
            />} id={'radio'} type={'radio'} value={'Tìm kiếm'}/> 
        </React.Fragment>
        <div className='mb-[20px]'>
          <Button
            text={'Đăng nhập'}
            textColor={'text-[#ffffff]'}
            bgColor={'bg-[#3961fb]'}
            className={'w-full h-[45px] font-bold'} onClick={undefined}          />
        </div>
        <div className='flex justify-between'>
          <small className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'>
            Bạn quên mật khẩu???
          </small>
          <small className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'>
            Tạo mật khẩu mới
          </small>
        </div>
      </div>

    </section>
  )
}

export default Register