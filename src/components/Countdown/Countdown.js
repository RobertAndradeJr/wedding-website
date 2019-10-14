import React, { useState } from 'react'
import { CountdownStrings } from '../Strings/Strings'

const Countdown = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  // Set the date we're counting down to
  const countDownDate = new Date(CountdownStrings.weddingDate).getTime()
  const x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime()

    // Find the distance between now and the count down date
    const distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = ;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
      document.getElementById('demo').innerHTML = 'EXPIRED'
    }
  }, 1000)

  const countdownOutput = `${days}d ${hours}h ${minutes}m ${seconds}s`
  return (<h2 className="h-24 bg-red-500">{countdownOutput}</h2>)
}

export default Countdown
