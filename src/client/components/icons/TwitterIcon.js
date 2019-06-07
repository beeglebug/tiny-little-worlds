import React from 'react'

export default function TwitterIcon ({ width = 16, height = 16, color = '#00aced', style }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 14 11'
      style={style}
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <style type='text/css'>
        { `.icon { fill:${color} }` }
      </style>
      <g id='TwitterIcon'>
        <path
          className='icon'
          d='M14,1.3c-0.5,0.2-1.1,0.4-1.6,0.4c0.6-0.3,1-0.9,1.3-1.5c-0.6,0.3-1.2,0.5-1.8,0.7C11.3,0.3,10.5,0,9.7,0
C8.1,0,6.8,1.2,6.8,2.8c0,0.2,0,0.4,0.1,0.6C4.5,3.3,2.4,2.2,1,0.5C0.7,0.9,0.6,1.4,0.6,1.9c0,1,0.5,1.8,1.3,2.3
c-0.5,0-0.9-0.1-1.3-0.3v0c0,1.3,1,2.5,2.3,2.7C2.6,6.7,2.4,6.7,2.1,6.7c-0.2,0-0.4,0-0.5,0C1.9,7.8,3,8.6,4.3,8.6
C3.3,9.3,2,9.8,0.7,9.8c-0.2,0-0.5,0-0.7,0C1.3,10.5,2.8,11,4.4,11c5.3,0,8.2-4.2,8.2-7.9c0-0.1,0-0.2,0-0.4
C13.1,2.3,13.6,1.9,14,1.3'
        />
      </g>
    </svg>
  )
}
