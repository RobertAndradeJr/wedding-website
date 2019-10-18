import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { CityStrings } from '../Strings/Strings'

const { CITY_NAME, CITY_MOTTO } = CityStrings

const CitySection = () => (
  <ScrollableAnchor id="Glimpseofthecity">
    <section className="h-screen bg-green-100">
      <div
        id="bgndVideo"
        className="player"
        data-property="{videoURL:'https://youtu.be/CWzZ-Y2D9tw',containment:'#video-bg',autoPlay:true, mute:true, showControls:false, startAt:77, stopAt:259, opacity:1}"
      />
      <div id="video-content">
        <h5>{CITY_NAME}</h5>
        <p>{CITY_MOTTO}</p>
      </div>
    </section>
  </ScrollableAnchor>
)

export default CitySection
