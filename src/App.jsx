import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/header';
import Wordroid from './Components/wordroid/wordroid';
import Blueprints from './Components/blueprints/blueprints';
import Support from './Components/support/support';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/wordroid" element={<Wordroid />} />
        <Route path="/blueprints" element={<Blueprints />} />
        <Route path="/support" element={<Support />} />
      </Routes>
     
    </Router>
  );
};

export default App;
