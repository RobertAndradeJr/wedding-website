import React from 'react'
import { HomeStrings } from '../Strings/Strings'

const styles = 'text-white text-2xl rounded-full  py-4 px-8 bg-purple-500 bg-purple-100 hover:bg-purple-400 focus:outline-none focus:shadow-outline active:bg-purple-800 '
const { buttonText } = HomeStrings

const RSVPButton = () => (
  <a href="#RSVP">
    <button className={styles} type="button">
      {buttonText}
    </button>
  </a>
)

export default RSVPButton
