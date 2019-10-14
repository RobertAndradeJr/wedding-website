import React from 'react'
import { NavStrings } from '../Strings/Strings'
import HeartLogo from './HeartLogo'

const { titleText } = NavStrings
export default function NavHeader() {
  return (
    <a href="#hero">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <HeartLogo />
        <span className="font-semibold text-xl tracking-tight">{titleText}</span>
      </div>
    </a>
  )
}
