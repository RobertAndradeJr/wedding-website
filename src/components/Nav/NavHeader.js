import React from 'react'
import { NavStrings } from '../Strings/Strings'
import HeartLogo from './HeartLogo'

export default function NavHeader() {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <HeartLogo />
      <span className="font-semibold text-xl tracking-tight">{NavStrings.titleText}</span>
    </div>
  )
}
