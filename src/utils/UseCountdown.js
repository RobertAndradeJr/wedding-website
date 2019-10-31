import { useEffect, useState } from 'react'

const getDays = (timeRemaining) => Math.floor(
  timeRemaining / (1000 * 60 * 60 * 24),
)
const getHours = (timeRemaining) => Math.floor(
  (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
)
const getMinutes = (timeRemaining) => Math.floor(
  (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
)
const getSeconds = (timeRemaining) => Math.floor(
  (timeRemaining % (1000 * 60)) / (1000),
)

const UseCountdown = (date, options = {}) => {
  const { intervalTime = 1000, now = () => Date.now() } = options
  const [timeRemaining, setTimeRemaining] = useState(() => new Date(date) - new Date(now()))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((current) => {
        if (current <= 0) {
          clearInterval(interval)

          return 0
        }

        return current - intervalTime
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [intervalTime])

  const humanReadableTime = {
    Days: getDays(timeRemaining),
    Hours: getHours(timeRemaining),
    Minutes: getMinutes(timeRemaining),
    Seconds: getSeconds(timeRemaining),
  }
  return humanReadableTime
}

export default UseCountdown
