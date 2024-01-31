'use client'
import React, { useState } from 'react'
import { RxDividerVertical } from 'react-icons/rx'
import { HiOutlineDownload } from 'react-icons/hi'
import { BiChevronLeft } from 'react-icons/bi'
import { TbWorldDown } from 'react-icons/tb'
import UserBar from '@/components/misc/UserBar'
import Link from 'next/link'
import { RoundIcon } from '@/components/elements/Button'
import { FaCalendarDays } from 'react-icons/fa6'
import summary from "@/utils/summary.json"
import DoublePieChart from '@/components/charts/DoublePieChart'

export default function page() {

  const getLast = (carbon) => {
    let last = carbon.substring(carbon.length - 1);
    return last;
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className="d-flex justify-content-between align-items-center" >
          <div className="">
            <Link className='tdn' href="/user/assessment">
              <RoundIcon icon={BiChevronLeft} size={30} />
            </Link>
          </div>
          <div className='mt-1 mx-2 text-title'>
            Summary
          </div>
          <div className="text-light">
            <HiOutlineDownload size={25} role='button' />
          </div>
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      {/* SUB-SECTION */}

      <div className="outer-container">
        <div className="">
          <span className='sub-title1'>Department : </span><span className='sub-title2'>Finance</span>
        </div>
        <div className="line" />
        <div className="row justify-content-between">
          <div className="d-flex align-items-center gap-5">
            <div className="">
              <label className='label-two'>From</label>
              <div className="align-middle">
                <FaCalendarDays size={18} className='text-green mb-2' />
                <span className='date-text'>13 Jul ‘23</span>
              </div>
            </div>
            <div className="">
              <label className='label-two'>To</label>
              <div className="align-middle">
                <FaCalendarDays size={18} className='text-green mb-2' />
                <span className='date-text'>17 Jul ‘23</span>
              </div>
            </div>
            <div className="mt-3">
              <span className='text-title'>789.67 </span>
              <span className='sub-title2'>t CO2e</span>
            </div>
          </div>
          <div className="mt-3 col-lg-6 right-border">
            {
              summary.map((key, index) =>
                <>
                  <div className="mt-2 d-flex align-items-center justify-content-between">
                    <div className="text-category">
                      {key.category}
                    </div>
                    <div className="text-carbon">
                      <span className={getLast(key.carbon) === 't' ? 'text-warning' : 'text-light'}>
                        {key.carbon}
                      </span>
                      <span className='mx-2 text-light'>CO2e</span>
                    </div>
                  </div>
                </>
              )
            }
          </div>
          <div className="col-lg-6">
            <div className="px-3">
              <h5 className='text-green'>Summary</h5>
              <DoublePieChart />

              <div className="highlight-box">
                <div className="p-4">
                  <h5 className='text-green'>Highlights</h5>
                  <ul className='text-gray'>
                    <li className='my-2'>Sustainable Plastic Made More Compostable</li>
                    <li className='my-2'>Bhutan becomes country with ‘net zero carbon emissions’</li>
                    <li className='my-2'>The 6 Fashion Brands Creating a Sustainable Fashion Future</li>
                    <li className='my-2'>Solar In The Polar Regions</li>
                    <li className='my-2'>Circular economy: Human hair recycled to clean waterways in Belgium</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 d-flex align-items-center justify-content-between">
                <div className="text-green">
                  <h5>Ready to offset your emission?</h5>
                </div>
                <div className="">
                  <button className='btn btn-green px-3'>
                    <TbWorldDown className='mx-1 mb-1' size={20} />
                    Offset</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
