'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import img1 from '../../../public/user.png'

export function UserPic() {
  return (
    <div className="user-icon">
      <Image src={img1} width={40} />
    </div>
  )
}

export function UserName() {

  const [name, setName] = useState('Gaurav Chandrakar')

  return (
    <div className="user-name">
      {name}
    </div>
  )
}