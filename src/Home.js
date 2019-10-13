import React from 'react'
import EngagementPhoto from './engagement_photo.jpg'
import Template from './Template'
import './App.css'
import Navbar from './components/Nav/Navbar'
import Countdown from './components/Countdown/Countdown'

import Banner from './components/Hero/Banner'
import RSVPButton from './components/Hero/RSVPButton'

export function Home() {
  const heroStyles = 'bg-center bg-fixed bg-no-repeat bg-contain h-screen flex flex-col justify-between items-between'
  return (
    <>
      {/* <Navbar /> */}
      <header className={heroStyles} style={{ backgroundImage: `url(${EngagementPhoto})` }}>
        <Banner />
        <RSVPButton />
      </header>
      {/* <h1 className="info" id="demo">{detail}</h1> */}
      {/* <Countdown /> */}
      <Template />
    </>
  )
}

export default Home
