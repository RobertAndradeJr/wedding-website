import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { MapStrings } from '../Strings/Strings'

const {
  HOW_DO_I_GET_THERE,
  EASIER_THAN_YOU_THINK,
} = MapStrings

const MAP_QUERY = 'bell+museum+near+55113'
const MAP_URL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_MAPS_API_KEY}&q=${MAP_QUERY}`

const DirectionsSection = () => (
  <ScrollableAnchor id="Venue">
    <section className="h-screen">
      <div className="text-center text-white pb-24">
        <h3 className="text-4xl">{HOW_DO_I_GET_THERE}</h3>
        <p className="text-xl">{EASIER_THAN_YOU_THINK}</p>
      </div>
      <div className="h-48 flex flex-row justify-around" id="map-container">
        <iframe
          className="w-9/12"
          title="bell-museum-map"
          src={MAP_URL}
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </div>
    </section>
  </ScrollableAnchor>
)

export default DirectionsSection
