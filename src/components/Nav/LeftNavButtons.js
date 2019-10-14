import React from 'react'
import { NavStrings } from '../Strings/Strings'
import ButtonText from './ButtonText'

const { leftButtons } = NavStrings
export default function LeftNavButtons() {
  return (
    <div className="text-sm lg:flex-grow">
      <ButtonText buttons={leftButtons} />
    </div>
  )
}
