import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import '../styles/home.css'
import Navbar from './Nav/Navbar'
import HowWeMetSection from './PageSections/HowWeMetSection'
import EventsList from './PageSections/EventsListSection'
import InstagramPicsSection from './PageSections/InstagramPicsSection'
import InvitationSection from './PageSections/InvitationSection'
import EngagementPicsSection from './PageSections/EngagementPicsSection'
import CitySection from './PageSections/CitySection'
import MapSection from './PageSections/MapSection'
import RsvpSection from './PageSections/RsvpSection'
import FooterSection from './PageSections/FooterSection'
import HeroSection from './PageSections/HeroSection'
import useWindowDimensions from '../Utilities/UseWindowDimensions'

export function Home() {
  const { height } = useWindowDimensions()
  configureAnchors({ offset: height / -10, scrollDuration: 500 })
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <InvitationSection />
      <HowWeMetSection />
      <EventsList />
      <InstagramPicsSection />
      <EngagementPicsSection />
      <CitySection />
      <MapSection />
      <RsvpSection />
      <FooterSection />
    </div>
  )
}

export default Home
