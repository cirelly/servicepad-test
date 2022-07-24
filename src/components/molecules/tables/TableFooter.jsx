import React, { useEffect } from "react";
import RightArrow from '../../atoms/icon/RightArrow'
import LeftArrow from '../../atoms/icon/LeftArrow'
const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  const handleNextPage = () =>{
      setPage(page + 1);
  }
  const handlePreviousPage = () =>{
    setPage(page - 1);
  }
  return (
    <div className='c-tableFooter'>
      {<button className={`c-arrowButton ${page > 1 ? '' : 'c-arrowButton--hidden'}`} onClick={handlePreviousPage}><LeftArrow />  Previous</button>}
      <div>
      {range.map((el, index) => (
        <button
          key={index}
          className={`c-tableFooter__button${page === el ? '--active' : ''}`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
      </div>
      {<button className={`c-arrowButton ${slice.length - 1 != page ? '': 'c-arrowButton--hidden'  }`} onClick={handleNextPage}>Next  <RightArrow /></button>}
    </div>
  );
};

export default TableFooter;