import React, { useEffect, useState, useRef, memo } from "react";
import ItemDetail from '../../pages/HomePage/components/HomeItem/ItemDetail.tsx';
import Button from "../Button/Button.tsx";
import { useSelector} from "react-redux"
import icons from '../../ultils/icons.js'

const {FaArrowLeft, FaArrowRight} = icons
const Pagination = ({ data = []}) => {
  const areas = useSelector((state:any) => state.search.area)
  const activeItem = useSelector((state: any) => state.main1.activeItem); 
  const [newData , setNewData] = useState([])
    const [isLoading, setIsLoading] = useState(true); // Thêm trạng thái loading

    useEffect(() => {
        const loadData = async () => {
          setIsLoading(true);
          let filteredData = [];
          switch (activeItem) {
            case 1:
              console.log(data);
              
              filteredData = data;
              break;
              case 2:
                filteredData = data.filter((item:any) =>{
                  if ( item.categoryCode === 'ChoThuePhongtro') {
                    return item
                  }
                }
                 );
                break;
              case 3:
                filteredData = data.filter((item:any) => item.categoryCode === 'NhaChoThue');
                break;
              case 4:
                filteredData = data.filter((item:any) => item.categoryCode === 'ChoThueCanHo');
                break;
            default:
              filteredData = data;
              break;
          }
          setNewData(filteredData);
          setIsLoading(false); // Dừng trạng thái loading khi dữ liệu đã được xử lý
        };
    loadData();
    }, [activeItem, data ,areas]);
    useEffect(() => {
      switch (areas) {
        case "hcm":
          const listdata = newData.filter((item:any)=>{
            if (item?.address.includes("Hồ Chí Minh")) {
              return item
            }
          })
          setNewData(listdata)
          break;
      case "hn" : 
      const listdata2 = newData.filter((item:any)=>{
        if (item?.address.includes("Hà Nội")) {
          return item
        }
      })
      setNewData(listdata2)
      break
      case "dn" : 
      const listdata3 = newData.filter((item:any)=>{
        if (item?.address.includes("Đà Nẵng")) {
          return item
        }
      })
      setNewData(listdata3)
      break;
        default:
          break;
      }
    }, [areas])
    
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
  const record = newData.slice(start, end);
  const total = Math.ceil(newData.length / perPage);
  const number = [...Array(total + 1).keys()].slice(1);

  useEffect(() => {
    setStart((currentPage - 1) * perPage);
    setEnd(currentPage * perPage);
  }, [currentPage, perPage]);

  // console.log(newData);
  
  const showPage = newData?.length > 0 && newData.map((item:any, index:any) => {
    
    if (index >= start && index < end) {
      return (
          <div key={index}>
            <ItemDetail
              key={item?.id} 
              images={JSON.parse(item?.images?.image)} 
              address={item?.address} 
              attributes={item?.attributes}   
              description={JSON.parse(item?.description)}
              star={+item?.star}
              title={item?.title}
              users={item?.users}
              id={item?.id}
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
      {isLoading ? (
        <div>Loading...</div> // Hiển thị thông báo loading
      ) : (
        <>
          <div className="box">{showPage}</div>
          <div className="box-btn flex">
            <Button text={''} onClick={handlePrev} className={"m-[5px] p-[5px] border-[2px]"} icon={<FaArrowLeft />} />
            {number.map((it, index) => (
              <Button key={index} text={it} onClick={() => handleChange(it)} className={`m-[5px] p-[5px] border-[2px] text-center ${currentPage === it ? "bg-red-700 text-white" : ""}`} icon={undefined} />
            ))}
            <Button text={''} onClick={handleNext} className={'m-[5px] p-[5px] border-[2px] text-center'} icon={<FaArrowRight />} />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Pagination);
