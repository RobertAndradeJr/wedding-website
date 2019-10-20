import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ScrollableAnchor from 'react-scrollable-anchor'
import { InstagramPicsStrings } from '../Strings/Strings'
import ShareBar from '../ShareBar/ShareBar'

const { HASHTAG, HELP_US, PICTURE_WORTH_THOUSAND_WORDS } = InstagramPicsStrings

const INSTAGRAM_LINK = `https://www.instagram.com/explore/tags/${HASHTAG}`
const INSTAGRAM_QUERY = `${INSTAGRAM_LINK}/?__a=1`
const HASHTAG_LINK = `#${HASHTAG}`
const SocialSection = () => {
  const [Pictures, setPictures] = useState([])

  useEffect(() => {
    async function fetchPictures() {
      const response = await Axios.get(INSTAGRAM_QUERY)
      setPictures(response.data.graphql.hashtag.edge_hashtag_to_media.edges)
    }
    fetchPictures()
  }, [])

  return (
    <ScrollableAnchor id="Social">
      <section className="justify-center md:px-24 lg:px-48 text-white">
        <div className="text-center">
          <h3 className="text-4xl">{PICTURE_WORTH_THOUSAND_WORDS}</h3>
          <p className="text-2xl">
            {HELP_US}
            <a className="text-blue-500" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
              {HASHTAG_LINK}
            </a>
          </p>
        </div>
        <section className="flex flex-col text-white justify-around">
          <ShareBar />
        </section>
        <div className="flex flex-row flex-wrap justify-between">
          <>
            {Pictures.map((pic) => (
              <img
                key={pic.node.id}
                src={pic.node.display_url}
                alt="yeet"
                className="w-4/12 p-6"
              />
            ))}
          </>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default SocialSection
