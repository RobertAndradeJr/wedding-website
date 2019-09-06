import React from 'react'
import LeftNavButtons from './LeftNavButtons'
import RightNavButtons from './RightNavButtons'

export default function NavButtons() {
  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <LeftNavButtons />
      <RightNavButtons />
    </div>
  )
}
