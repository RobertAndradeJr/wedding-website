import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import YouTubeBackground from 'react-youtube-background'
import { CityStrings } from '../Strings/Strings'

const { CITY_NAME, CITY_MOTTO } = CityStrings


const CitySection = () => (
  <ScrollableAnchor id="Glimpseofthecity">
    <section className="relative my-24">
      <YouTubeBackground
        videoId="CWzZ-Y2D9tw"
        className="z-30 flex flex-col justify-center text-white"
        style={{ height: 420 }}
        overlay="rgba(0,0,0,0.33)"
        nocookie
      >
        <div id="video-content">
          <h5 className="text-4xl">{CITY_NAME}</h5>
          <p className="text-xl">{CITY_MOTTO}</p>
        </div>
      </YouTubeBackground>
    </section>
  </ScrollableAnchor>
)

export default CitySection
