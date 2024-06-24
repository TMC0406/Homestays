import React, { useEffect, useState, useRef } from "react";
import ItemDetail from '../../pages/HomePage/components/ItemDetail.tsx';
import Button from "../Button/Button.tsx";
import { useSelector} from "react-redux"
const Pagination = ({ data = [] }) => {
  const activeItem = useSelector((state: any) => state.main1.activeItem); 
  const [newData , setNewData] = useState([])
  useEffect(() => {
    switch (activeItem) {
      case 1: setNewData(data)
        break;
      case 2: 
      // eslint-disable-next-line array-callback-return
      // const dataCTPT = data.filter((item:any)=>{
      //   if(item.categoryCode === "ChoThuePhongtro"){
      //     console.log(item);
          
      //     return item
      //   }
      // })
      setNewData(data)
      break;
      case 3: setNewData(data)
      break;
      case 4: setNewData(data)
      break;
      default:
        setNewData([])
        break;
    }
  }, [activeItem])
  
    // eslint-disable-next-line array-callback-return
    // const newData = data.filter((item:any)=>{
    //     if (item?.address.includes("Hồ Chí Minh") ){
    //             return item 
    //     }
    // })
    // console.log(activeItem);
    // console.log(newData);

    
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  const headerPostingLish = useRef()
  // Ensure data is defined before calling slice
  const record = data.slice(start, end);
  const total = Math.ceil(data.length / perPage);
  const number = [...Array(total + 1).keys()].slice(1);

  useEffect(() => {
    setStart((currentPage - 1) * perPage);
    setEnd(currentPage * perPage);
  }, [currentPage, perPage]);

  const showPage = data?.length > 0 && data.map((item:any, index) => {
    if (index >= start && index < end) {
      return (
          <div key={index}>
            {/* <ItemDetail
              key={item?.id} 
              images={JSON.parse(item?.images?.image)} 
              address={item?.address} 
              attributes={item?.attributes}   
              description={JSON.parse(item?.description)}
              star={+item?.star}
              title={item?.title}
              users={item?.users}
            /> */}
            <ItemDetail
              key={item?.id} 
              images={JSON.parse(item?.images?.image)} 
              address={item?.address} 
              attributes={item?.attributes}   
              description={JSON.parse(item?.description)}
              star={+item?.star}
              title={item?.title}
              users={item?.users}
            />
        </div>
      );
    }
    return null;
  });

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, total));
  };

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div>
      {/* <ItemDetail/> */}

        <div className="box">{showPage}</div>
        <div className="box-btn flex">
          <Button text={'Trang trước'} onClick={handlePrev} className={"m-[5px] p-[5px] border-[2px]"} icon={undefined}/>
          {number.map((it) => (
            <Button text={it} onClick={() => handleChange(it)} className={`m-[5px] p-[5px] border-[2px] text-center ${currentPage === it ? "bg-red-700 text-white" : ""}`} icon={undefined}/>
          ))}
          <Button text={'Trang sau'} onClick={handleNext} className={'m-[5px] p-[5px] border-[2px] text-center'} icon={undefined}/>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
