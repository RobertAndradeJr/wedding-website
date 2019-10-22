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

const detailStyles = 'items-center'

const RsvpSection = () => (
  <ScrollableAnchor id="RSVP">
    <section className="h-screen text-white p-24">
      <h2 className="text-4xl">{RSVP}</h2>
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
    </section>
  </ScrollableAnchor>
)

export default RsvpSection
