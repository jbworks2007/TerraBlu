'use client'
import React, { useState } from 'react'
import { IoMdShareAlt } from 'react-icons/io'
import { HiOutlineDownload } from 'react-icons/hi'
import UserBar from '@/components/misc/UserBar'
import { IconButton, Tooltip } from '@mui/material'
import ReportHeader from '@/components/reports/ReportHeader'
import ReportScope from '@/components/reports/ReportScope'
import ReportFooter from '@/components/reports/ReportFooter'

export default function page() {
  const [scope, setScope] = useState('Scope-1')
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center" >
        <div className="d-flex justify-content-between align-items-center" >
          <div className='mt-1 mx-2 text-title'>
            Reports
          </div>
          <div className="text-light mx-1">
            <Tooltip title="Download Reports" placement="right">
              <HiOutlineDownload size={25} role='button' />
            </Tooltip>

          </div>
          <div className="text-light mx-1">
            <Tooltip title="Share Reports" placement="right">
              <IoMdShareAlt size={25} role='button' />
            </Tooltip>
          </div>
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      {/* Report Section */}

      <div className="outer-container">
        <ReportHeader scope={scope} setScope={setScope} />
        <hr className='text-purple' />
        <ReportScope scope={scope} />
        <hr className='text-purple' />
        <ReportFooter />
      </div>


    </div>
  )
}
