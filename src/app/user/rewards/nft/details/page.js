'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UserBar from '@/components/misc/UserBar'
import { RoundIcon } from '@/components/elements/Button'
import { BiChevronLeft } from 'react-icons/bi'
import { IoCopyOutline } from 'react-icons/io5'
import nft from '../../../../../../public/nftdetail.png'
import nft2 from '../../../../../../public/godsearth.png'
import logo from '../../../../../../public/polygon.png'
import Modal from 'react-bootstrap/Modal'
import { IoCloseCircle } from 'react-icons/io5'
import { useSearchParams } from 'next/navigation'

export default function page() {

  const info = useSearchParams()

  const [burn, setBurn] = useState(false)
  const [redeem, setRedeem] = useState(false)

  let expired = info.get('expiry') === "true" ? true : false;

  const contractAddress = info.get('address');
  const start = contractAddress.slice(0, 4);
  const end = contractAddress.slice(-4);
  const address = start.concat("....", end);

  const date = info.get('date');
  const createdOn = date.slice(0, 10);

  const epoch = info.get('validity');
  // const epoch = parseInt(val)
  console.log("epoch :", epoch);

  const d = new Date(epoch * 1000);
  let text = d.toISOString();
  console.log("validity :", text);
  const validity = date.slice(0, 10);

  // const getValidity =()=> {
  //   if(epoch != 0) {
  //     return text;
  //   }
  // }


  return (
    <>
      <div className="d-flex justify-content-between align-items-center" >
        <div className="d-flex justify-content-between align-items-center" >
          <div className="">
            <Link className='tdn' href="/user/rewards/nft">
              <RoundIcon icon={BiChevronLeft} size={30} />
            </Link>
          </div>
          <div className='mt-1 mx-2 text-title'>
            My Rewards/NFTs/details
          </div>
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      <div className="outer-container">
        <div className="sub-title2" style={{ color: expired ? 'red' : '' }}>
          {`${info.get('name')} : ${info.get('partner')}`}
        </div>
        <div className="line"></div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4">
            <div className="p-3">
              <div className="nft-card">
                <Image className="nft-img" src={info.get('image')} fill />
                <div className="nft-chain">
                  <Image src={logo} width={40} />
                </div>
                <div className="nft-quantity">
                  {`x${info.get('quantity')}`}
                </div>
              </div>
              <div className="mt-4 d-flex align-items-center justify-content-between">
                <div className="">
                  <button className='btn btn-burn' onClick={() => setBurn(true)}>Burn</button>
                </div>
                <div className="">
                  <button className='btn btn-generic'>{expired ? 'Transfer' : 'Redeem'}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="p-3">
              <div className="outer-container" style={{ marginTop: '0px' }}>
                <div className="sub-title2">
                  Description
                </div>
                <div className="line"></div>
                <p className='p-one'>
                  {info.get('description')}
                </p>
                <div className="line"></div>
                <div className="sub-title2">
                  Traits
                </div>
                <div className="line"></div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="px-2">
                      <div className="trait-box">
                        <div className="trait-type">
                          VALIDITY
                        </div>
                        <div className="trait-value" style={{ color: expired ? 'red' : '' }}>
                          {expired ? 'EXPIRED' : epoch == 0 ? 'LIFETIME' : `till ${validity}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="sub-title2">
                  Details
                </div>
                <div className="line"></div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="detail-type">
                    Contract Address
                  </div>
                  <div className="detail-value text-end">
                    <span className='mx-2 text-green' role='button'><IoCopyOutline size={20} /></span>
                    {address}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="detail-type">
                    Token ID
                  </div>
                  <div className="detail-value text-end">
                    {info.get('tokenId')}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="detail-type">
                    Token Standard
                  </div>
                  <div className="detail-value text-end">
                    {info.get('standard')}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="detail-type">
                    Chain
                  </div>
                  <div className="detail-value text-end">
                    {info.get('chain')}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="detail-type">
                    Created On
                  </div>
                  <div className="detail-value text-end">
                    {createdOn}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Modal
        show={burn}
        onHide={() => setBurn(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className='modalBody'>
          <div className="text-end text-secondary">
            <IoCloseCircle size={25} role='button' onClick={() => setBurn(false)} />
          </div>
          <div className="h-7">
            Burn Tokens
          </div>
          <div className="text-one">
            Warning you are Burning Active Tokens
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}
