'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/FullLogo/PNG/Terrablu_Logo-01.png'
import { BrandButton, TextButton } from '../elements/Button'
import Link from 'next/link'
import * as BootStrap from 'react-icons/bs'
import { BiSolidInfoCircle } from 'react-icons/bi'
import * as Bi from 'react-icons/bi'
import * as Cg from 'react-icons/cg'
import { InputFeild, PasswordFeild } from '../elements/InputFeild'
import metamask from '../../../public/brand-icons/metamask-icon.png'
import coinbase from '../../../public/brand-icons/coinbase-logo.png'
import { IconButton, Tooltip } from '@mui/material'
import Modal from 'react-bootstrap/Modal'

export default function Register() {

  const [otpModal, setOtpModal] = useState(false)

  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-lg-4 d-none d-lg-block">
            <div className="center-core">
              <Image src={logo} width={300} />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="right-box">
              <div className="p-4">
                <div className="center-core">
                  <div className="col-12 col-md-12 col-lg-10">
                    <div className="text-center d-lg-none">
                      <Image src={logo} width={150} />
                    </div>
                    <div className="welcome">
                      Register on TerraBlu
                    </div>
                    <div className="text-one">
                      Comprehensive carbon analytics platform.
                    </div>

                    <div className="row justify-content-evenly">
                      <div className="col-lg-6 col-md-6">
                        <div className="mt-5 text-start">
                          <InputFeild
                            label="Email" placeholder="example@company.com"
                            type={BootStrap} icon="BsEnvelope" size={25}
                            required={true}
                          />
                          <InputFeild
                            label="Mobile" placeholder="xxxxx-x1234"
                            type={BootStrap} icon="BsPhone" size={25}
                            required={true}
                          />
                        </div>
                      </div>



                      <div className="col-lg-6 col-md-6">
                        <div className="mt-5 text-start">
                          <PasswordFeild
                            label="Password"
                            placeholder="Enter Password"
                            type={Cg} icon="CgPassword" size={25}
                            required={true}
                          />
                          <PasswordFeild
                            label="Confirm Password"
                            placeholder="Enter Password"
                            type={Cg} icon="CgPassword" size={25}
                            required={true}
                          />
                          {/* <div className="text-end">
                            <Link className='forget-link' href="#">
                              Forget Password?
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="line"></div>

                      <div className="col-lg-5 col-md-5">
                        <div className="mt-3 text-start">
                          <label className='form-label'>
                            Connect your Web3 Wallet
                            <Tooltip title="Connect EVM based wallet only"
                              placement="right"
                              className='tooltip-one'
                            >
                              <IconButton>
                                <BiSolidInfoCircle className='info-ico' size={15} />
                              </IconButton>
                            </Tooltip>
                          </label>
                        </div>
                        <div className="mt-1 d-flex align-items-center gap-3">
                          <BrandButton name="Metamask" height={40} image={metamask} size={20} />
                          <BrandButton name="Coinbase" height={40} image={coinbase} size={20} />
                        </div>
                      </div>

                      <div className="col-lg-1 col-md-1">
                        <div className="mt-5 text-one">
                          or
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-5">
                        <div className="text-start">
                          <InputFeild
                            label="Wallet Address" placeholder="0x74XXX...."
                            type={Bi} icon="BiWalletAlt" size={25}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mt-3 form-check text-start">
                      <input class="mt-2 form-check-input" type="checkbox" value="" />
                      <label class="form-check-label text-light">
                        Create a Web3 wallet for me
                        <Tooltip title="Your email will be used for creating Web3 wallet"
                          placement="right"
                        >
                          <IconButton>
                            <BiSolidInfoCircle className='info-ico' size={15} />
                          </IconButton>
                        </Tooltip>

                      </label>
                    </div>

                    <div class="mt-5 form-check" >
                      <input class="form-check-input" type="checkbox" value="" style={{ float: 'none' }} />
                      <label class="ms-2 form-check-label text-light">
                        I have read and I accept the
                        <Link href="#" className='tc-link ms-2'>
                          Terms & Condition
                        </Link>
                      </label>
                    </div>

                    <div className="mt-3">
                      <TextButton name="Register" height={40} width={320}
                        onClick={() => setOtpModal(true)}
                      />
                    </div>


                    <div className="mt-5 text-center">
                      <span className='text-one'>Already have an account? </span>
                      <Link className='forget-link ps-1' href="/">
                        Login here
                      </Link>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Modal
        show={otpModal}
        onHide={() => setOtpModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className='modalBody'>
          <div className="h-7">
            Verify OTP
          </div>
          <div className="text-one">
            Enter  OTP received on your email
          </div>
          <div className="mt-4 mx-5 text-start">
            <InputFeild
              label="OTP" placeholder="XXXX"
              type={BootStrap} icon="Bs123" size={25}
            />
          </div>

          <div className="mt-4 mx-5">
            <TextButton name="Verify OTP" height={40} />
          </div>

          <div className="">
            <button className='btn btn-link'>Resend OTP</button>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}
