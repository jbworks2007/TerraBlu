'use client'
import React, { useState, useRef } from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight, BiSolidFridge, BiSolidTruck, BiWalk, BiSolidPlaneAlt } from 'react-icons/bi'
import { BsPlay, BsFillFuelPumpDieselFill, BsBuildingsFill } from 'react-icons/bs'
import { MdEnergySavingsLeaf, MdCommute, MdFastfood, MdHomeWork } from 'react-icons/md'
import { IoCarSportSharp, IoTrashBinSharp, IoWater } from 'react-icons/io5'
import { GiMaterialsScience, GiHeatHaze } from 'react-icons/gi'
import { TbAirConditioning } from 'react-icons/tb'
import Fuels from '../sections/Fuels'
import GetStarted from '../sections/GetStarted'
import BioEnergy from '../sections/BioEnergy'
import OwnedVehicles from '../sections/OwnedVehicles'
import Refrigerants from '../sections/Refrigerants'
import WttFuels from '../sections/WttFuels'
import MaterialUsed from '../sections/MaterialUsed'
import WasteDisposal from '../sections/WasteDisposal'
import BusinessTravel from '../sections/BusinessTravel'
import EmployeesCommuting from '../sections/EmployeesCommuting'
import Flight from '../sections/Flight'
import Food from '../sections/Food'
import FreightingGoods from '../sections/FreightingGoods'
import Water from '../sections/Water'
import Hotels from '../sections/Hotels'
import HomeOffice from '../sections/HomeOffice'
import Electricity from '../sections/Electricity'
import HeatSteam from '../sections/HeatSteam'
import DistrictCooling from '../sections/DistrictCooling'
import * as Hi from 'react-icons/hi'
import * as BootStrap from 'react-icons/bs'
import { ButtonIcon, IconButton } from '@/components/elements/Button'
import Link from 'next/link'


