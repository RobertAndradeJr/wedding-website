import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import EventsList from './components/EventsList';
import HowWeMet from './components/HowWeMet';
import Invitation from './components/Invitation';
import EngagementPics from './components/EngagementPics';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
const City = lazy(() => import('./components/City'));
const Directions = lazy(() => import('./components/Directions'));
const Map = lazy(() => import('./components/Map'));
const Social = lazy(() => import('./components/Social'));

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Invitation />
      <HowWeMet />
      <EventsList />
      <EngagementPics />
      <Suspense fallback={<h1>...loading</h1>}>
        <Social />
        <City />
        <Map />
        <Directions />
      </Suspense>
      <RSVP />
      <Footer />
    </div>
  );
};

export default App;
