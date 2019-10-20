import React from 'react'
import { HomeStrings } from '../Strings/Strings'
import Countdown from '../Countdown/Countdown'

const { detail, title } = HomeStrings
const {
  WEDDING_DATE,
  WEDDING_LOCATION,
} = detail

const SUBTITLE = `${WEDDING_DATE} · ${WEDDING_LOCATION}`
const Banner = () => (
  <div className="text-white w-screen m-24">
    <div className="opacity-1">
      <h1 className="text-6xl">{title}</h1>
      <h2 className="text-lg text-gray-400 ">{SUBTITLE}</h2>
      <Countdown />
    </div>
  </div>
)

export default Banner
