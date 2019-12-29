import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import EventsList from './components/EventsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <EventsList />
    </div>
  );
}

export default App;
