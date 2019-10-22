import { useState, useEffect } from 'react'

export const UseScrollSpy = ({ distance }) => {
  const scrollDistance = distance || 10
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const scrollCheck = window.scrollY >= scrollDistance
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck)
    }
    document.addEventListener('scroll', onscroll)
    return () => {
      document.removeEventListener('scroll', onscroll)
    }
  }, [scroll, setScroll])
}

export default UseScrollSpy
