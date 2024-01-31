'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/FullLogo/PNG/Terrablu_Logo-01.png'
import { BrandButton, TextButton } from '../elements/Button'
import Link from 'next/link'
import * as BootStrap from 'react-icons/bs'
import * as Cg from 'react-icons/cg'
import { InputFeild, PasswordFeild } from '../elements/InputFeild'
import google from '../../../public/brand-icons/google.png'
import linkedin from '../../../public/brand-icons/linkedin.png'
import Modal from 'react-bootstrap/Modal'
import { IoCloseCircle } from 'react-icons/io5'

export default function Login() {

  const [forgetModal, setForgetModal] = useState(false)

  return (
    <>
      <div className="vh-100">
        <div className="row">

          <div className="col-lg-6 d-none d-lg-block">
            <div className="center-core">
              <Image src={logo} width={300} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="right-box">
              <div className="px-3">
                <div className="center-core">
                  <div className="col-12 col-md-8 col-lg-7">
                    <div className="text-center d-lg-none">
                      <Image src={logo} width={150} />
                    </div>
                    <div className="welcome">
                      Welcome!
                    </div>
                    <div className="text-one">
                      Comprehensive carbon analytics platform.
                    </div>

                    <div className="mt-5 text-start">
                      <InputFeild
                        label="Email" placeholder="example@company.com"
                        type={BootStrap} icon="BsEnvelope" size={25} />
                      <PasswordFeild
                        label="Password"
                        placeholder="Enter Password"
                        type={Cg} icon="CgPassword" size={25}
                      />
                      <div className="text-end">
                        <Link className='forget-link' href="#" onClick={() => setForgetModal(true)}>
                          Forget Password?
                        </Link>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link className="tdn item-center" href="/user">
                        <TextButton name="Login" height={40} />
                      </Link>
                    </div>

                    <div className="mt-4">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-5 line" />
                        <div className="col-1 text-one">or</div>
                        <div className="col-5 line" />
                      </div>
                    </div>


                    <div className="mt-4 row justify-content-center align-items-center">
                      <div className="col-5">
                        <BrandButton name="Google" height={40} image={google} size={20} />
                      </div>
                      <div className="col-5">
                        <BrandButton name="Linkedin" height={40} image={linkedin} size={20} />
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <span className='text-one'>Don’t have an account?</span>
                      <Link className='forget-link ps-1' href="register">
                        Create an account
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
        show={forgetModal}
        onHide={() => setForgetModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className='modalBody'>
          <div className="text-end text-secondary">
            <IoCloseCircle size={25} />
          </div>
          <div className="h-7">
            Forgot Password
          </div>
          <div className="text-one">
            Enter your registered email address
          </div>
          <div className="mt-4 mx-5 text-start">
            <InputFeild
              label="Email" placeholder="example@mail.com"
              type={BootStrap} icon="BsEnvelope" size={25}
            />
          </div>

          <div className="my-4 mx-5">
            <TextButton name="Send Email" height={40} />
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}
