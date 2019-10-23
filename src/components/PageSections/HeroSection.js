import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import RSVPButton from '../Hero/RSVPButton'
import EngagementPhoto from '../../assets/engagement_photo.jpg'
import Banner from '../Hero/Banner'

const heroStyles = 'bg-center bg-fixed bg-no-repeat bg-contain h-screen flex flex-col items-center justify-between p-20 pb-4'

const HeroSection = () => (
  <ScrollableAnchor
    id="Home"
  >
    <section
      className={heroStyles}
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ),url(${EngagementPhoto})`,
      }}
    >
      <Banner />
      <RSVPButton />
    </section>
  </ScrollableAnchor>
)

export default HeroSection
