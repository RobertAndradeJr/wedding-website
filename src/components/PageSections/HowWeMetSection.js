import React from 'react'
import { HowWeMetStrings } from '../Strings/Strings'

const { DESCRIPTION, TITLE } = HowWeMetStrings

const HowWeMetSection = () => (
  <section id="How We Met" className="intro text-white bg-green-200 h-screen">

    <h3 className="">{TITLE}</h3>

    <p className="text-white">
      {DESCRIPTION}
    </p>
  </section>
)

export default HowWeMetSection
