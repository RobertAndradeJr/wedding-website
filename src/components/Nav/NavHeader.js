import React from 'react'
import { NavStrings } from '../Strings/Strings'
import HeartLogo from './HeartLogo'

const { titleText } = NavStrings

export default function NavHeader() {
  return (
    <a href="#Home" className="focus:outline-none">
      <button className="flex items-center flex-shrink-0 text-white mr-6 focus:outline-none focus:shadow-outline" type="button">
        <HeartLogo />
        <span className="font-semibold text-xl tracking-tight hover:text-black">{titleText}</span>
      </button>
    </a>
  )
}
