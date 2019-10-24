import React from 'react'
import { NavStrings } from '../Strings/Strings'
import HeartLogo from './HeartLogo'
import useWindowDimensions from '../../utils/UseWindowDimensions'
import UseScrollSpy from '../../utils/UseScrollSpy'

const { titleText } = NavStrings
const styles = [
  'flex',
  'items-center',
  'flex-shrink-0',
  'text-white',
  'mr-6',
  'focus:outline-none',
  'focus:shadow-outline',
]

export default function NavHeader() {
  const width = useWindowDimensions()
  const scroll = UseScrollSpy()
  return (
    <a href="#Home" className="focus:outline-none">
      <button className={styles.join(' ') + (width < 1024 || scroll === true ? ' hover:text-gray-600' : ' hover:text-yellow-500')} type="button">
        <HeartLogo />
        <span className="font-semibold text-xl tracking-tight">{titleText}</span>
      </button>
    </a>
  )
}
