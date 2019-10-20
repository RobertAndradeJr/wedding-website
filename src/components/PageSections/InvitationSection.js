import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ShareBar from '../ShareBar/ShareBar'

const PLACEHOLDER = 'Placeholder for invitation'
const InvitationSection = () => (
  <ScrollableAnchor id="invitation">
    <section className="flex flex-col h-screen text-white items-center bg-blue-300">
      <h1>{PLACEHOLDER}</h1>
    </section>
  </ScrollableAnchor>


)

export default InvitationSection
