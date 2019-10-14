import React from 'react'
import { NavStrings } from '../Strings/Strings'
import ButtonText from './ButtonText'

const { rightButtons } = NavStrings
export default function RightNavButtons() {
  return (
    <div className="text-sm lg:flex-grow">
      <ButtonText buttons={rightButtons} />
    </div>
  )
}
