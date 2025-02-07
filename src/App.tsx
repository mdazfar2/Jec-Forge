import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import EventsPage from './pages/Events';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './components/Contact'; // Update the import path
import Team from './components/Team';
import CricketRegistration from './pages/Events/components/registration/CricketRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/resources/*" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Update the route */}
        <Route path="/team" element={<Team />} />
        <Route path="/events/register/cricket" element={<CricketRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;