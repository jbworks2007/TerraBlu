'use client'
import React from 'react'
import { RoundIcon } from '../elements/Button'
import { BiSearch, BiBell, BiCartAlt } from "react-icons/bi"
import { UserName, UserPic } from '../elements/UserDetails'
import { usePathname } from 'next/navigation'

export default function UserBar() {
  const pathname = usePathname()
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex gap-2 align-items-center">
          {
            pathname === '/user/offset' ?
              <RoundIcon icon={BiCartAlt} size={18} badgeValue={1} />
              :
              <RoundIcon icon={BiSearch} size={18} />
          }
          <RoundIcon icon={BiBell} size={18} badgeValue={2} />
          <UserPic />
          <UserName />
        </div>
      </div>

      <div className="d-sm-block d-md-none">
        <div className="d-flex gap-2 align-items-center">
          {
            pathname === '/user/offset' ?
              <RoundIcon icon={BiCartAlt} size={18} badgeValue={1} />
              :
              <RoundIcon icon={BiSearch} size={18} />
          }
          <RoundIcon icon={BiBell} size={18} badgeValue={15} />
          <UserPic />
        </div>
      </div>

    </>
  )
}
