import React from 'react'
import { ShareBarStrings, InstagramPicsStrings } from '../Strings/Strings'

const { TWITTER } = ShareBarStrings
const { HASHTAG } = InstagramPicsStrings

const TWITTER_LINK = `https://twitter.com/intent/tweet?button_hashtag=${HASHTAG}&ref_src=twsrc%5Etfw`
const WEBSITE_LINK = 'https://robertandmandi.wedding'
const ShareBar = () => (
  <div className="flex items-center justify-around py-6 ">
    <div className="fb-like" data-href={WEBSITE_LINK} data-width="50" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true" />
    <a href={TWITTER_LINK} className="twitter-hashtag-button" data-show-count="false">{TWITTER}</a>
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
  </div>
)

export default ShareBar
