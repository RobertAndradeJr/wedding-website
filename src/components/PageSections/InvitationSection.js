import React from 'react'
import { InvitationStrings } from '../Strings/Strings'

const { GETTING_HITCHED } = InvitationStrings

const InvitationSection = () => (
  <section id="invitation" className="h-screen bg-blue-100">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>{GETTING_HITCHED}</h3>
          <p />
          <div className="share-bar" />
        </div>
      </div>
    </div>
  </section>


)

export default InvitationSection
