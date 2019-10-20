import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ScrollableAnchor from 'react-scrollable-anchor'
import { InstagramPicsStrings } from '../Strings/Strings'

const { HASHTAG, HELP_US, PICTURE_WORTH_THOUSAND_WORDS } = InstagramPicsStrings

const INSTAGRAM_LINK = `https://www.instagram.com/explore/tags/${HASHTAG}`
const INSTAGRAM_QUERY = `${INSTAGRAM_LINK}/?__a=1`
const InstagramPicsSection = () => {
  const [Pictures, setPictures] = useState([])

  useEffect(() => {
    async function fetchPictures() {
      const response = await Axios.get(INSTAGRAM_QUERY)
      setPictures(response.data.graphql.hashtag.edge_hashtag_to_media.edges)
    }
    fetchPictures()
  }, [])

  return (
    <ScrollableAnchor id="Instagram">
      <section className="bg-yellow-100 justify-center md:px-24 lg:px-48">
        <div className="text-center">
          <h3>{PICTURE_WORTH_THOUSAND_WORDS}</h3>
          <p>
            {HELP_US}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {HASHTAG}
            </a>
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <>
            {Pictures.map((pic) => <img key={pic.node.id} src={pic.node.display_url} alt="yeet" className="w-4/12 p-6" />)}
          </>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default InstagramPicsSection
