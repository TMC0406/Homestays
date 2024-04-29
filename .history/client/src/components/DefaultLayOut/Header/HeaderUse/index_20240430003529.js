import React,{useState} from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineChevronDown } from 'react-icons/hi';
import imgVN from  "../../../../assets/img/HeaderImg/default.png"
import imgEN from  "../../../../assets/img/HeaderImg/english.png"
import {Link} from "react-router-dom"

const HeaderUse = () => {
    const [language,setLanguage] = useState(true)
    const [open,setOpen] = useState(false)
  return (
    <div className='header-use'>
        <div id="notify" className='HeaderUse-child'>
            <IoMdNotificationsOutline className='HeaderUse-child-ico'/>
            <span>Thông Báo</span>
        </div>
        <Link to="/cart">
            <div id="cart" className='HeaderUse-child'>
                    <BsCart3 className='HeaderUse-child-ico'/>
                    <span>Giỏ Hàng</span>
            </div>
        </Link>
        <Link to="/login">
            <div id="account" className='HeaderUse-child'>
                <AiOutlineUser className='HeaderUse-child-ico'/>
                <span>Tài Khoản</span>
            </div>
        </Link>
        <div id="language" className='HeaderUse-child'>
            <div className='language' onClick={()=>setOpen(!open)}>
                {
                    language?
                    <div>
                        <img className='language-img' src={imgVN} alt='vietnamese'/>
                        <HiOutlineChevronDown style={{margin: "10px 0"}}/>
                    </div>
                    :
                    <div>
                        <img className='language-img' src={imgEN} alt='english'/>
                        <HiOutlineChevronDown style={{margin: "10px 0"}}/>
                    </div>
                }
                {
                    open?
                    <div  className='language-option' >
                        <div onClick={()=>setLanguage(true)}>
                            <img className='language-img' src={imgVN} alt='vietnamese'/>
                            <span>VN</span>
                        </div><br/>
                        <div onClick={()=>setLanguage(false)}>
                            <img className='language-img' src={imgEN} alt='english'/>
                            <span>EN</span>
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    </div>
  )
}

export default HeaderUse