import { useEffect } from 'react';
import removeActiveClasses from './RemoveActiveClasses';

const UseSmoothScroll = (): void => {
  const scrollTarget = window.location.hash;
  useEffect(() => {
    removeActiveClasses();
    const scrollTo = document.getElementById(scrollTarget.replace(/#/, ''));
    scrollTo !== null &&
      scrollTo.scrollIntoView({
        behavior: 'smooth'
      });
  }, [scrollTarget]);
};

export default UseSmoothScroll;
