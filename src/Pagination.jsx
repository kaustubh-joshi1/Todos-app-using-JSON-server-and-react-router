// Pagination.jsx

import  { useState } from 'react';
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Pagination() {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(5);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((item) => (
        <div key={item}>
          <h3>Item #{item}</h3>
        </div>
      ))}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="react-paginate"
        activeClassName="selected"
      />
    </>
  );
}

export default Pagination;
