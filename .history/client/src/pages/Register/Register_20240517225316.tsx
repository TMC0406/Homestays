/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Input from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>ĐĂNG KÝ</h1>
        <React.Fragment>
            <Input label={'HỌ TÊN'} id={'text'} type={'text'} value={undefined}/>
            <Input label={'SỐ ĐIỆN THOẠI'} id={'number'} type={'number'} value={undefined}/>
            <Input label={'TẠO MẬT KHẨU'} id={'password'} type={'password'} value={undefined}/>    
        </React.Fragment>
        <div className='mb-[20px]'>
          <Button
            text={'Tạo tài khoản'}
            textColor={'text-[#ffffff]'}
            bgColor={'bg-[#3961fb]'}
            className={'w-full h-[45px] font-bold text-[14px]'} onClick={undefined}/>
        </div>
        <div className='block justify-between'>
          <p className='text-[14px] my-[14px] px-[5px]'>
            Bấm vào nút đăng ký tức là bạn đã đồng ý với 
            <span className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'> quy định sử dụng </span>
            của chúng tôi
          </p>
          <p className='text-[14px] my-[14px] px-[5px]'>
            Bạn đã có tài khoản?
            <Link to='/login'>
              <span className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'> Đăng nhập ngay</span>
            </Link>
          </p>
        </div>
      </div>

    </section>
  )
}

export default Register