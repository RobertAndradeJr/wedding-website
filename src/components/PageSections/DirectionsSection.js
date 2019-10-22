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
    <section
      className="flex flex-row justify-around py-24 text-white bg-cover"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ),url(https://www.bellmuseum.umn.edu/wp-content/uploads/2019/02/horizon-hall-hero.jpg)`,
      }}
    >
      <div className=" md:w-6/12 flex flex-col md:flex-row justify-between md:justify-around p-8">
        <div className="flex flex-col py-4">
          <h3 className="text-xl">{VENUE_NAME}</h3>
          <p>{VENUE_ADDRESS}</p>
          <p>{VENUE_ADDRESS_2}</p>
          <a className="pt-8" href={UBER_LINK}>
            <button type="button" className="btn bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600">
              {BOOK_UBER}
            </button>
          </a>
        </div>
        <div className="flex flex-col py-4">
          <h3 className="text-xl">{CONTACT}</h3>
          <p>{CONTACT_NAME}</p>
          <a className="text-yellow-600" href={BELL_MUSEUM_TEL_LINK}>{CONTACT_NUMBER}</a>
          <a className="pt-8" href={GOOGLE_MAPS_LINK}>
            <button type="button" className="btn bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 flex justify-around">
              <svg className="inline my-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path
                  style={{ fill: '#fff' }}
                  className="heroicon-ui"
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              {SHOW_MAP}
            </button>
          </a>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default DirectionsSection