export default function ButtonTabs() {

  const btnn = {
    "data": [
      {
        "icon_type": "BootStrap",
        "icon_name": "BsPlay",
        "field_name": "Get Started"
      },
      {
        "icon_type": "BootStrap",
        "icon_name": "BsFillFuelPumpDieselFill",
        "field_name": "Fuelse"
      }
    ]
  }


  const [active, setActive] = useState(1);

  const handleBasicClick = (value) => {
    if (value === active) {
      return;
    }
    setActive(value);
  };


  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };



  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };



  return (
    <>

      <div className="d-flex align-items-center gap-3 test">
        <div>
          {scrollX !== 0 && (
            <div className='nav-icon'>
              <BiChevronLeft
                size={25}
                role='button'
                // className="text-light"
                onClick={() => slide(-50)}
              />
            </div>
          )}
        </div>


        <div className='h-scroll' ref={scrl} onScroll={scrollCheck}>

          <button className={`${active === 1 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(1)}>
            <BsPlay size={25} className='ico-color' />
            Get Started
          </button>
          <button className={`${active === 2 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(2)}>
            <BsFillFuelPumpDieselFill size={15} className='ico-color' />
            &nbsp;Fuels
          </button>
          <button className={`${active === 3 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(3)}>
            <MdEnergySavingsLeaf size={18} className='ico-color' />
            &nbsp;Bio Energy
          </button>
          <button className={`${active === 4 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(4)}>
            <IoCarSportSharp size={20} className='ico-color' />
            &nbsp;Owned Vehicles
          </button>
          <button className={`${active === 5 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(5)}>
            <BiSolidFridge size={18} className='ico-color' />
            &nbsp;Refrigerants
          </button>
          <button className={`${active === 6 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(6)}>
            <BsFillFuelPumpDieselFill size={15} className='ico-color' />
            &nbsp;WTT - Fuels
          </button>
          <button className={`${active === 7 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(7)}>
            <GiMaterialsScience size={18} className='ico-color' />
            &nbsp;Material Used
          </button>
          <button className={`${active === 8 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(8)}>
            <IoTrashBinSharp size={16} className='ico-color' />
            &nbsp;Waste Disposal
          </button>
          <button className={`${active === 9 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(9)}>
            <MdCommute size={20} className='ico-color' />
            &nbsp;Business Travel - Land & Sea
          </button>
          <button className={`${active === 10 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(10)}>
            <BiSolidTruck size={18} className='ico-color' />
            &nbsp;Freighting Goods
          </button>
          <button className={`${active === 11 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(11)}>
            <BiWalk size={18} className='ico-color' />
            &nbsp;Employees Commuting
          </button>
          <button className={`${active === 12 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(12)}>
            <MdFastfood size={16} className='ico-color' />
            &nbsp;Food
          </button>
          <button className={`${active === 13 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(13)}>
            <IoWater size={18} className='ico-color' />
            &nbsp;Water
          </button>
          <button className={`${active === 14 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(14)}>
            <BiSolidPlaneAlt size={20} className='ico-color' />
            &nbsp;Flight
          </button>
          <button className={`${active === 15 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(15)}>
            <BsBuildingsFill size={20} className='ico-color' />
            &nbsp;Hotels
          </button>
          <button className={`${active === 16 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(16)}>
            <MdHomeWork size={20} className='ico-color' />
            &nbsp;Home Office
          </button>
          <button className={`${active === 17 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(17)}>
            <AiFillThunderbolt size={20} className='ico-color' />
            &nbsp;Electricity
          </button>
          <button className={`${active === 18 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(18)}>
            <GiHeatHaze size={20} className='ico-color' />
            &nbsp;Heat & Steam
          </button>
          <button className={`${active === 19 ? 'btn-active' : 'btn btn-tab'}`} onClick={() => handleBasicClick(19)}>
            <TbAirConditioning size={20} className='ico-color' />
            &nbsp;District Cooling
          </button>
        </div>

        <div>
          {!scrolEnd && (
            <div className='nav-icon'>
              <BiChevronRight
                size={25}
                role='button'
                // className="text-light"
                onClick={() => slide(+50)}
              />
            </div>
          )}
        </div>
      </div>


      <div className="line" />


      <div className="">
        <div style={{ display: active === 1 ? 'block' : 'none' }}><GetStarted /></div>
        <div style={{ display: active === 2 ? 'block' : 'none' }}><Fuels /></div>
        <div style={{ display: active === 3 ? 'block' : 'none' }}><BioEnergy /></div>
        <div style={{ display: active === 4 ? 'block' : 'none' }}><OwnedVehicles /></div>
        <div style={{ display: active === 5 ? 'block' : 'none' }}><Refrigerants /></div>
        <div style={{ display: active === 6 ? 'block' : 'none' }}><WttFuels /></div>
        <div style={{ display: active === 7 ? 'block' : 'none' }}><MaterialUsed /></div>
        <div style={{ display: active === 8 ? 'block' : 'none' }}><WasteDisposal /></div>
        <div style={{ display: active === 9 ? 'block' : 'none' }}><BusinessTravel /></div>
        <div style={{ display: active === 10 ? 'block' : 'none' }}><FreightingGoods /></div>
        <div style={{ display: active === 11 ? 'block' : 'none' }}><EmployeesCommuting /></div>
        <div style={{ display: active === 12 ? 'block' : 'none' }}><Food /></div>
        <div style={{ display: active === 13 ? 'block' : 'none' }}><Water /></div>
        <div style={{ display: active === 14 ? 'block' : 'none' }}><Flight /></div>
        <div style={{ display: active === 15 ? 'block' : 'none' }}><Hotels /></div>
        <div style={{ display: active === 16 ? 'block' : 'none' }}><HomeOffice /></div>
        <div style={{ display: active === 17 ? 'block' : 'none' }}><Electricity /></div>
        <div style={{ display: active === 18 ? 'block' : 'none' }}><HeatSteam /></div>
        <div style={{ display: active === 19 ? 'block' : 'none' }}><DistrictCooling /></div>
      </div>

      <div className="mt-2">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-three mb-2">
              Upload your emission data &nbsp;
              {`${active === 2 ? '(Fuels)' :
                active === 3 ? '(Bio Energy)' :
                  active === 4 ? '(Owned Vehicles)' :
                    active === 5 ? '(Refrigerants)' :
                      active === 6 ? '(Wtt Fuels)' :
                        active === 7 ? '(Material Used)' :
                          active === 8 ? '(Waste Disposal)' :
                            active === 9 ? '(Business Travel)' :
                              active === 10 ? '(Freighting Goods)' :
                                active === 11 ? '(Employees Commuting)' :
                                  active === 12 ? '(Food)' :
                                    active === 13 ? '(Water)' :
                                      active === 14 ? '(Flight)' :
                                        active === 15 ? '(Hotels)' :
                                          active === 16 ? '(Home Office)' :
                                            active === 17 ? '(Electricity)' :
                                              active === 18 ? '(Heat & Steam)' :
                                                active === 19 ? '(District Cooling)' : ''
                }`}
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="">
                <ButtonIcon
                  name="Upload"
                  height={40}
                  size={20}
                  icon="HiOutlineUpload"
                  type={Hi}
                  fontsize={14}
                />
              </div>
              <div className="">
                <ButtonIcon
                  name="Download"
                  height={40}
                  size={20}
                  icon="HiOutlineDownload"
                  type={Hi}
                  fontsize={14}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-5 text-center" style={{ display: active === 1 ? 'none' : 'block' }}>
              <Link href="#">Calculate Emmission</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nav-adj d-flex align-items-center justify-content-end gap-3">
              <div className="text-center" style={{ display: active === 1 ? 'none' : 'block' }}>
                <IconButton
                  name="Back"
                  width={100}
                  height={40}
                  size={15}
                  icon="BsChevronLeft"
                  type={BootStrap}
                  fontsize={14}
                  onClick={() => handleBasicClick(active - 1)}
                />
              </div>
              <div className="text-center" style={{ display: active === 19 ? 'block' : 'none' }}>
                <Link className='tdn' href='/user/assessment/summary'>
                  <IconButton
                    name="Summary"
                    width={120}
                    height={40}
                    size={15}
                    icon="BsBarChartFill"
                    type={BootStrap}
                    fontsize={14}
                  />
                </Link>
              </div>
              <div className="text-center" style={{ display: active === 19 ? 'none' : 'block' }}>
                <ButtonIcon
                  name="Next"
                  width={100}
                  height={40}
                  size={15}
                  icon="BsChevronRight"
                  type={BootStrap}
                  fontsize={14}
                  onClick={() => handleBasicClick(active + 1)}
                />
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
