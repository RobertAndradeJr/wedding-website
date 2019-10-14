import React from 'react'
import {
  buttonText,
  detail,
  title,
} from '../Strings/HomeStrings'

const detailStyles = 'flex items-center justify-between px-40'
const Banner = () => (
  <div className="text-white" style={{ backgroundColor: 'rgb(0,0,0,.85)' }}>
    <div className="opacity-1">
      <h1 className="text-6xl">{title}</h1>
      <div className={detailStyles}>
        <h2>WHEN:</h2>
        <p>{detail.WEDDING_DATE}</p>
      </div>
      <div className={detailStyles}>
        <h2>WHERE:</h2>
        <p>{detail.WEDDING_LOCATION}</p>
      </div>
      <div className={detailStyles}>
        <h2>ADDRESS:</h2>
        <p>{detail.WEDDING_ADDRESS}</p>
      </div>
    </div>
  </div>
)

export default Banner
