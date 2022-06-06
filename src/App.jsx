import React from 'react';
import './App.css';
import Navigation from './compt/Navigation';
import Home from './compt/pages/home/Home';
import SignUp from './compt/pages/signUp/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>        
      </Routes>
      
    </Router>
  );
}

export default App;
