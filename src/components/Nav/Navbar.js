import React, { useState } from 'react'
import NavButtons from './NavButtons'
import MobileNavButtons from './MobileNavButtons'
import NavHeader from './NavHeader'
import useWindowDimensions from '../../Utilities/UseWindowDimensions'

const navStyles = [
  'flex',
  'items-center',
  'justify-between',
  'flex-wrap',
  'bg-yellow-500',
  'p-6',
  'fixed',
  'w-full',
  'md:pr-32',
  'z-50',
]

export default function Navbar() {
  const [NavOpen, setNavOpen] = useState(false)
  const { width } = useWindowDimensions()
  const clickHandler = () => setNavOpen(!NavOpen)
  const openNav = () => (NavOpen === true || width > 1024
    ? <NavButtons clickHandler={clickHandler} />
    : null)

  return (
    <nav className={navStyles.join(' ')}>
      <NavHeader />
      <MobileNavButtons clickHandler={clickHandler} />
      {openNav()}
    </nav>
  )
}
