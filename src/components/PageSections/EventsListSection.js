import React from 'react'
import { EventsListStrings } from '../Strings/Strings'

const {
  TITLE, DRESS_CODE, CEREMONY, COCKTAIL, DINNER, DANCE,
} = EventsListStrings

const EventsListSection = () => (
  <section id="Events" className="flex flex-row flex-wrap text-white items-center justify-around">
    <h3 className="header text-6xl w-full">{TITLE}</h3>
    <div className="w-6/12 border-r-2 border-white">
      <div className="m-8">
        <h5>
          {CEREMONY.TITLE}
        </h5>
        <h6>
          {CEREMONY.TIME}
        </h6>
        <p>
          {CEREMONY.DESCRIPTION}
        </p>
      </div>
      <div className="m-8">
        <h5>
          {COCKTAIL.TITLE}
        </h5>
        <h6 className="time">
          {COCKTAIL.TIME}
        </h6>
        <p>
          {COCKTAIL.DESCRIPTION}
        </p>
      </div>
    </div>
    <div className="w-6/12">
      <div className="m-8">
        <h5>
          {DINNER.TITLE}
        </h5>
        <h6>
          {DINNER.TIME}
        </h6>
        <p>
          {DINNER.DESCRIPTION}
        </p>
      </div>
      <div className="m-8">
        <h5>
          {DANCE.TITLE}
        </h5>
        <h6 className="time">
          {DANCE.TIME}
        </h6>
        <p>
          {DANCE.DESCRIPTION}
        </p>
      </div>
    </div>
    <button className="btn btn--yellow hover:bg-yellow-400 focus:outline-none focus:shadow-outline active:bg-yellow-600 m-8" type="button">{DRESS_CODE.TITLE}</button>
  </section>
)

export default EventsListSection
