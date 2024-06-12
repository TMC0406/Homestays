import React, { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
// const Pagination = ({ data = [] }) => {
//   ////////////////////////////////////////////////
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(3);
//   const [start, setStart] = useState(0);
//   const [end, setEnd] = useState(perPage);

//   // Ensure data is defined before calling slice
//   const record = data.slice(start, end);
//   const total = Math.ceil(data.length / perPage);
//   const number = [...Array(total + 1).keys()].slice(1);

//   useEffect(() => {
//     setStart((currentPage - 1) * perPage);
//     setEnd(currentPage * perPage);
//   }, [currentPage, perPage]);

//   const showPage = data?.length > 0 && data.map((item:any, index) => {
//     if (index >= start && index < end) {
//       return (
//           <div key={index}>
//             <ItemDetail
//               key={item?.id} 
//               images={JSON.parse(item?.images?.image)} 
//               address={item?.address} 
//               attributes={item?.attributes}   
//               description={JSON.parse(item?.description)}
//               star={+item?.star}
//               title={item?.title}
//               users={item?.users}
//             />
//         </div>
//       );
//     }
//     return null;
//   });

//   const handlePrev = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNext = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, total));
//   };

//   const handleChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="">
//       <div>
//         <div className="box">{showPage}</div>
//         <div className="box-btn">
//           <button onClick={handlePrev}>Previous</button>
//           {number.map((it) => (
//             <button className="m-[5px] p-[5px]" key={it} onClick={() => handleChange(it)}>
//               {it}
//             </button>
//           ))}
//           <button onClick={handleNext}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;


const Pagination = () => {
  return (
    <div>Pagination

      <ItemDetail images={undefined} address={undefined} attributes={undefined} star={undefined} description={undefined} title={undefined} users={undefined}/>
    </div>
  )
}

export default Pagination