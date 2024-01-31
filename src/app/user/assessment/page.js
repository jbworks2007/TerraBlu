'use client'
import React, { useState } from 'react'
import { RxDividerVertical } from 'react-icons/rx'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ButtonTabs from '@/components/misc/ButtonTabs'
import UserBar from '@/components/misc/UserBar'

export default function page() {

  const [progres, setProgres] = useState(77)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className='mt-1 text-title'>
          Assessment
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      {/* SUB-SECTION */}


      <div className="outer-container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <span className='sub-title1'>Department : </span><span className='sub-title2'>Finance</span>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="progress-text">Progress</div>
                  <RxDividerVertical className='text-purple' size={40} />
                  <div className="perc-text">{`${progres}%`}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="position-relative">
                  <ProgressBar now={progres} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ptb-25">
          <ButtonTabs />
        </div>


      </div>



    </>
  )
}
