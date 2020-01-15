import React, { useEffect } from 'react';
import Hero from './Hero';
import Invitation from './Invitation';
import EventsList from './EventsList';
import City from './City';
import HowWeMet from './HowWeMet';
import Directions from './Directions';
import removeActiveClasses from '../utils/RemoveActiveClasses';

export const Home: React.FC = () => {
  useEffect(() => {
    removeActiveClasses();
    const location = window.location.hash;
    const scrollTo = document.getElementById(location.replace(/#/, ''));
    scrollTo !== null &&
      scrollTo.scrollIntoView({
        behavior: 'smooth'
      });
  });
  return (
    <>
      <Hero />
      <Invitation />
      <HowWeMet />
      <EventsList />
      <City />
      <Directions />
    </>
  );
};

export default Home;
