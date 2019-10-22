import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { MapStrings } from '../Strings/Strings'

const {
  HOW_DO_I_GET_THERE,
  EASIER_THAN_YOU_THINK,
} = MapStrings

const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.6627383459654!2d-93.19008618454988!3d44.991161972903036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d172d3e3a05%3A0x63d7830833a56d3b!2sBell%20Museum!5e0!3m2!1sen!2sus!4v1571612382679!5m2!1sen!2sus'

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
