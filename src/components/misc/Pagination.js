import React from 'react'
import Paginations from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export default function Pagination({ items, pageSize, currentPage, onPageChange }) {

  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages)

  return (
    <div>

      <div className="d-flex align-items-center gap-4">

        <div className="btn-pagination" role='button' >
          <BiChevronLeft />
        </div>

        {pages.map((page) => (
          <div
            key={page}
            className={
              page === currentPage ? 'btn-pagination-active' : 'btn-pagination'
            }
            role='button'
            onClick={() => onPageChange(page)}
          >

            {page}

          </div>
        ))}

        <div className="btn-pagination" role='button'>
          <BiChevronRight />
        </div>

      </div>
    </div>
  )
}

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
