'use client'
import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCalendar, AiOutlineSave } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function InputFeild({ label, type, size, icon, placeholder, required, ...inputProps }) {
  return (
    <div className="my-3">
      <label className="form-label">{label}<span className='text-danger'>{`${required ? '*' : ''}`}</span></label>
      <div className="icon-input">
        <span className="inner-ico">
          <div style={{ fontSize: `${size}px`, marginRight: "5px" }} >
            {React.createElement(type[`${icon}`])}
          </div>
        </span>
        <input type="text" className="input-feild" placeholder={placeholder} {...inputProps} />
      </div>
    </div>
  )
}

export function PasswordFeild({ label, type, size, icon, placeholder, required, ...inputProps }) {

  const [show, setShow] = useState(true)

  return (
    <div className="my-3">
      <label className="form-label">{label}<span className='text-danger'>{`${required ? '*' : ''}`}</span></label>
      <div className="icon-input">
        <span className="inner-ico">
          <div style={{ fontSize: `${size}px`, marginRight: "5px" }} >
            {React.createElement(type[`${icon}`])}
          </div>
        </span>
        <input className="input-feild"
          type={show ? "password" : "text"}
          id="keyPassword"
          placeholder={placeholder}
          {...inputProps}
        />
        <span className='input-end-icon' style={{ display: show ? 'block' : 'none' }} onClick={() => setShow(false)}>
          <AiOutlineEyeInvisible size={20} />
        </span>
        <span className='input-end-icon' style={{ display: show ? 'none' : 'block' }} onClick={() => setShow(true)}>
          <AiOutlineEye size={20} />
        </span>
      </div>
    </div>
  )
}

export function CounterFeild() {

  let [count, setCount] = useState(1000000)

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="counter-icon" onClick={() => setCount(prev => prev == 0 ? prev : prev - 1 < 1 ? 1 : prev - 1)}>
          <FaMinus size={12} />
        </div>
        <div className='mx-2'>
          <input value={count} className="counter-input" onChange={e => setCount(parseInt(e.target.value, 10))} />
        </div>
        <div className="counter-icon" onClick={() => setCount(prev => prev + 1)}>
          <FaPlus size={12} />
        </div>
      </div>

    </div>
  )
}

export function UnitSelector() {

  const [select, setSelect] = useState("Tonne (t)")

  return (
    <Dropdown>
      <Dropdown.Toggle className="btn-unit d-flex align-items-center">
        <div>{select}</div>
        <div><FaAngleDown className='text-end' /></div>
      </Dropdown.Toggle>
      <Dropdown.Menu className='dd-unit-menu'>
        <Dropdown.Item className='dd-unit-items' onClick={() => setSelect("Tonne (t)")}>Tonne (t)</Dropdown.Item>
        <Dropdown.Item className='dd-unit-items' onClick={() => setSelect("Kilogram (kg)")}>Kilogram (kg)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export function InputDate({ placeholder, date, setDate }) {
  // const [date, setDate] = useState(new Date());
  return (
    <div className="my-3 date-input">
      <DatePicker
        className="date-input-feild"
        calendarClassName="calender"
        dateFormat="yyyy-MM-dd"
        placeholderText={placeholder}
        selected={date}
        onChange={(date) => setDate(date)}
      />
      <span className='date-input-end-icon'>
        <AiOutlineCalendar size={20} />
      </span>
    </div>
  )
}

export function EditableFeild({ label, type, size, icon, value, password, ...inputProps }) {

  const [disable, setDisable] = useState(true)

  return (
    <div className="my-3">
      <label className="form-label">{label}</label>
      <div className="icon-input">
        <span className="inner-ico">
          <div style={{ fontSize: `${size}px`, marginRight: "5px" }} >
            {React.createElement(type[`${icon}`])}
          </div>
        </span>
        <input className="input-feild"
          type={password && disable ? "password" : "text"}
          disabled={disable}
          value={value}
          {...inputProps}
        />
        <span className='input-end-icon' role='button' style={{ display: disable ? 'block' : 'none' }} onClick={() => setDisable(false)}>
          <MdEdit size={20} className='text-green' />
        </span>
        <span className='input-end-icon' role='button' style={{ display: disable ? 'none' : 'block' }} onClick={() => setDisable(true)}>
          <AiOutlineSave size={20} className='text-green' />
        </span>
      </div>
    </div>
  )
}