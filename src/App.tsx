import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import EventsList from './components/EventsList';
import HowWeMet from './components/HowWeMet';
import Invitation from './components/Invitation';
import EngagementPics from './components/EngagementPics';
import SocialSection from './components/SocialSection';
import City from './components/City';
import Directions from './components/Directions';
import Map from './components/Map';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div data-spy="scroll" data-target="#navbar" data-offset="0">
        {/* <Hero />
        <EventsList />
        <HowWeMet />
        <Invitation />
        <EngagementPics />
        <SocialSection />
        <City />
        <Directions /> */}
        <Map />
      </div>
    </div>
  );
}

export default App;
