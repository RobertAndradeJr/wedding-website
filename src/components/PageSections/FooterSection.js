import React from 'react'
import { FooterStrings } from '../Strings/Strings'

const { TITLE } = FooterStrings

const FooterSection = () => (
  <section id="footer" className="section-padding h-screen bg-yellow-100">
    <h1>{TITLE}</h1>
  </section>
)

export default FooterSection
