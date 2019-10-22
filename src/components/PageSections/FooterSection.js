import React from 'react'
import { FooterStrings, InstagramPicsStrings } from '../Strings/Strings'
import '../../styles/footer.css'

const { HASHTAG } = InstagramPicsStrings
const { TITLE, AUTHOR, NOTE } = FooterStrings

const hashtag = `#${HASHTAG}`

const FooterSection = () => (
  <section id="footer" className="text-white pt-4">
    <a href="#Home">
      <button type="button" className="bg-yellow-500 p-4 rounded-full m-4 hover:bg-yellow-400 active:bg-yellow-600 focus:outline-none focus:shadow-outline">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path
            style={{ fill: '#fff' }}
            className="heroicon-ui"
            d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"
          />
        </svg>
      </button>
    </a>
    <h1 className="text-2xl">{hashtag}</h1>
    <p className="text-sm py-6">{TITLE + AUTHOR + NOTE}</p>
  </section>
)

export default FooterSection
