import React from 'react'
import '../styles/home.css'
import Navbar from './Nav/Navbar'

import Countdown from './Countdown/Countdown'
import HowWeMetSection from './PageSections/HowWeMetSection'
import EventsList from './PageSections/EventsListSection'
import InstagramPicsSection from './PageSections/InstagramPicsSection'
import InvitationSection from './PageSections/InvitationSection'
import EngagementPics from './PageSections/EngagementPicsSection'
import CitySection from './PageSections/CitySection'
import MapSection from './PageSections/MapSection'
import RsvpSection from './PageSections/RsvpSection'
import FooterSection from './PageSections/FooterSection'
import HeroSection from './PageSections/HeroSection'

export function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InvitationSection />
      <HowWeMetSection />
      <EventsList />
      <InstagramPicsSection />
      <EngagementPics />
      <CitySection />
      <MapSection />
      <RsvpSection />
      <FooterSection />
    </>
  )
}

export default Home
