import React, { useEffect, useState } from 'react'

const UseArrowNavigation = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }) => (key === targetKey ? setKeyPressed(true) : null)
  const upHandler = ({ key }) => (key === targetKey ? setKeyPressed(true) : null)

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [keyPressed, setKeyPressed])
}

export default UseArrowNavigation
