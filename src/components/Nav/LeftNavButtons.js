import React from 'react'
import { leftButtons } from './NavStrings'
import ButtonText from './ButtonText'

export default function LeftNavButtons() {
  return (
    <div className="text-sm lg:flex-grow">
      <ButtonText buttons={leftButtons} />
    </div>
  )
}
