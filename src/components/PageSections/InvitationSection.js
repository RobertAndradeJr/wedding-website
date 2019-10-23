import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import InvitationIllustration from '../../assets/undraw_invite.svg'

const PLACEHOLDER = 'Please join us for a night of fun festivities'
const InvitationSection = () => (
  <ScrollableAnchor id="invitation">
    <section className="flex flex-col text-white items-center p-24">
      <h1 className="text-4xl py-4">{PLACEHOLDER}</h1>
      <img src={InvitationIllustration} className="w-6/12" alt="invitation illustration" />
    </section>
  </ScrollableAnchor>


)

export default InvitationSection
