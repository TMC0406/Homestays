import React from 'react'
import icoMenu from "../../../../assets/img/HeaderImg/ico_menu.png"
import icoMenuƯhite from "../../../../assets/img/HeaderImg/ico_menu_white.png"
import { HiOutlineChevronDown } from 'react-icons/hi';
const Menu = () => {
  return (
    <div className='menu'>
      <img className="ico-menu" src={icoMenu} alt="Logo Fahasha"/>
      <img className="ico-menu-white" src={icoMenuƯhite} alt="Logo Fahasha"/>
      <span>
        <HiOutlineChevronDown style={{margin: "5px 0"}}/>
      </span>
    </div>
  )
}

export default Menu