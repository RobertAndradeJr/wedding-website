import React, { lazy, Suspense } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import '../styles/home.css'
import Navbar from './Nav/Navbar'
import HeroSection from './PageSections/HeroSection'
import FooterSection from './PageSections/FooterSection'
import useWindowDimensions from '../utils/UseWindowDimensions'

const InvitationSection = lazy(() => import('./PageSections/InvitationSection'))
const HowWeMetSection = lazy(() => import('./PageSections/HowWeMetSection'))
const EventsList = lazy(() => import('./PageSections/EventsListSection'))
const EngagementPicsSection = lazy(() => import('./PageSections/EngagementPicsSection'))
const SocialSection = lazy(() => import('./PageSections/SocialSection'))
const CitySection = lazy(() => import('./PageSections/CitySection'))
const MapSection = lazy(() => import('./PageSections/MapSection'))
const DirectionsSection = lazy(() => import('./PageSections/DirectionsSection'))
const RsvpSection = lazy(() => import('./PageSections/RsvpSection'))

export function Home() {
  const { height } = useWindowDimensions()
  const FALLBACK = 'loading...'
  configureAnchors({ offset: height / -10, scrollDuration: 500 })
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<h1 className="text-white text-md">{FALLBACK}</h1>}>
        <InvitationSection />
        <HowWeMetSection />
        <EventsList />
        <EngagementPicsSection />
        <SocialSection />
        <CitySection />
        <MapSection />
        <DirectionsSection />
        <RsvpSection />
      </Suspense>
      <FooterSection />
    </div>
  )
}

export default Home
