import React from 'react'
import NavButtons from './NavButtons'
import MobileNavButtons from './MobileNavButtons'
import NavHeader from './NavHeader'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <NavHeader />
      <MobileNavButtons />
      <NavButtons />
    </nav>
  )
}
