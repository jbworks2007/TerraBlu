'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { BsPlay } from 'react-icons/bs'
import { InputDate, InputFeild } from '../elements/InputFeild'
import { RxDividerVertical } from 'react-icons/rx'
import * as BootStrap from 'react-icons/bs'

export default function GetStarted() {

  const [text, setText] = useState("default")
  const [fromdate, setFromDate] = useState(null)
  const [tilldate, setTillDate] = useState(null)

  return (
    <>
      {/* <div className="head-active">
        <BsPlay size={25} className='ico-color' />
        &nbsp;Get Started
      </div> */}

      <div className="mt-3 v-scroll pe-3">
        <div className="row">
          <div className="px-3 col-lg-6 right-border">
            <div className="head-active">
              Organization Details
            </div>

            <InputFeild label="Organisation" placeholder="TerraBlu"
              type={BootStrap} icon="BsBuilding" size={25}
              onChange={e => setText(e.target.value)}
            />

            <div className="row">
              <div className="col-lg-6" style={{ marginTop: '-15px' }}>
                <InputFeild label="City" placeholder="Bhopal" type={BootStrap} icon="BsBuildings" size={25} />
              </div>
              <div className="col-lg-6" style={{ marginTop: '-15px' }}>
                <InputFeild label="Country" placeholder="India" type={BootStrap} icon="BsGlobeCentralSouthAsia" size={25} />
              </div>
            </div>

            <div className="my-3">
              <div className="head-active">
                Contact Details
              </div>
              <InputFeild label="Email" placeholder="example@company.com" type={BootStrap} icon="BsEnvelope" size={25} />
              <InputFeild label="Contact Number" placeholder="XXXXXX1234" type={BootStrap} icon="BsPhone" size={25} />
            </div>

            <div className="mt-4">
              <div className="head-active">
                Assessment Period
              </div>
              <div className="d-flex align-items-center justify-content-start gap-5">
                <div className="">
                  <InputDate placeholder="From" date={fromdate} setDate={setFromDate} />
                </div>
                <div className="">
                  <InputDate placeholder="To" date={tilldate} setDate={setTillDate} />
                </div>
              </div>
            </div>
          </div>

          <div className="px-3 col-lg-6 position-relative">
            <div className="d-flex align-items-center justify-content-between mb-5">
              <div className="head-active">
                Previous Assessments
              </div>
              <div className="small-text">
                showing assessment for last qtr.
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="link-adjust">
                <Link href='#' className='link-one'>
                  Continue where you left off
                </Link>
              </div>
              <div className="small-text">
                total emissions 20t CO2 e
                <RxDividerVertical className='text-purple' size={20} />
                worked on ‘23/08/15
              </div>
            </div>
            <div className="line"></div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="link-adjust">
                <Link href='#' className='link-one'>
                  Continue where you left off
                </Link>
              </div>
              <div className="small-text">
                total emissions 20t CO2 e
                <RxDividerVertical className='text-purple' size={20} />
                worked on ‘23/08/15
              </div>
            </div>
            <div className="line"></div>


          </div>

        </div>
      </div>


    </>
  )
}
