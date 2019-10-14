import React from 'react'
import { HomeStrings } from '../Strings/Strings'

const styles = 'text-black text-2xl border-2 rounded-full  py-4 px-8 border-purple-600 bg-purple-100 hover:bg-purple-600 hover:text-white'
const { buttonText } = HomeStrings

const RSVPButton = () => (
  <div>
    <button className={styles} type="button">
      {buttonText}
    </button>
  </div>
)

export default RSVPButton
