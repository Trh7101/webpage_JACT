import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './compt/Navigation';
import Home from './compt/pages/Home';
import SignUp from './compt/pages/Signup';
import AboutUs from './compt/pages/AboutUs';


export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>       
        <Route path='/UsAbout' element={<AboutUs/>}/> 
      </Routes>
      
    </Router>
  );
}

