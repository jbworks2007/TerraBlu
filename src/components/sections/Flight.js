'use client'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineSelect } from 'react-icons/ai'
import { FaAngleDown } from 'react-icons/fa'
import { MdRefresh } from 'react-icons/md'
import { CgCloseO } from 'react-icons/cg'
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { TiArrowRepeatOutline } from 'react-icons/ti'
import { ButtonIcon } from '../elements/Button'
import * as BootStrap from 'react-icons/bs'

export default function Flight() {

  const initialValues = {
    fromcity: 'Bhopal',
    tocity: 'Pune',
    class: 'Select',
    trips: 1
  }

  const [inputRow, setInputRow] = useState([
    initialValues
  ])

  const resetFeild = (index) => {
    // alert("Feild Reset")
    let inputRowData = inputRow
    inputRowData.splice(index, 1, initialValues)
    setInputRow([...inputRowData])
  }

  const addInputRow = () => {
    // alert("yes")
    setInputRow([...inputRow, initialValues])
  }

  const deleteRow = (index) => {
    console.log("remove index :", index)
    if (inputRow.length > 1) {
      const updatedRow = [...inputRow];
      updatedRow.splice(index, 1);
      console.log("Remaining Row :", updatedRow);
      setInputRow(updatedRow);
      // alert("row Deleted")
    }
  }

  const setData = (value, index, type) => {
    let inputRowData = inputRow
    inputRowData[index] = {
      ...inputRowData[index],
      [type]: value
    }
    console.log('inputRowData', inputRowData)
    setInputRow([...inputRowData])
  }

  return (
    <>
      <div className="head-active">
        <BiSolidPlaneAlt size={20} className='ico-color' />
        &nbsp;Flight
      </div>
      <div className='sub-title'>
        Travel by Air
      </div>

      <div className="mt-3 v-scroll px-4">
        <div className="row">
          {
            inputRow.map((key, index) =>
              <div className="booking-box my-4">
                <div className="row">
                  <div className="">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" for="inlineRadio1">One Way</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" for="inlineRadio2">Round Trip</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                      <label className="form-check-label" for="inlineRadio3">Multi City</label>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row from-to">
                          <div className="col-lg-6 from-box">
                            <div className="fromto-text">From</div>
                            <input className="city-text" type='text' value={key.fromcity} onChange={e => setData(e.target.value, index, 'fromcity')} />
                          </div>
                          <TiArrowRepeatOutline className='fromto-icon' size={20} />
                          <div className="col-lg-6 to-box">
                            <div className="fromto-text">To</div>
                            <input className="city-text" type='text' value={key.tocity} onChange={e => setData(e.target.value, index, 'tocity')} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row align-items-center justify-content-evenly gap-1">
                          <div className="col-lg-4 trip-box">
                            <div className="fromto-text">Class</div>
                            {/* <div className="city-text">Dropdown</div> */}
                            <Dropdown>
                              <Dropdown.Toggle className="dropdown-two d-flex justify-content-between align-items-center">
                                <div>{key.class}</div>
                                <div><FaAngleDown className='text-end' /></div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className='dd-menu-one'>
                                <Dropdown.Item className='dd-one-items' onClick={() => { setData("First", index, 'class'); }}>First</Dropdown.Item>
                                <Dropdown.Item className='dd-one-items' onClick={() => { setData("Business", index, 'class'); }}>Business</Dropdown.Item>
                                <Dropdown.Item className='dd-one-items' onClick={() => { setData("Economy", index, 'class'); }}>Economy</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="col-lg-4 trip-box">
                            <div className="fromto-text">No. of Trips</div>
                            <input className="city-text" type='text' value={key.trips} onChange={e => setData(e.target.value, index, 'trips')} />
                          </div>
                          <div className="col-lg-2">
                            <div className="d-flex gap-2 my-2">
                              <div><MdRefresh size={28} className='reset'
                                role='button'
                                onClick={() => resetFeild(index)}
                              />
                              </div>
                              <div><CgCloseO size={25} className='delete'
                                role='button'
                                onClick={() => deleteRow(index)}
                              />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="mt-3 text-center">
          <ButtonIcon
            name="Add"
            width={100}
            height={40}
            type={BootStrap}
            icon="BsPlus"
            size={20}
            onClick={addInputRow}
          />
        </div>
      </div>

      {/* <div className="row">
        <div className="booking-box my-4">
          <div className="row">
            <div className="">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">One Way</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Round Trip</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" for="inlineRadio3">Multi City</label>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row from-to">
                    <div className="col-lg-6 from-box">
                      <div className="fromto-text">From</div>
                      <input className="city-text" type='text' value={key.fromcity} onChange={e => setFromCity(e.target.value)} />
                    </div>
                    <TiArrowRepeatOutline className='fromto-icon' size={20} />
                    <div className="col-lg-6 to-box">
                      <div className="fromto-text">To</div>
                      <input className="city-text" type='text' value={tocity} onChange={e => setToCity(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row align-items-center justify-content-evenly gap-1">
                    <div className="col-lg-4 trip-box">
                      <div className="fromto-text">Class</div>
                      <div className="city-text">Dropdown</div>
                    </div>
                    <div className="col-lg-4 trip-box">
                      <div className="fromto-text">No. of Trips</div>
                      <input className="city-text" type='text' value={trips} onChange={e => setTrips(e.target.value)} />
                    </div>
                    <div className="col-lg-2">
                      <div className="d-flex gap-2 my-2">
                        <div><MdRefresh size={28} className='reset'
                          role='button'
                          onClick={() => resetFeild(index)}
                        />
                        </div>
                        <div><CgCloseO size={25} className='delete'
                          role='button'
                          onClick={() => deleteRow(index)}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}