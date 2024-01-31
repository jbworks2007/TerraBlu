'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/FullLogo/PNG/Terrablu_Logo-01.png'
import { MdOutlineAssessment } from 'react-icons/md'
import { TbWorldDown } from 'react-icons/tb'
import { RxDashboard } from 'react-icons/rx'
import { BiFile, BiWalletAlt, BiLogOutCircle, BiGift } from 'react-icons/bi'
import { LuSettings } from 'react-icons/lu'
import { usePathname } from 'next/navigation'

export default function UserSidebar(p) {
  const pathname = usePathname()
  const [active, setActive] = useState(0)

  return (
    <>
      <div className={`sidebar ${p.visible ? 'visible' : ''} `}>

        <Link className='tdn typo-logo' href="/">
          <div className="sidebar-logo">
            <Image src={logo} width={200} />
          </div>
        </Link>

        <Link className='tdn' href="/user" >
          <div className={`${pathname === "/user" ? 'side-tab-active' : 'side-tab'}`}>
            <RxDashboard size={20} className='side-icon' />
            Dashboard
          </div>
        </Link>

        <Link className='tdn' href="/user/assessment" >
          <div className={`${pathname === "/user/assessment" ? 'side-tab-active' : 'side-tab'}`}>
            <MdOutlineAssessment size={20} className='side-icon' />
            Assessment
          </div>
        </Link>

        <Link className='tdn' href="/user/offset" >
          <div className={`${pathname === "/user/offset" ? 'side-tab-active' : 'side-tab'}`}>
            <TbWorldDown size={20} className='side-icon' />
            Offset
          </div>
        </Link>

        <Link className='tdn' href="/user/reports" >
          <div className={`${pathname === "/user/reports" ? 'side-tab-active' : 'side-tab'}`}>
            <BiFile size={20} className='side-icon' />
            Reports
          </div>
        </Link>

        <div className="my-2 text-profile">
          PROFILE
        </div>

        <Link className='tdn' href="/user/wallet" >
          <div className={`${pathname === "/user/wallet" ? 'side-tab-active' : 'side-tab'}`}>
            <BiWalletAlt size={20} className='side-icon' />
            My Wallet
          </div>
        </Link>

        <Link className='tdn' href="/user/rewards" >
          <div className={`${pathname === "/user/rewards" ? 'side-tab-active' : 'side-tab'}`}>
            <BiGift size={20} className='side-icon' />
            My Rewards
          </div>
        </Link>

        <Link className='tdn' href="/user/setting" >
          <div className={`${pathname === "/user/setting" ? 'side-tab-active' : 'side-tab'}`}>
            <LuSettings size={20} className='side-icon' />
            Setting
          </div>
        </Link>

        <div className="logout-box">
          <div className='btn-logout' role='button'>
            <BiLogOutCircle size={20} className='logout-icon' />
            Logout
          </div>
        </div>

      </div>
    </>
  )
}
