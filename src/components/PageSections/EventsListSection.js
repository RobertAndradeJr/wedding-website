import React from 'react'
import { EventsListStrings } from '../Strings/Strings'

const {
  TITLE, DATE, CEREMONY, COCKTAIL, DINNER, DANCE,
} = EventsListStrings

const EventsListSection = () => (
  <section id="Events" className="h-screen bg-red-100">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="header">{TITLE}</h3>
        </div>
      </div>
      <div className="row">
        <div className="wp3">
          <p>
            <strong>{DATE}</strong>
          </p>
          <h5>
            {CEREMONY.TITLE}
            <span className="time">{CEREMONY.TIME}</span>
          </h5>
          <p>
            {CEREMONY.DESCRIPTION}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="wp3">
          <p>
            <strong>{DATE}</strong>
          </p>
          <h5>
            {COCKTAIL.TITLE}
            <span className="time">{COCKTAIL.TIME}</span>
          </h5>
          <p>
            {COCKTAIL.DESCRIPTION}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="wp3">
          <p>
            <strong>{DATE}</strong>
          </p>
          <h5>
            {DINNER.TITLE}
            <span className="time">{DINNER.TIME}</span>
          </h5>
          <p>
            {DINNER.DESCRIPTION}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="wp3">
          <p>
            <strong>{DATE}</strong>
          </p>
          <h5>
            {DANCE.TITLE}
            <span className="time">{DANCE.TIME}</span>
          </h5>
          <p>
            {DANCE.DESCRIPTION}
          </p>
        </div>
      </div>
    </div>

  </section>
)

export default EventsListSection
