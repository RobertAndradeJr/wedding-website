import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import RSVPButton from '../Hero/RSVPButton'
import EngagementPhoto from '../../assets/engagement_photo.jpg'

const heroStyles = 'bg-center bg-fixed bg-no-repeat bg-contain h-screen flex flex-col justify-end items-between p-20 pb-4'

const HeroSection = () => (
  <ScrollableAnchor
    id="Home"
  >
    <section className={heroStyles} style={{ backgroundImage: `url(${EngagementPhoto})` }}>
      <RSVPButton />
    </section>
  </ScrollableAnchor>
)

export default HeroSection
