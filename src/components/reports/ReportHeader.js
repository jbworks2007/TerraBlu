'use client'
import React, { useState } from 'react'
import { HiMiniDevicePhoneMobile, HiGlobeAsiaAustralia } from 'react-icons/hi2'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaCalendarDays, FaAngleDown } from 'react-icons/fa6'
import { Dropdown } from 'react-bootstrap'

export default function ReportHeader({ scope, setScope }) {

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="text-light">
            Logo here
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row justify-content-end text-end">
            <div className="row justify-content-end text-end">
              <div className="col-md-4">
                <HiMiniDevicePhoneMobile size={20} className='text-purple mx-1 mb-1' />
                <span className='text-green'>+91 7974442814</span>
              </div>
              <div className="col-md-4">
                <HiMail size={20} className='text-purple mx-1' />
                <span className='text-green'>info@askgalore.com</span>
              </div>
              <div className="col-md-4">
                <HiGlobeAsiaAustralia size={20} className='text-purple mx-1' />
                <span className='text-green'>www.askgalore.com</span>
              </div>
            </div>
            <div className="my-2">
              <HiLocationMarker size={20} className='text-purple mx-1 mb-1' />
              <span className='text-green'>
                Maple High Street, 3rd Floor, Office No. 4A, Opp. Aashima Mall, Hoshangabad Road
                Bhopal, Madhya Pradesh 462026 India
              </span>
            </div>
            <div className="row justify-content-end text-end">
              <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-evenly gap-4">
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
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mt-3 d-flex align-items-center justify-content-evenly gap-4">
                  <div className="">
                    <span className='user-name text-gray'>Methodology : </span>
                    <span className='sub-title2'>CDM</span>
                  </div>
                  <div className="">
                    <Dropdown>
                      <Dropdown.Toggle className="dropdown-zero d-flex justify-content-evenly align-items-center">
                        {/* <div><HiOutlineNewspaper size={18} className='ico-color' /></div> */}
                        <div>{scope}</div>
                        <div><FaAngleDown className='text-end' /></div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='dd-menu-one'>
                        <Dropdown.Item className='dd-one-items' onClick={() => { setScope("Scope-1"); }}>Scope-1</Dropdown.Item>
                        <Dropdown.Item className='dd-one-items' onClick={() => { setScope("Scope-2"); }}>Scope-2</Dropdown.Item>
                        <Dropdown.Item className='dd-one-items' onClick={() => { setScope("Scope-3"); }}>Scope-3</Dropdown.Item>
                        <Dropdown.Item className='dd-one-items' onClick={() => { setScope("All Scopes"); }}>All Scopes</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
