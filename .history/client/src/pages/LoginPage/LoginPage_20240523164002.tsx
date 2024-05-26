import React, {useState} from 'react'
import Input from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'

const LoginPage = () => {

  const [payload, setPayload] = useState({
    name : "",
    phone  :"",
    password  :""
  })
  const handleLogin = ()=>{
      console.log(payload);
      
  }     
  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>ĐĂNG NHẬP</h1>
        <React.Fragment>
          <Input label={'SỐ ĐIỆN THOẠI'} id={'number'} value={payload.phone} setValue={setPayload}/>
          <Input label={'MẬT KHẨU'} id={'password'}  value={payload.password} setValue={setPayload}/>
        </React.Fragment>setPayload
        <div className='mb-[20px]'>
          <Button
            text={'Đăng nhập'}
            textColor={'text-[#ffffff]'}
            bgColor={'bg-[#3961fb]'}
            className={'w-full h-[45px] font-bold'} onClick={handleLogin()}          />
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

export default LoginPage