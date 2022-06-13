import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compt/pages/Home';
import AboutUs from './compt/pages/AboutUs';
import { Auth } from './compt/pages/Auth';
import { RequireAuth } from './util/AuthContext';
import { AppShell } from './rm/Index';
import { Wrapper } from './compt/pages/Wrapper';
import { AppHome } from './rm/AppHome';
import { Draft } from './rm/Draft';
import { Profile } from './rm/Profile';
import { Level } from './rm/Level';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/landing/home" />} />
        <Route path="/landing" element={<Wrapper />}>
          <Route path="home" element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='AboutUs' element={<AboutUs />} />
        </Route>
        <Route path='/app' element={<RequireAuth><AppShell /></RequireAuth>}>
          <Route path="home" element={<AppHome />} />
          <Route path="draft/:id" element={<Draft />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="level/:id" element={<Level />} />
        </Route>
      </Routes>

    </Router>
  );
}

