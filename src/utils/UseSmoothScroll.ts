import { useEffect } from 'react';
import removeActiveClasses from './RemoveActiveClasses';

export default (): void => {
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
