import React, {useState,useEffect} from 'react'
import Input from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'
import { useLocation } from 'react-router-dom'
import  {apiRegister} from "../../service/auth.js"

const LoginPage = () => {
  const location = useLocation()
  console.log(location);
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>{isRegister ? 'ĐĂNG KÍ TÀI KHOẢN' : 'ĐĂNG NHẬP'}</h1>
        <React.Fragment>
          {isRegister && <Input label={'HỌ TÊN'} id={'text'} type={'text'} value={undefined}/>}
          <Input label={'SỐ ĐIỆN THOẠI'} id={'number'} type={'number'} value={undefined}/>
          <Input label={'MẬT KHẨU'} id={'password'} type={'password'} value={undefined}/>
        </React.Fragment>
        <div className='mb-[20px]'>
          <Button
            text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
            textColor={'text-[#ffffff]'}
            bgColor={'bg-[#3961fb]'}
            className={'w-full h-[45px] font-bold'} onClick={undefined}          />
        </div>
        <div className='flex justify-between'>
          {
          isRegister 
          ? 
              <React.Fragment>
                <small className=''>
                  Bạn đã có tài khoản?
                  <span onClick={() => { setIsRegister(false) }} className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'> Đăng nhập ngay</span>
                </small>
              </React.Fragment>
          : 
              <React.Fragment>
                <small className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'>Bạn quên mật khẩu</small>
                <small onClick={() => {setIsRegister(true)}} className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'>Tạo mật khẩu mới</small>
              </React.Fragment>
          }
        </div>
      </div>
    </section>
  )
}

export default LoginPage