import React from 'react'
import { HomeStrings } from '../Strings/Strings'

const { detail, title } = HomeStrings
const {
  WEDDING_DATE,
} = detail
const Banner = () => (
  <div className="text-white" style={{ backgroundColor: 'rgb(0,0,0,.85)' }}>
    <div className="opacity-1">
      <h1 className="text-6xl">{title}</h1>
      <h2 className=" py-2">{WEDDING_DATE}</h2>
    </div>
  </div>
)

export default Banner
