import React from 'react'
import { RsvpStrings } from '../Strings/Strings'

const { RSVP } = RsvpStrings

const RsvpSection = () => (
  <section id="RSVP" className="section-padding h-screen bg-yellow-100">
    <div className="container">
      <h2>{RSVP}</h2>
    </div>
  </section>
)

export default RsvpSection
