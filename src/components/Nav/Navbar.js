import React, { useState } from 'react'
import NavButtons from './NavButtons'
import MobileNavButtons from './MobileNavButtons'
import NavHeader from './NavHeader'
import useWindowDimensions from '../../utils/UseWindowDimensions'
import UseScrollSpy from '../../utils/UseScrollScpy'


export default function Navbar() {
  const scroll = UseScrollSpy(250)
  const navStyles = [
    'flex',
    'items-center',
    'justify-between',
    'flex-wrap',
    'p-6',
    'fixed',
    'w-full',
    'md:pr-32',
    'z-50',
  ]
  const [NavOpen, setNavOpen] = useState(false)
  const { width } = useWindowDimensions()
  const clickHandler = () => setNavOpen(!NavOpen)
  const openNav = () => (NavOpen === true || width > 1024
    ? <NavButtons clickHandler={clickHandler} />
    : null)

  return (
    <nav className={navStyles.join(' ') + (scroll === true ? ' bg-yellow-500' : ' bg-transparent')}>
      <NavHeader />
      <MobileNavButtons clickHandler={clickHandler} />
      {openNav()}
    </nav>
  )
}
