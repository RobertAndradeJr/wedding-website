import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { MapStrings } from '../Strings/Strings'

const {
  CONTACT,
  CONTACT_NAME,
  CONTACT_NUMBER,
  VENUE_ADDRESS,
  VENUE_ADDRESS_2,
  VENUE_NAME,
  BOOK_UBER,
  SHOW_MAP,
} = MapStrings

const BELL_MUSEUM_TEL_LINK = `tel:${CONTACT_NUMBER}`
const UBER_LINK = 'https://m.uber.com/ul/?action=setPickup&client_id=WQvddpr5mKEbJ_eFl1uvVOQvi_LCEPWe&pickup=my_location&dropoff[formatted_address]=Bell%20Museum%2C%20Larpenteur%20Avenue%20West%2C%20Saint%20Paul%2C%20MN%2C%20USA&dropoff[latitude]=44.991158&dropoff[longitude]=-93.187898'

const GOOGLE_MAPS_LINK = 'https://g.page/BellMuseum?share'

const DirectionsSection = () => (
  <ScrollableAnchor id="Directions">
    <section className="flex flex-row justify-around pb-24">
      <div className="w-9/12 md:w-6/12 flex flex-row bg-gray-400 justify-around p-8">
        <div className="flex flex-col">
          <h3 className="text-xl">{VENUE_NAME}</h3>
          <p>{VENUE_ADDRESS}</p>
          <p>{VENUE_ADDRESS_2}</p>
          <a className="pt-8" href={UBER_LINK}>
            <button type="button" className="btn bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600">
              {BOOK_UBER}
            </button>
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl">{CONTACT}</h3>
          <p>{CONTACT_NAME}</p>
          <a className="text-yellow-600" href={BELL_MUSEUM_TEL_LINK}>{CONTACT_NUMBER}</a>
          <a className="pt-8" href={GOOGLE_MAPS_LINK}>
            <button type="button" className="btn bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600">
              {SHOW_MAP}
            </button>
          </a>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default DirectionsSection
