'use client'
import React, { useState } from 'react'
import { HiOutlineDownload } from 'react-icons/hi'
import Table from 'react-bootstrap/Table';
import projects from '@/utils/projectdetails.json'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import img2 from '../../../public/Avatar.png'
import Image from 'next/image';
import Pagination, { paginate } from './Pagination';

export default function Transactions() {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(projects, currentPage, pageSize)

  return (
    <>
      <div className="outer-container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-four text-light">Transaction History</div>
          <div className="btn btn-link text-four text-green tdn">Export <HiOutlineDownload size={20} className='mb-1' /></div>
        </div>

        <Table responsive className='text-light'>
          <thead className='bottom-border'>
            <tr>
              <th>S.No.</th>
              <th>Project</th>
              <th>Status</th>
              <th>Amount($)</th>
              <th>Offset quantity (t CO2e)</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {
              paginatedPosts.map((key, index) =>
                <tr className='my-5 align-middle bottom-border'>
                  <td>{index + 1}</td>
                  <td>
                    <>
                      <div className="d-flex align-items-center">
                        <div className="user-icon">
                          <Image src={img2} width={40} />
                        </div>
                        <div className="mx-2">
                          <div className="pname">{key.pname}</div>
                          <div className="pid">Project ID : {key.pid}</div>
                        </div>
                      </div>
                    </>
                  </td>
                  <td>
                    <div>
                      <div
                        className={key.status === 'Successful' ? 'text-green' :
                          key.status === 'Pending' ? 'text-warning' :
                            key.status === 'Failed' ? 'text-danger' : ''
                        }>
                        {key.status}
                      </div>
                      <div className="pid">{key.date}</div>
                    </div>
                  </td>
                  <td>{key.amount}</td>
                  <td>{key.offsetquantity}</td>
                  <td>{
                    key.status === 'Successful' ?
                      <AiFillEye size={15} className='text-green' /> :
                      <AiFillEyeInvisible size={15} className={key.status === 'Pending' ? 'text-warning' : 'text-danger'} />
                  }
                  </td>
                </tr>
              )
            }

          </tbody>
        </Table>
        <div className="d-flex align-items-center justify-content-end">
          <Pagination
            items={projects.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>

      </div>
    </>
  )
}
