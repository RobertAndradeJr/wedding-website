import React from 'react';
import Hero from './Hero';
import Invitation from './Invitation';
import EventsList from './EventsList';
import HowWeMet from './HowWeMet';
import UseSmoothScroll from '../utils/UseSmoothScroll';

export const Home: React.FC = () => {
  UseSmoothScroll();
  return (
    <>
      <Hero />
      <Invitation />
      <HowWeMet />
      <EventsList />
    </>
  );
};

export default Home;
