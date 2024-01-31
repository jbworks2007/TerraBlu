import React from 'react'
import Button from '@mui/material/Button'
import { Fab, Badge, ButtonBase } from '@mui/material'
import Image from 'next/image'



export function TextButton({ width, height, name, ...buttonProps }) {
  return (
    <Button variant='contained' className='btn-text'
      style={{ width: width ? `${width}px` : '100%', height: `${height}px` }}
      {...buttonProps}
    >
      {name}
    </Button>
  )
}

export function IconButton({ name, width, height, size, icon, type, fontsize, ...buttonProps }) {
  return (
    <Button variant="contained" className='btn-text'
      style={{ width: width ? `${width}px` : '100%', height: `${height}px`, fontSize: `${fontsize}px` }}
      {...buttonProps}
    >
      <div style={{ fontSize: `${size}px`, marginRight: "5px" }} >
        {React.createElement(type[`${icon}`])}
      </div>
      {name}
    </Button>
  )
}

export function BrandButton({ name, width, height, image, size, ...buttonProps }) {
  return (
    <Button variant="contained" className='btn-text'
      style={{ width: width ? `${width}px` : '100%', height: `${height}px` }}
      {...buttonProps}
    >
      <div style={{ marginRight: "5px", marginBottom: '5px' }} >
        <Image src={image} width={size} />
      </div>
      {name}
    </Button>
  )
}

export function RoundIcon(info) {
  return (
    <Badge color="info" overlap="circular" badgeContent={info.badgeValue} size="small">
      <Fab className='round-icon' size='small'>
        <info.icon size={info.size} />
      </Fab>
    </Badge>

  )
}

export function ButtonIcon({ name, width, height, size, icon, type, fontsize, ...buttonProps }) {
  return (
    <Button variant="contained" className='btn-text'
      style={{ width: width ? `${width}px` : '100%', height: `${height}px`, fontSize: `${fontsize}px` }}
      {...buttonProps}
    >
      {name}
      <div style={{ fontSize: `${size}px`, marginLeft: "5px" }} >
        {React.createElement(type[`${icon}`])}
      </div>
    </Button>
  )
}