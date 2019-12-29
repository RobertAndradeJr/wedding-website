import { useState, useEffect } from 'react'

const UseScrollSpy = (scrollDistance = 10) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY >= scrollDistance;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [scroll, setScroll, scrollDistance]);
  return scroll
};

export default UseScrollSpy
