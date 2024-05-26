import React, {useState,useEffect} from 'react'
import InputForm from '../../components/Input/Input.tsx'
import Button from '../../components/Button/Button.tsx'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import  {apiLogin, apiRegister} from "../../service/auth.js"
// import {actionTypes} from '../../redux/actions/actionTypes.js'
import * as actions from '../../redux/actions/auth.js'
import {useDispatch, useSelector} from 'react-redux'

const LoginPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector(state => state.auth)
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [invalidFields, setInvalidFields] = useState([
    {
      name : "",
      message : ""
    }
  ])
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn])

const [payload, setPayload] = useState({
  name: '',
  phone: '',
  password: ''
})
const handleSubmit = async () => {
  if(isRegister){
    try {
      const response = await apiRegister(payload);
       dispatch({ type: actionTypes.REGISTER_SUCCESS, data: response.data })
      ;
    } catch (error) {
      dispatch({ type: actionTypes.REGISTER_FAIL, data: error.msg });
    }
  }else{
    try {
      const response = await apiLogin(payload);
       dispatch({ type: actionTypes.LOGIN_SUCCESS, data: response.data })
      ;
    } catch (error) {
      dispatch({ type: actionTypes.LOGIN_FAIL, data: error.msg });
    }
  }
  validate(payload)
  
}

const validate = (payload:any) => {
  let invalids = 0
  let fields = Object.entries(payload)
  console.log(fields)
  fields.forEach(item => {
    // console.log(item);
    
    if (item[1] === "") {
        setInvalidFields(
          (pre) => [...pre , {
            name : item[0],
            message  : " Không được để trống"
          }]
        )
        // console.log(item[0] + "  ");
      invalids++
    }
    })
    console.log(invalidFields);
      fields.forEach(item => {
        switch (item[0]) {
            case 'password':
                if (item[0].length < 6) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                    }])
                    invalids++
                }
                break;
            case 'phone':
                if (!+item[0]) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Số điện thoại không hợp lệ.'
                    }])
                    invalids++
                }
                break

            default:
                break;
        }
    })
    return invalids
  }

  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>{isRegister ? 'ĐĂNG KÍ TÀI KHOẢN' : 'ĐĂNG NHẬP'}</h1>
        <React.Fragment>
        {isRegister && <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields} label={'HỌ TÊN'}
                        value={payload.name}
                        setValue={setPayload}
                        keyPayload={'name'}
                        type='name'

                    />}
                    <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'SỐ ĐIỆN THOẠI'}
                        value={payload.phone}
                        setValue={setPayload}
                        keyPayload={'phone'}
                        type='phone'
                    />
                    <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'MẬT KHÂU'}
                        value={payload.password}
                        setValue={setPayload}
                        keyPayload={'password'}
                        type='password'
                    />
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