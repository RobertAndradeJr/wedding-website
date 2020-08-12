import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Fallback from './components/Fallback';
import NavBar from './components/NavBar';
import {
  EngagementPicsStrings,
  InstagramPicsStrings,
  RsvpStrings,
  registryStrings,
  FAQStrings
} from './components/Strings';
import { createId, addSlash } from './utils/StringHelpers';

const EngagementPics = lazy(() => import('./components/EngagementPics'));
const Home = lazy(() => import('./components/Home'));
const Registry = lazy(() => import('./components/Registry'));
const RSVP = lazy(() => import('./components/RSVP'));
const Social = lazy(() => import('./components/Social'));
const FAQ = lazy(() => import('./components/FAQ'));

const App: React.FC = () => (
  <div className="App">
    <Suspense fallback={<Fallback />}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path={addSlash(createId(EngagementPicsStrings.TITLE))}
            component={EngagementPics}
          />
          <Route
            path={addSlash(createId(InstagramPicsStrings.TITLE))}
            component={Social}
          />
          <Route
            path={addSlash(createId(RsvpStrings.TITLE))}
            component={RSVP}
          />
          <Route
            path={addSlash(createId(registryStrings.TITLE))}
            component={Registry}
          />
          <Route path={addSlash(createId(FAQStrings.TITLE))} component={FAQ} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  </div>
);

export default App;
