import React from 'react'
import Fade from 'react-reveal/Fade'
import ScrollableAnchor from 'react-scrollable-anchor'
import { HowWeMetStrings } from '../Strings/Strings'
import HowWeMetRobert from '../../assets/howwemet-robert.jpg'
import HowWeMetMandi from '../../assets/howwemet-mandi.jpg'

const { DESCRIPTION, TITLE } = HowWeMetStrings
const imageFlexBox = 'flex flex-row items-center justify-around py-16 flex-wrap'
const altTitles = {
  Robert: 'Robert (he/him)',
  Mandi: 'Mandi (they/them)',
}

const HowWeMetSection = () => (
  <ScrollableAnchor id="HowWeMet">
    <section className="text-white">
      <h3 className="text-6xl">{TITLE}</h3>
      <div className={imageFlexBox}>
        <Fade left>
          <div className="HowWeMet--img order-2 md:order-1 md:w-3/12">
            <img src={HowWeMetMandi} alt={altTitles.Mandi} />
            <p className="text-sm block">{altTitles.Mandi}</p>
          </div>
        </Fade>
        <p className=" order-1 md:order-2 w-10/12 md:w-4/12">
          {DESCRIPTION}
        </p>
        <Fade right>
          <div className="HowWeMet--img order-3 md:w-3/12">
            <img src={HowWeMetRobert} alt={altTitles.Robert} />
            <p className="text-sm block">{altTitles.Robert}</p>
          </div>
        </Fade>
      </div>
    </section>
  </ScrollableAnchor>
)

export default HowWeMetSection
