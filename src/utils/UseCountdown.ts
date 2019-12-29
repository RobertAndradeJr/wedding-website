import { useEffect, useState } from 'react'

const getDays = (timeRemaining: number) => Math.floor(
  timeRemaining / (1000 * 60 * 60 * 24),
);
const getHours = (timeRemaining: number) => Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
);
const getMinutes = (timeRemaining: number) => Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
);
const getSeconds = (timeRemaining: number) => Math.floor(
    (timeRemaining % (1000 * 60)) / (1000),
);

const UseCountdown = (date: any, options: any = {}) => {
  const { intervalTime = 1000, now = () => Date.now() } = options;
  const [timeRemaining, setTimeRemaining] = useState(() => Number(new Date(date)) - Number(new Date(now())));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((current) => {
        if (current <= 0) {
          clearInterval(interval);

          return 0
        }

        return current - intervalTime
      })
    }, intervalTime);

    return () => clearInterval(interval)
  }, [intervalTime]);

  return {
    Days: getDays(timeRemaining),
    Hours: getHours(timeRemaining),
    Minutes: getMinutes(timeRemaining),
    Seconds: getSeconds(timeRemaining),
  }
};

export default UseCountdown
