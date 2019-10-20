import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ShareBar from '../ShareBar/ShareBar'

const InvitationSection = () => (
  <ScrollableAnchor id="invitation">
    <section className="flex flex-col text-white items-center">
      <ShareBar />
    </section>
  </ScrollableAnchor>


)

export default InvitationSection
