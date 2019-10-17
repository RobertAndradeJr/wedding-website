import React from 'react'
import { HomeStrings } from '../Strings/Strings'
import Countdown from '../Countdown/Countdown'
import ShareBar from '../ShareBar/ShareBar'

const { detail, title } = HomeStrings
const {
  WEDDING_DATE,
} = detail
const Banner = () => (
  <div className="text-white w-screen m-24">
    <div className="opacity-1">
      <h1 className="text-6xl">{title}</h1>
      <h2 className="text-5xl ">{WEDDING_DATE}</h2>
      <Countdown />
    </div>
    <ShareBar />
  </div>
)

export default Banner
