import React, { useEffect } from 'react';
import Hero from './Hero';
import Invitation from './Invitation';
import EventsList from './EventsList';
import City from './City';
import RSVP from './RSVP';
import HowWeMet from './HowWeMet';

export const Home: React.SFC = () => {
  useEffect(() => {
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
      <RSVP />
    </>
  );
};

export default Home;
