import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pagination =() => {
    const { posts } = useSelector((state: any) => state.post)
    ////////////////////////////////////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [perpage, setPerpage] = useState(3);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(perpage);
    const record = newsList.slice(start, end);
    const total = Math.ceil(newsList.length / perpage);
    const number = [...Array(total + 1).keys()].slice(1);
    useEffect(() => {
        setStart((currentPage - 1) * perpage);
        setEnd(currentPage * perpage);
    }, [currentPage]);
    const showPage = newsList.map((it, index) => {
        if (index >= start && index < end) {
            return (
                <div key={index} className="box-item">
                    <h2>{it.id}</h2>
                    <p>{it.content}</p>
                    <h5>{it.title}</h5>
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
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <div className="box">{showPage}</div>
        <div className=" box-btn">
          <button onClick={handlePrev}> previos </button>
          {number.map((it) => {
            return (
              <button keys={it} onClick={() => hanldeChange(it)}>
                {it}
              </button>
            );
          })}
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  );
}

export default Pagination
