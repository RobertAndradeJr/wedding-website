import React, { useState } from 'react'
import NavButtons from './NavButtons'
import MobileNavButtons from './MobileNavButtons'
import NavHeader from './NavHeader'

export default function Navbar() {
  const [NavOpen, setNavOpen] = useState(false)
  const clickHandler = () => setNavOpen(!NavOpen)
  const openNav = () => (NavOpen === true ? <NavButtons clickHandler={clickHandler} /> : null)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-yellow-500 p-6 fixed w-full z-50">
      <NavHeader />
      <MobileNavButtons clickHandler={clickHandler} />
      {openNav()}
    </nav>
  )
}
