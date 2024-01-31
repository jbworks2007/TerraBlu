'use client'
import UserSidebar from '@/components/sidebar/UserSidebar'
import React, { useState, useEffect } from 'react'
import icon from '../../../public/Icon/PNG/TerraBlu_Icon-01.png'
import name from '../../../public/LogoName/PNG/TerraBlu_Logotype-01.png'
import Image from 'next/image'
import { TbAlignBoxLeftMiddle, TbAlignBoxRightMiddle } from 'react-icons/tb'

export default function DashboardLayout({ children }) {

  const [show, setShow] = useState(true)

  const handleResize = () => {
    if (window.innerWidth < 830) {
      setShow(false)
    } else {
      setShow(true)
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  })

  return (
    <>
      <div className="d-lg-block" >
        <UserSidebar visible={show} />
      </div>
      <div className="top-bar d-lg-none">
        <div className="d-flex justify-content-between mx-4 ">
          <div className='top-bar' aria-controls="offcanvasExample">
            <div className="d-flex align-items-center">
              <Image src={icon} width={50} />
              <Image src={name} width={120} style={{ marginLeft: "-15px" }} />
            </div>
          </div>
          <div className="btn-menu" onClick={() => setShow(!show)} role="button">
            {
              !show ? <TbAlignBoxLeftMiddle size={40} /> : <TbAlignBoxRightMiddle size={40} />
            }
          </div>
        </div>
      </div>

      <section className='sub-section'>{children}</section>
    </>
  )
}
