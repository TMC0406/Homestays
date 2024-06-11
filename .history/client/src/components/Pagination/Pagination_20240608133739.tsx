import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemDetail from "../ItemDetail/ItemDetail";
import Button from "../Button/Button";

const Pagination =() => {
    const { posts } = useSelector((state: any) => state.post)
    ////////////////////////////////////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [perpage, setPerpage] = useState(3);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(perpage);
    const record = posts.slice(start, end);
    const total = Math.ceil(posts.length / perpage);
    const number = [...Array(total + 1).keys()].slice(1);
    useEffect(() => {
        setStart((currentPage - 1) * perpage);
        setEnd(currentPage * perpage);
    }, [currentPage]);
    const showPage = posts.map((item, index) => {
        if (index >= start && index < end) {
            return (
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
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <div className="box">{showPage}</div>
        <div className=" box-btn">
            <Button text={'previos'} onClick={handlePrev} className={undefined} icon={undefined}/>
            {number.map((it) => {
                return (
                    <span key={it}>
                        <Button text={it} onClick={() => hanldeChange(it)} className={undefined} icon={undefined}/>
                    </span>
                );
            })}
            <Button text={'next'} onClick={handleNext} className={undefined} icon={undefined}/>
        </div>
      </div>
    </div>
  );
}

export default Pagination
