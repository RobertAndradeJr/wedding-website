import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { EngagementPicsStrings } from '../Strings/Strings'
import TravelingIllustration from '../../assets/undraw_travelers.svg'

const { SUBTITLE, TITLE } = EngagementPicsStrings
const importAll = (r) => r.keys().map(r)
const images = importAll(require.context('../../assets/engagement-photos', false, /\.(png|jpe?g|svg)$/))


const EngagementPicsSection = () => (
  <ScrollableAnchor id="Engagement">
    <section className="h-auto flex flex-col items-center pb-8">
      <h2 className="text-4xl text-white py-8">{TITLE}</h2>
      <h2 className="text-lg text-white py-8">{SUBTITLE}</h2>
      <div className=" flex flex-row items-center justify-between w-screen">
        <div className="float-left w-4/12 flex flex-col justify-around">
          <img src={TravelingIllustration} alt="two travelers" />
        </div>
        <div className="float-right w-6/12 flex flex-row flex-wrap clearfix">
          {images.map((image) => <img key={image} src={image} alt="engagement" className="w-2/12" />) }
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default EngagementPicsSection
