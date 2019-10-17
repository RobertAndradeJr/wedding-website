import React from 'react'
import Fade from 'react-reveal/Fade'
import { HowWeMetStrings } from '../Strings/Strings'
import HowWeMetRobert from '../../assets/howwemet-robert.jpg'
import HowWeMetMandi from '../../assets/howwemet-mandi.jpg'

const { DESCRIPTION, TITLE } = HowWeMetStrings

const HowWeMetSection = () => (
  <section id="HowWeMet" className="intro text-white">
    <h3 className="text-6xl">{TITLE}</h3>
    <div className="flex flex-row justify-around py-16">
      <Fade left>
        <img className="w-2/12" src={HowWeMetMandi} alt="Mandi" />
      </Fade>
      <p className="text-white w-4/12">
        {DESCRIPTION}
      </p>
      <Fade right>
        <img className="w-2/12 h-auto" src={HowWeMetRobert} alt="Robert" />
      </Fade>
    </div>
  </section>
)

export default HowWeMetSection
