import React from 'react';
import Hero from './Hero';
import Invitation from './Invitation';
import EventsList from './EventsList';
import City from './City';
import HowWeMet from './HowWeMet';
import Directions from './Directions';
import UseSmoothScroll from '../utils/UseSmoothScroll';

export const Home: React.FC = () => {
  UseSmoothScroll();
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
