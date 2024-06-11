import React, { useEffect, useState } from "react";

const Pagination = ({ data = [] }) => {
  ////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);

  // Ensure data is defined before calling slice
  const record = data.slice(start, end);
  const total = Math.ceil(data.length / perPage);
  const number = [...Array(total + 1).keys()].slice(1);

  useEffect(() => {
    setStart((currentPage - 1) * perPage);
    setEnd(currentPage * perPage);
  }, [currentPage, perPage]);

  const showPage = data?.length > 0 && data.map((item, index) => {
    if (index >= start && index < end) {
      return (
        <div key={index} className="box-item">
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.address}</h1>
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
        <div className="box">{showPage}</div>
        <div className="box-btn">
          <button onClick={handlePrev}>Previous</button>
          {number.map((it) => (
            <button key={it} onClick={() => handleChange(it)}>
              {it}
            </button>
          ))}
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
