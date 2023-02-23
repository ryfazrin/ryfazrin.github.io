import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Certifications from './certifications';

function PaginatedItems({ certificates, itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = certificates.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(certificates.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % certificates.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // )
    setItemOffset(newOffset)
  }

  return (
    <>
      <Certifications currentItems={currentItems} />
      <div className="flex justify-center">
      <ReactPaginate
        nextLabel="»"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        breakLabel="..."
        previousLabel="«"
        pageClassName="btn p-0"
        pageLinkClassName="p-4"
        previousClassName="btn p-0"
        previousLinkClassName="p-4"
        nextClassName="btn p-0"
        nextLinkClassName="p-4"
        activeClassName="btn-active"
        containerClassName="btn-group my-4"
        disabledClassName="btn-disabled"
        renderOnZeroPageCount={null}
      />
      </div>
    </>
  )
}

export default PaginatedItems