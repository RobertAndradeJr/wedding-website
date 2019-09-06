import React, { useState } from 'react'
import Template from './Template'
import './App.css'
import Navbar from './components/Nav/Navbar'


const title = 'Robert & Mandi are getting married!'
const detail = 'Let\'s have a great wedding!'
const buttonText = 'RSVP'
const heroImage = 'https://instagram.ffcm1-2.fna.fbcdn.net/vp/16a383f1d9b3a06d6972085e6cf7ae1d/5DFDB388/t51.2885-15/e35/41203721_691517357888913_5430100155676178400_n.jpg?_nc_ht=instagram.ffcm1-2.fna.fbcdn.net';
export function Home() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  // Set the date we're counting down to
  const countDownDate = new Date('Oct 31, 2020 18:00:00').getTime()
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
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000)

  const countdownOutput = `${days}d ${hours}h ${minutes}m ${seconds}s`
  return (
    <>
      <Navbar />
      <header className="App-header" />
      <div className="App-header--text">
        <h1>{title}</h1>
        <img src={heroImage} className="App-logo" alt="logo" />
        <p>{detail}</p>
        <button
          className="App-link"
          href="https://www.instagram.com/me_hoy_minoyyy/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
      <div>
        <h1 className="info" id="demo">{detail}</h1>
        <p>
          {countdownOutput}
        </p>
      </div>
      <>
        <Template />
      </>
    </>
  )
}

export default Home
