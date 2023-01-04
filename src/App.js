import React from 'react';
import './App.css';
import TestContent from './TestContent';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import AboutMe from './AboutMe/AboutMe';
import Academic from './Academic/Academic';
import Work from './Work/Work';
import InProgress from './InProgress/InProgress';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const links = [
    ["/", "Home"],
    ["/about_me", "About Me"],
    ["/academics", "Academic Career"],
    ["/work", "Work Experience"],
    ["/projects", "Projects"],
    ["/interests", "Interests"]
    // ["/Test_Content", "Test Content"]
  ]

  return (
    <div class="root">
      <Router class="root">
        <div class="root flex-root">
          <NavBar links={links} />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div class="route-container">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/Personal-Website" element={<Home />} />
              <Route path="/about_me" element={<AboutMe />} />
              <Route path="/academics" element={<Academic />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<InProgress />} />
              <Route path="/interests" element={<InProgress />} />
              {/* <Route path="/Test_Content" element={<TestContent />} /> */}
              {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
            </Routes>
          </div>
        </div>
      </Router >
    </div>
  );
}

export default App;
