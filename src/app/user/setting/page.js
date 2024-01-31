'use client'
import React, { useState } from 'react'
import UserBar from '@/components/misc/UserBar'
import Image from 'next/image'
import img1 from '../../../../public/user.png'
import { EditableFeild, InputFeild, PasswordFeild } from '@/components/elements/InputFeild'
import * as BootStrap from 'react-icons/bs'
import * as Cg from 'react-icons/cg'
import * as Bi from 'react-icons/bi'
import { BrandButton, TextButton } from '@/components/elements/Button'
import metamask from '../../../../public/brand-icons/metamask-icon.png'
import coinbase from '../../../../public/brand-icons/coinbase-logo.png'

export default function page() {

  const [name, setName] = useState('Display Name')
  const [password, setPassword] = useState('Password')
  const [mobile, setMobile] = useState('+91 987654321')
  const [department, setDepartment] = useState('Finance')

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className='mt-1 text-title'>
          Profile Setting
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      {/* Profile Section */}
      <div className="outer-container">
        <div className="sub-title4">Manage your profile</div>
        <div className="line"></div>

        <div className="row justify-content-center">


          <div className="d-flex align-items-center justify-content-center">
            <div className="mx-2">
              <Image src={img1} width={100} />
            </div>
            <div className="sub-title4 mx-2">0x74k*****6b9e</div>
          </div>

          <div className="col-lg-6">
            <div className="px-5">
              <EditableFeild
                label="Display Name" value={name}
                type={BootStrap} icon="BsPersonCircle" size={25}
                onChange={e => setName(e.target.value)}
              />
              <InputFeild
                label="Email" placeholder="name@example.com"
                type={BootStrap} icon="BsEnvelope" size={25}
                disabled
              />
              <EditableFeild
                label="Change Password" value={password} password={true}
                type={Cg} icon="CgPassword" size={25}
                onChange={e => setPassword(e.target.value)}
              />
              <EditableFeild
                label="Mobile Number" value={mobile}
                type={BootStrap} icon="BsPhone" size={25}
                onChange={e => setMobile(e.target.value)}
              />
            </div>

          </div>
          <div className="col-lg-6">
            <div className="px-5">
              <InputFeild
                label="Organization" placeholder="name@example.com"
                type={BootStrap} icon="BsBuildings" size={25}
                disabled
              />
              <EditableFeild
                label="Department" value={department}
                type={BootStrap} icon="BsFillPersonVcardFill" size={25}
                onChange={e => setDepartment(e.target.value)}
              />
              <div className="mb-1 text-light">
                <label>Add additional wallet</label>
              </div>
              <div className="d-flex align-items-center gap-3">
                <BrandButton name="Metamask" height={40} image={metamask} size={20} />
                <BrandButton name="Coinbase" height={40} image={coinbase} size={20} />
              </div>
              <div className="text-light text-center">or</div>
              <div className="" style={{ marginTop: '-10px' }}>
                <InputFeild
                  label="Wallet Address" placeholder="0x74XXX...."
                  type={Bi} icon="BiWalletAlt" size={25}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}
