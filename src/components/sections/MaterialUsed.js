'use client'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineSelect } from 'react-icons/ai'
import { FaAngleDown } from 'react-icons/fa'
import { MdRefresh } from 'react-icons/md'
import { CgCloseO } from 'react-icons/cg'
import { GiMaterialsScience } from 'react-icons/gi'
import { Bs123 } from 'react-icons/bs'
import { ButtonIcon } from '../elements/Button'
import * as BootStrap from 'react-icons/bs'

export default function MaterialUsed() {

  const initialValues = {
    activity: 'Select Activity',
    waste: 'Select Waste type',
    unit: 'Select Unit',
    value: 0
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
        <GiMaterialsScience size={18} className='ico-color' />
        &nbsp;Material Used
      </div>
      <div className='sub-title'>
        Combustion of fuels produced from recently living sources
      </div>

      <div className="mt-3 v-scroll pe-3">
        <div className="row">
          {
            inputRow.map((key, index) =>
              <>
                <div className="col-lg-11">
                  <div className="row mt-1">
                    {/* Mapping start here */}
                    <div className="col-lg-3">
                      <div className="">
                        <div className="input-with">
                          <div className="form-label">Activity</div>
                          <Dropdown>
                            <Dropdown.Toggle className="dropdown-one d-flex justify-content-between align-items-center">
                              <div><AiOutlineSelect size={18} className='ico-color' /></div>
                              <div>{key.activity}</div>
                              <div><FaAngleDown className='text-end' /></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dd-menu-one'>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-1", index, 'activity'); }}>Item-1</Dropdown.Item>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-2", index, 'activity'); }}>Item-2</Dropdown.Item>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-3", index, 'activity'); }}>Item-3</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="">
                        <div className="input-with">
                          <div className="form-label">Waste Type</div>
                          <Dropdown>
                            <Dropdown.Toggle className="dropdown-one d-flex justify-content-between align-items-center">
                              <div><AiOutlineSelect size={18} className='ico-color' /></div>
                              <div>{key.waste}</div>
                              <div><FaAngleDown className='text-end' /></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dd-menu-one'>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-1", index, 'waste'); }}>Item-1</Dropdown.Item>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-2", index, 'waste'); }}>Item-2</Dropdown.Item>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-3", index, 'waste'); }}>Item-3</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="">
                        <div className="input-with">
                          <div className="form-label">Unit</div>
                          <Dropdown>
                            <Dropdown.Toggle className="dropdown-one d-flex justify-content-between align-items-center">
                              <div><AiOutlineSelect size={18} className='ico-color' /></div>
                              <div>{key.unit}</div>
                              <div><FaAngleDown className='text-end' /></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dd-menu-one'>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-1", index, 'unit'); }}>Item-1</Dropdown.Item>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-2", index, 'unit'); }}>Item-2</Dropdown.Item>
                              <Dropdown.Item className='dd-one-items' onClick={() => { setData("Item-3", index, 'unit'); }}>Item-3</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="">
                        <label className="label-one">Value</label>
                        <div className="input-one">
                          <span className="icon-one">
                            <Bs123 size={20} />
                          </span>
                          <input type="text" className="input-feild-one" value={key.value} onChange={e => setData(e.target.value, index, 'value')} />
                        </div>
                      </div>
                    </div>
                    {/* Mapping Ends Here */}
                  </div>
                </div>
                <div className="col-lg-1 my-3">
                  <div className="d-flex gap-2 mt-4">
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
              </>
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
    </>
  )
}