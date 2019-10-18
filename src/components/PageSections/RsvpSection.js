import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { RsvpStrings, HomeStrings } from '../Strings/Strings'

const { RSVP } = RsvpStrings
const { detail } = HomeStrings
const {
  WHEN,
  WHERE,
  ADDRESS,
  WEDDING_ADDRESS,
  WEDDING_DATE,
  WEDDING_LOCATION,
} = detail

const detailStyles = 'flex items-center justify-between px-40'

const RsvpSection = () => (
  <ScrollableAnchor id="RSVP">
    <section className="section-padding h-screen bg-yellow-100">
      <div className="container">
        <h2>{RSVP}</h2>
        <div className={detailStyles}>
          <h2>{WHEN}</h2>
          <p>{WEDDING_DATE}</p>
        </div>
        <div className={detailStyles}>
          <h2>{WHERE}</h2>
          <p>{WEDDING_LOCATION}</p>
        </div>
        <div className={detailStyles}>
          <h2>{ADDRESS}</h2>
          <p>{WEDDING_ADDRESS}</p>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default RsvpSection
