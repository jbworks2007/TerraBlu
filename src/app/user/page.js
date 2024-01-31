'use client'
import BarChart from '@/components/charts/BarChart'
import LineChart from '@/components/charts/LineChart'
import PieChart from '@/components/charts/PieChart'
import UserBar from '@/components/misc/UserBar'
import React, { useState } from 'react'
import { BiCalendar, BiChart, BiBarChartSquare } from 'react-icons/bi'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { FaAngleDown } from 'react-icons/fa'
import { Dropdown } from 'react-bootstrap'
import Link from 'next/link'

export default function page() {

  const [department, setDepartment] = useState("Finance")

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className='mt-1'>
          <h1 className='text-title'>Dashboard</h1>
          <div className='sub-title3'>Track your sustainability goals</div>
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      <div className="mt-3 row">
        <div className="col-lg-2">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-zero d-flex justify-content-between align-items-center">
              <div><HiOutlineNewspaper size={18} className='ico-color' /></div>
              <div>{department}</div>
              <div><FaAngleDown className='text-end' /></div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='dd-menu-one'>
              <Dropdown.Item className='dd-one-items' onClick={() => { setFuelType("Item-1"); }}>Item-1</Dropdown.Item>
              <Dropdown.Item className='dd-one-items' onClick={() => { setFuelType("Item-2"); }}>Item-2</Dropdown.Item>
              <Dropdown.Item className='dd-one-items' onClick={() => { setFuelType("Item-3"); }}>Item-3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="mt-0 row g-3">
        <div className="col-lg-8">
          <div className="line-graph">
            <div className="d-flex align-items-center justify-content-between">
              <div className="graph-heading">
                Goal Vs Current
              </div>
              <div className="graph-btn-pos">
                <button className='btn btn-graph'>
                  <BiCalendar size={15} style={{ marginBottom: '4px', marginRight: '5px' }} />
                  Months

                </button>
              </div>
            </div>
            <LineChart />
          </div>

        </div>
        <div className="col-lg-4">
          <div className="pie-graph">
            <div className="d-flex align-items-center justify-content-between">
              <div className="graph-heading">
                Project Type
              </div>
              <div className="graph-btn-pos">
                <button className='btn btn-graph'>
                  <BiChart size={15} />
                </button>
              </div>
            </div>
            <PieChart />
          </div>
        </div>
      </div>


      <div className="mt-1 row g-3">
        <div className="col-lg-8">
          <div className="bar-graph">
            <div className="row">
              <div className="col-lg-6">
                <div className="graph-heading">
                  Emission Vs Offset
                </div>
              </div>
              <div className="col-lg-6">
                <div className="graph-btn-pos">
                  <div className="d-flex align-items-center justify-content-end gap-2">
                    <button className='btn btn-graph'>
                      <BiBarChartSquare size={15} style={{ marginBottom: '4px', marginRight: '5px' }} />
                      Column
                    </button>
                    {/* <button className='btn btn-graph'>
                    <BiChart size={15} style={{ marginBottom: '4px', marginRight: '5px' }} />
                    Finance
                  </button> */}
                    <button className='btn btn-graph'>
                      <BiCalendar size={15} style={{ marginBottom: '4px', marginRight: '5px' }} />
                      7 Days
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="news-box">
            <div className="d-flex align-items-center mb-3">
              <div className="graph-heading">
                Highlights
              </div>
              <div className='green-dot'></div>
            </div>

            <div className="px-4">
              <div className="d-flex align-items-center">
                <div className="news-icon">
                  <HiOutlineNewspaper size={20} />
                </div>
                <Link className="headline" href="https://www.sciencedaily.com/releases/2023/08/230804161748.html" target='_blank'>
                  Sustainable Plastic Made More Compostable
                </Link>
              </div>
              <div className="line"></div>
            </div>

            <div className="px-4">
              <div className="d-flex align-items-center">
                <div className="news-icon">
                  <HiOutlineNewspaper size={20} />
                </div>
                <Link className="headline" href="https://www.hindustantimes.com/environment/bhutan-becomes-country-with-net-zero-carbon-emissions-101692151932977.html" target='_blank'>
                  Bhutan becomes First country with ‘net zero carbon emission’
                </Link>
              </div>
              <div className="line"></div>
            </div>

            <div className="px-4">
              <div className="d-flex align-items-center">
                <div className="news-icon">
                  <HiOutlineNewspaper size={20} />
                </div>
                <Link className="headline" href="https://happyeconews.com/six-fashion-brands-pushing-circular-design-beyond-recycling/" target='_blank'>
                  The 6 Fashion Brands Creating a Sustainable Fashion Future
                </Link>
              </div>
              <div className="line"></div>
            </div>

            <div className="px-4">
              <div className="d-flex align-items-center">
                <div className="news-icon">
                  <HiOutlineNewspaper size={20} />
                </div>
                <Link className="headline" href="https://happyeconews.com/solar-in-the-polar-regions-how-solar-energy-could-work-in-the-arctic-and-antarctic/" target='_blank'>
                  Solar In The Polar Regions
                </Link>
              </div>
              <div className="line"></div>
            </div>

            <div className="px-4">
              <div className="d-flex align-items-center">
                <div className="news-icon">
                  <HiOutlineNewspaper size={20} />
                </div>
                <Link className="headline" href="https://www.euronews.com/green/2022/12/29/circular-economy-human-hair-recycled-to-clean-waterways-in-belgium" target='_blank'>
                  Circular economy: Human hair recycled to clean waterways in Belgium
                </Link>
              </div>
              <div className="line"></div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
