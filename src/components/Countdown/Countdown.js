import React from 'react'
import { CountdownStrings } from '../Strings/Strings'
import UseCountdown from '../../utils/UseCountdown'

const { WEDDING_DATE } = CountdownStrings

const Countdown = () => {
  const {
    Days,
    Hours,
    Minutes,
    Seconds,
  } = UseCountdown(WEDDING_DATE, {})
  const countdownOutput = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`

  return <h1 className="h-24 text-gray-400 text-md  p-4 h-12">{countdownOutput}</h1>
}

export default Countdown
