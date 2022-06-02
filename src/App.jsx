import React from 'react';
import './App.css';
import Navigation from './compt/Navigation';
import HomeSection from './compt/HomSec';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <HomeSection />
    </Router>
  );
}

export default App;
