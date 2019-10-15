import React from 'react'
import { NavStrings } from '../Strings/Strings'
import HeartLogo from './HeartLogo'

const { titleText } = NavStrings
const handleClick = () => document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' })

export default function NavHeader() {
  return (
    <button className="flex items-center flex-shrink-0 text-white mr-6" type="button" onClick={() => handleClick()}>
      <HeartLogo />
      <span className="font-semibold text-xl tracking-tight">{titleText}</span>
    </button>
  )
}
