import React, { lazy, Suspense } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import '../styles/home.css'
import Navbar from './Nav/Navbar'
import HeroSection from './PageSections/HeroSection'
import FooterSection from './PageSections/FooterSection'
import useWindowDimensions from '../utils/UseWindowDimensions'
import SpaceBackground from '../assets/space-background.jpg'

const lazyComponents = [
  lazy(() => import('./PageSections/InvitationSection')),
  lazy(() => import('./PageSections/HowWeMetSection')),
  lazy(() => import('./PageSections/EventsListSection')),
  lazy(() => import('./PageSections/EngagementPicsSection')),
  lazy(() => import('./PageSections/SocialSection')),
  lazy(() => import('./PageSections/CitySection')),
  lazy(() => import('./PageSections/MapSection')),
  lazy(() => import('./PageSections/DirectionsSection')),
  lazy(() => import('./PageSections/RsvpSection')),
]

export function Home() {
  const { height } = useWindowDimensions()
  const FALLBACK = 'loading...'
  configureAnchors({ offset: height / -10, scrollDuration: 500 })

  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ),url(${SpaceBackground})`,
      }}
    >
      <Navbar />
      <HeroSection />
      {
        lazyComponents.map((Component, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Suspense key={i} fallback={<h1 className="text-white text-md">{FALLBACK}</h1>}>
            <Component />
          </Suspense>
        ))
      }
      <FooterSection />
    </div>
  )
}

export default Home
