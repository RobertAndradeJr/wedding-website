import React from 'react'
import {
  buttonText,
} from '../Strings/HomeStrings'

const detailStyles = ''
/* 'flex items-center justify-around' */
const RSVPButton = () => (
  <div>
    <button className="text-white text-2xl border rounded border-purple-600 bg-transparent hover:bg-purple-600" type="button">
      {buttonText}
    </button>
  </div>
)

export default RSVPButton
