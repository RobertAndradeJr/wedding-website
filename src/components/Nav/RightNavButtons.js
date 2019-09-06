import React from 'react'
import { rightButtons } from './NavStrings'
import ButtonText from './ButtonText'

export default function RightNavButtons() {
  return (
    <div className="text-sm lg:flex-grow">
      <ButtonText buttons={rightButtons} />
    </div>
  )
}
