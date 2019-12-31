import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Fallback from './components/Fallback';
import NavBar from './components/NavBar';

const Directions = lazy(() => import('./components/Directions'));
const Engagement = lazy(() => import('./components/Engagement'));
const Home = lazy(() => import('./components/Home'));
const Hotel = lazy(() => import('./components/Hotel'));
const Registry = lazy(() => import('./components/Registry'));
const RSVP = lazy(() => import('./components/RSVP'));
const Social = lazy(() => import('./components/Social'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={Fallback}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/engagement" component={Engagement} />
            <Route path="/social" component={Social} />
            <Route path="/directions" component={Directions} />
            <Route path="/rsvp" component={RSVP} />
            <Route path="/hotel" component={Hotel} />
            <Route path="/registry" component={Registry} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
