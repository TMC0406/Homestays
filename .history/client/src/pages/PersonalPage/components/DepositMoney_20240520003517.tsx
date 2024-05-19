import React from 'react'
import atmBanking from "../../../assets/imgs/listPayImg/atmBanking.png"
import chuyyenkhoan from "../../../assets/imgs/listPayImg/chuyyenkhoan.png"
import diemgiaodich from "../../../assets/imgs/listPayImg/diemgiaodich.png"
import momo from "../../../assets/imgs/listPayImg/momo.png"
import qrcode from "../../../assets/imgs/listPayImg/qr-code.png"
import shopeepay2 from "../../../assets/imgs/listPayImg/shopeepay2.png"
import tindungqt from "../../../assets/imgs/listPayImg/tindungqt.png"
import zalopay from "../../../assets/imgs/listPayImg/zalopay.png"




 



const DepositMoney = () => {
  const listPay = [
    {
      title : "Chuyển khoản",
      img : ,
      link : "" 
    },
    {
      title : "Thẻ ATM Internet Banking",
      img : ,
      link : "" 
    },
    {
      title : "thẻ tín dụng quốc tế",
      img : ,
      link : "" 
    },
    {
      title : "MOMO",
      img : ,
      link : "" 
    },
    {
      title : "ZaloPay",
      img : ,
      link : "" 
    },
    {
      title : "ShopeePay",
      img : ,
      link : "" 
    },
    {
      title : "Điểm giao dịch, cửa hàng tiện lợi",
      img : ,
      link : "" 
    },
    {
      title : "Quét mã QRCode",
      img : ,
      link : "" 
    },
  ]
  return (
    <div className=" h-[100vh] overflow-auto ">
      <h1  className='text-[30px] font-[600]'>Nạp tiền vào tài khoản</h1>
      <div className="w-[100%] h-[100vh] overflow-auto flex">
        <div className="w-[80%] min-h-[100%]">

        </div>
        <div className="w-[20%] min-h-[100%]">

        </div>
      </div>


    </div>
  )
}

export default DepositMoney