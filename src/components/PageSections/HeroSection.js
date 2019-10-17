import React from 'react'
import Banner from '../Hero/Banner'
import RSVPButton from '../Hero/RSVPButton'
import EngagementPhoto from '../../assets/engagement_photo.jpg'

const heroStyles = 'bg-center bg-fixed bg-no-repeat bg-contain h-screen flex flex-col justify-end items-between p-20 pb-4'
const ID = 'hero'

const HeroSection = () => (
  <header
    id={ID}
    className={heroStyles}
    style={{ backgroundImage: `url(${EngagementPhoto})` }}
  >
    <RSVPButton />
  </header>
)

export default HeroSection
