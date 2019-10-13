import React from 'react'
import { titleText } from '../Strings/NavStrings'
import HeartLogo from './HeartLogo'

export default function NavHeader() {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <HeartLogo />
      <span className="font-semibold text-xl tracking-tight">{titleText}</span>
    </div>
  )
}
