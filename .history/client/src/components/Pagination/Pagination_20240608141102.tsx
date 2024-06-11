import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import ItemDetail from "../ItemDetail/ItemDetail";
import Button from "../Button/Button";

const Pagination = (payload:any ) => {
    const {data } = payload 
    ////////////////////////////////////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [perpage, setPerpage] = useState(3);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(perpage);
    const record = data.slice(start, end);
    const total = Math.ceil(data.length / perpage);
    const number = [...Array(total + 1).keys()].slice(1);
    useEffect(() => {
      setStart((currentPage - 1) * perpage);
      setEnd(currentPage * perpage);
    }, [currentPage]);
    // eslint-disable-next-line array-callback-return
    const showPage = data.map((item:any, index: any) => {
        console.log(item );
        
      if (index >= start && index < end) {
        return (
          <div key={index} className="box-item">
            <h1> {item.id }</h1>
            <h1> {item.title}</h1>
            <h1> {item.address}</h1>
            
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
          </div>
        );
      }
    });
    const handlePrev = () => {
      if (currentPage <= 1) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    };
    const handleNext = () => {
      if (currentPage >= total) {
        setCurrentPage(total);
      } else {
        setCurrentPage(currentPage + 1);
      }
    };
    const hanldeChange = (currentPage) => {
      setCurrentPage(currentPage);
    };


  return (
   <div className="">
      <div>
        <div className="box">{showPage}</div>
        <div className=" box-btn">
          <button  onClick={handlePrev}> previos </button>
          {number.map((it ) => {
            return (
              <button className="m-[10px ] border-[2px ]" key={it } onClick={() => hanldeChange(it)}>
                {it}
              </button>
            );
          })}
          <button onClick={handleNext}>next</button>
        </div>
      </div>
   </div>
  )
}

export default Pagination