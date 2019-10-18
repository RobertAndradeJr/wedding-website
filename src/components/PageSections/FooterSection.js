import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { FooterStrings } from '../Strings/Strings'

const { TITLE } = FooterStrings

const FooterSection = () => (
  <ScrollableAnchor id="footer" className="section-padding h-screen bg-yellow-100">
    <h1>{TITLE}</h1>
  </ScrollableAnchor>
)

export default FooterSection
