import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { InstagramPicsStrings } from '../Strings/Strings'

const { HASHTAG, HELP_US, PICTURE_WORTH_THOUSAND_WORDS } = InstagramPicsStrings

const InstagramPicsSection = () => (
  <ScrollableAnchor id="Instagram">
    <section className="section-padding h-screen bg-yellow-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>{PICTURE_WORTH_THOUSAND_WORDS}</h3>
            <p>
              {HELP_US}
              <a
                href="https://instagram.com/explore/tags/ramandantara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {HASHTAG}
              </a>
            </p>
          </div>
        </div>
        <div className="row section-border wp7">
          <div className="col-md-4 col-md-offset-4">
            <img src="img/iphone_instagram.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default InstagramPicsSection
