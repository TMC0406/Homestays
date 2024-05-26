import React, {useState,useEffect} from 'react'
import Input from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'
import { useLocation } from 'react-router-dom'
import  {apiLogin, apiRegister} from "../../service/auth.js"
import {actionTypes} from '../../redux/actions/actionTypes.js'
import * as actions from '../../redux/actions/auth.js'
import {useDispatch} from 'react-redux'

const LoginPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [invalidtFields, setInvalidtFields] = useState([])
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

const [payload, setPayload] = useState({
  name: '',
  phone: '',
  password: ''
})
const handleSubmit = async () => {
  // if(isRegister){
  //   try {
  //     const response = await apiRegister(payload);
  //      dispatch({ type: actionTypes.REGISTER_SUCCESS, data: response.data })
  //     ;
  //   } catch (error) {
  //     dispatch({ type: actionTypes.REGISTER_FAIL, data: error.msg });
  //   }
  // }else{
  //   try {
  //     const response = await apiLogin(payload);
  //      dispatch({ type: actionTypes.LOGIN_SUCCESS, data: response.data })
  //     ;
  //   } catch (error) {
  //     dispatch({ type: actionTypes.LOGIN_FAIL, data: error.msg });
  //   }
  // }
  validate(payload)
  
}

const validate = (payload) => {
  let invalidt = 0;
  const fields = Object.entries(payload); // Chuyển đổi đối tượng thành mảng

  fields.forEach(item => {
    if (item[1] === '') {
      setInvalidtFields((prev) => {
        return [
          ...prev,
          {
            name: item[0],
            msg: 'Không được bỏ trống trường này'
          }
        ]
      });
      invalidt++;
    }
  });

  console.log(fields);
  return invalidt; // Có thể trả về số lượng trường không hợp lệ nếu cần
};

  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>{isRegister ? 'ĐĂNG KÍ TÀI KHOẢN' : 'ĐĂNG NHẬP'}</h1>
        <React.Fragment>
          {isRegister && <Input label={'HỌ TÊN'} id={'text'} type={'name'} value={payload.name} setValue={setPayload}/>}
          <Input label={'SỐ ĐIỆN THOẠI'} id={'number'} type={'phone'} value={payload.phone} setValue={setPayload}/>
          <Input label={'MẬT KHẨU'} id={'password'} type={'password'} value={payload.password} setValue={setPayload}/>
        </React.Fragment>
        <div className='mb-[20px]'>
          <Button
            text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
            textColor={'text-[#ffffff]'}
            bgColor={'bg-[#3961fb]'}
            className={'w-full h-[45px] font-bold'} onClick={handleSubmit}          />
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