import React from 'react'
import atmBanking from "../../../assets/imgs/listPayImg/atmBanking.png"
import chuyyenkhoan from "../../../assets/imgs/listPayImg/chuyyenkhoan.png"
import diemgiaodich from "../../../assets/imgs/listPayImg/diemgiaodich.png"
import momo from "../../../assets/imgs/listPayImg/momo.png"
import qrcode from "../../../assets/imgs/listPayImg/qr-code.png"
import shopeepay2 from "../../../assets/imgs/listPayImg/shopeepay2.png"
import tindungqt from "../../../assets/imgs/listPayImg/tindungqt.png"
import zalopay from "../../../assets/imgs/listPayImg/zalopay.png"
import { Link } from 'react-router-dom'
import { link } from 'fs'

const DepositMoney = () => {
  const listPay = [
    {
      title : "Chuyển khoản",
      img : chuyyenkhoan,
      link : "/" 
    },
    {
      title : "Thẻ ATM Internet Banking",
      img : atmBanking,
      link : "/" 
    },
    {
      title : "thẻ tín dụng quốc tế",
      img : tindungqt,
      link : "/" 
    },
    {
      title : "MOMO",
      img : momo,
      link : "/" 
    },
    {
      title : "ZaloPay",
      img : zalopay,
      link : "/" 
    },
    {
      title : "ShopeePay",
      img : shopeepay2,
      link : "/" 
    },
    {
      title : "Điểm giao dịch, cửa hàng tiện lợi",
      img : diemgiaodich,
      link : "/" 
    },
    {
      title : "Quét mã QRCode",
      img : qrcode,
      link : "/" 
    },
  ]
  return (
    <div className=" h-[100vh] overflow-auto ">
      <h1  className='text-[30px] font-[600]'>Nạp tiền vào tài khoản</h1>
      <div className="w-[100%] h-[100vh] overflow-auto flex">
        <div className="w-[80%] min-h-[100%]">
          <br /><br />
          <h1  className='text-[30px] font-[400]'>Mời bạn chọn phương thức nạp tiền</h1>
          <br /><br />
          <div className="w-[90%] m-auto grid grid-cols-3  gap-[40px]">
            {
              listPay.map((item)=>{
                  return (
                    <Link to={item.link}>
                        <div className="w-[180px] h-[190px] bg-white m-auto m-[5px]
                        scale-[1.1] hover:shadow-[1px_1px_30px_rgba(0,0,0,0.5)]
                        group rounded-[20px] border-[3px] border-[red] overflow-hidden">
                        <div className="w-[100%] h-[150px]">
                            <img src={item.img} alt="img" className='w-[100%] h-[100%] p-[10px]' />
                        </div>
                        <div className="w-[100%] h-[40px] group-hover:bg-blue-500">
                            <h1 className=''> {item.title}</h1>
                        </div>
                        </div>
                    </Link>
                  )
              })
            }
          
          </div>
        </div>
        <div className="w-[20%] min-h-[100%]">

        </div>
      </div>


    </div>
  )
}

export default DepositMoney