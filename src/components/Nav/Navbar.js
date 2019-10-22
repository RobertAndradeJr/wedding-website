import React, { useState } from 'react'
import NavButtons from './NavButtons'
import MobileNavButtons from './MobileNavButtons'
import NavHeader from './NavHeader'
import useWindowDimensions from '../../utils/UseWindowDimensions'
import UseScrollSpy from '../../utils/UseScrollSpy'


export default function Navbar() {
  const scroll = UseScrollSpy(150)
  const navStyles = [
    'flex',
    'items-center',
    'justify-between',
    'flex-wrap',
    'p-6',
    'fixed',
    'w-screen',
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
    <nav
      className={navStyles.join(' ') + (width < 1024 || scroll === true ? ' bg-yellow-500' : ' bg-transparent')}
      style={{ transition: 'background 1.5s' }}
    >
      <NavHeader />
      <MobileNavButtons clickHandler={clickHandler} />
      {openNav()}
    </nav>
  )
}
