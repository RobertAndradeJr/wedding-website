import React, { useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import RSVPForm from '../Forms/RSVPForm'
import Api from '../../utils/Api'

const RsvpSection = () => {
  const [RsvpData, setRsvpData] = useState(undefined)
  return (
    <ScrollableAnchor id="RSVP">
      <section className="text-white items-center flex flex-col justify-around py-24">
        <div className="w-full max-w-4xl bg-gray-900 flex flex-col items-center justify-around py-12 px-6">
          <button type="button" onClick={async () => setRsvpData(await Api.readAll())}>
            {JSON.stringify(RsvpData) || 42069}
          </button>
          <RSVPForm />
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default RsvpSection
