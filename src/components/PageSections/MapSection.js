import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { MapStrings } from '../Strings/Strings'

const {
  HOW_DO_I_GET_THERE,
  EASIER_THAN_YOU_THINK,
  SHOW_INFO,
  VENUE_ADDRESS,
  VENUE_NAME,
  BOOK_UBER,
  SHOW_MAP,
} = MapStrings

const MapSection = () => (
  <ScrollableAnchor id="Venue">
    <section className="h-screen bg-blue-100">
      <div className="text-center">
      <h3>{HOW_DO_I_GET_THERE}</h3>
      <p>{EASIER_THAN_YOU_THINK}</p>
    </div>
      <div id="map-canvas" />
      <div id="map-content-wrapper" className="container pointer-events-none">
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
          <div className="text-center">
            <div
              id="btn-show-content"
              className="toggle-map-content pointer-events-auto"
            >
              <i className="fa fa-info-circle" />
              {SHOW_INFO}
            </div>
          </div>
          <div id="map-content" className="pointer-events-auto">
            <div className="row">
              <div className="col-md-6">
                <h5>{VENUE_NAME}</h5>
                <p>{VENUE_ADDRESS}</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-6" style={{ padding: '5px' }}>
                <a
                  className="btn btn-fill btn-small"
                  href="https://m.uber.com/ul/?action=setPickup&client_id=Yh7Dl6SjB56RY2JuuZF8ttVa6ryFV78W&pickup=my_location&dropoff[formatted_address]=Fortune%20Park%20Panchwati%20-%20Hotels%20in%20Kolkata%2C%20Howrah%2C%20West%20Bengal%2C%20India&dropoff[latitude]=22.593276&dropoff[longitude]=88.270277"
                >
                  <i className="fa fa-taxi" />
                  {BOOK_UBER}
                </a>
              </div>
              <div className="col-md-6" style={{ padding: '5px' }}>
                <a className="btn btn-accent btn-small" id="btn-show-map" href="#btn-show-map">
                  <i className="fa fa-map-marker" />
                  {SHOW_MAP}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </ScrollableAnchor>
)

export default MapSection
