import React from 'react'
import icon from '../../../public/Icon/PNG/TerraBlu_Icon-01.png'
import name from '../../../public/LogoName/PNG/TerraBlu_Logotype-01.png'
import Image from 'next/image'
import { HiGlobeAsiaAustralia } from 'react-icons/hi2'
import { HiMail } from 'react-icons/hi'

export default function ReportFooter() {
  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="text-green">
            Powered By
          </div>
          <div className="d-flex">
            <Image src={icon} width={45} />
            <Image src={name} width={120} style={{ marginLeft: '-15px' }} />
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-evenly">

          <div className="">
            <HiMail size={20} className='text-purple mx-1' />
            <span className='text-green'>info@terrablu.life</span>
          </div>
          <div className="">
            <HiGlobeAsiaAustralia size={20} className='text-purple mx-1' />
            <span className='text-green'>terrablu.life</span>
          </div>

        </div>
      </div>
    </>
  )
}
