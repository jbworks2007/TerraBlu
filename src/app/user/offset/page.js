'use client'
import { ButtonIcon } from '@/components/elements/Button'
import ProjectCard from '@/components/elements/ProjectCard'
import UserBar from '@/components/misc/UserBar'
import React from 'react'
import { RxDividerVertical } from 'react-icons/rx'
import * as BoxIcons from 'react-icons/bi'

export default function page() {

  const offset = 10.98
  const purchase = 9897.09
  const balance = 876.98

  const handleFilter = () => {
    alert("handle Filter")
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className='mt-1 text-title'>
          Offset
        </div>
        <div>
          <UserBar />
        </div>
      </div>


      <div className="outer-container">
        <div className='d-flex align-items-center justify-content-between'>

          <div className="">
            <span className='sub-title1'>Department : </span><span className='sub-title2'>Finance</span>
          </div>
          <div className="d-none d-md-block">
            <div className="d-flex align-items-center justify-content-end">
              <span className='text1'>Emission Count(t CO2e) </span>
              <span className='bar'><RxDividerVertical size={25} /></span>
              <span className='text2'>total offset: {offset}</span>
              <span className='text2'>total purchase: {purchase}</span>
              <span className='text2'>balance: {balance}</span>
              <div className="">
                <ButtonIcon
                  name="Filter"
                  height={35}
                  type={BoxIcons}
                  icon="BiFilter"
                  size={20}
                  onClick={handleFilter}
                />
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE RESPONSIVE */}
        <div className="d-sm-block d-md-none">
          <div className="mt-2 text-start">
            <div className='text1'>Emission Count(t CO2e) </div>
            {/* <div className='bar'><RxDividerVertical size={25} /></div> */}
            {/* <div className="line" /> */}
            <div className='text2'>total offset: {offset}</div>
            <div className='text2'>total purchase: {purchase}</div>
            <div className='text2'>balance: {balance}</div>
            <div className="mt-2">
              <ButtonIcon
                name="Filter"
                height={35}
                type={BoxIcons}
                icon="BiFilter"
                size={20}
                onClick={handleFilter}
              />
            </div>
          </div>
        </div>

        <div className="line" />

        <div>
          <span className='sub-title1'>As assessed recently : </span><span className='sub-title2'>60t CO2</span>
        </div>

        <div className="ptb-25">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
