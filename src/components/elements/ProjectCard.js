'use client'
import React, { useState } from 'react'
import banner from '../../../public/banner.jpg'
import Image from 'next/image'
import { BiMap } from 'react-icons/bi'
import * as BoxIcons from 'react-icons/bi'
import { IconButton } from './Button'
import { CounterFeild, UnitSelector } from './InputFeild'

export default function ProjectCard() {

  const [addCC, setAddCC] = useState(false)

  return (
    <>
      <div className="card-frame">
        <div >
          <Image src={banner} alt='project-image' className="image-frame" />
        </div>
        <div className="row p-3 g-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="project-name">
              JSW Energy
            </div>
            <div className="">
              <BiMap size={20} className='marker' />
              <span className='location'>
                Serbia
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="">
              <div className="feild-name">
                PRICE PER TON
              </div>
              <div className="feild-value">
                $ 4.3
              </div>
            </div>
            <div className="text-end">
              <div className="feild-name">
                CREDITS AVAILABLE
              </div>
              <div className="feild-value">
                147854
              </div>
            </div>
          </div>

          {
            addCC ?
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <CounterFeild />
                </div>
                <div className="text-end">
                  <div className="feild-name">
                    Select Quantity
                  </div>
                  <div className="">
                    <UnitSelector />
                  </div>
                </div>
              </div>
              :
              <div onClick={() => setAddCC(!addCC)}>
                <IconButton
                  name="Add to Cart"
                  height={40}
                  size={20}
                  type={BoxIcons}
                  icon="BiCartAlt"
                />
              </div>
          }



        </div>

      </div>


    </>
  )
}
