import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/header';
import Wordroid from './Components/wordroid/wordroid';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/wordroid" element={<Wordroid />} />
      </Routes>
     
    </Router>
  );
};

export default App;
