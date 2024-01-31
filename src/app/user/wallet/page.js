'use client'
import UserBar from '@/components/misc/UserBar'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../../../public/coin-in-hand.png'
import drcard from '../../../../public/debit-card.png'
import { TextButton } from '@/components/elements/Button'
import ProjectScroller from '@/components/misc/ProjectScroller'
import Transactions from '@/components/misc/Transactions'

export default function page() {

  const [balance, setBalance] = useState(480)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className='mt-1 text-title'>
          My Wallet
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      <div className="outer-container">

        <div className="text-two">
          Manage your balances
        </div>

        <div className="mt-4 row g-3">
          <div className="col-lg-6">
            <div className="balance-container">
              <div className="d-flex justify-content-between">
                <div className="p-2">
                  <div className="bal">
                    Balance
                  </div>
                  <div className="bal-fig">
                    {balance} TBLU
                  </div>
                </div>
                <div className="">
                  <Image src={img} width={150} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="balance-container">
              <div className="d-flex justify-content-between">
                <div className="my-auto">
                  <div className="bal">
                    Get Some TBLU Token
                  </div>
                  <div className="">
                    <TextButton
                      name="Buy TBLU"
                      height={37}
                    />
                  </div>
                </div>
                <div className="">
                  <Image src={drcard} width={132} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-two">
          Project Portfolio
        </div>

        <div className="my-2 row g-3">

          <div className="col-lg-6 right-border">
            <div className="ms-4 bal">
              Purchased
            </div>
            <div className="px-1">
              <ProjectScroller show="Purchased" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ms-4 bal">
              Retired
            </div>
            <div className="px-1">
              <ProjectScroller show="Retired" />
            </div>
          </div>
        </div>
      </div>

      <Transactions />
    </>
  )
}
