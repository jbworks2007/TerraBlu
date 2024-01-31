import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../../../public/banner.jpg'

export default function MiniProjectCard() {
  return (
    <>
      <div className="box-project">
        <div className="box-image">
          <Image src={img} width={190} height={100} />
        </div>
        <div className="box-detail">
          <div className="d-flex align-items-center justify-content-between px-2 mt-1">
            <div className="left-one">
              <div className="bd-head">JSW Energy</div>
              <div className="bd-low">Credits Boughts 3</div>
            </div>
            <div className="right-one">
              <div className="bd-type">Renewable</div>
              <div className="offset-adjust">
                <Link className='offset-link' href="#">Offset</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
