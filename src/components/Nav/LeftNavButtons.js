import React from 'react'
import { leftButtons } from '../Strings/NavStrings'
import ButtonText from './ButtonText'

export default function LeftNavButtons() {
  return (
    <div className="text-sm lg:flex-grow">
      <ButtonText buttons={leftButtons} />
    </div>
  )
}
