
import './App.css';
import './responsive.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Faq from './Faq';
import RoadMap from './Road';
import Lunch from './Lunch';
import Login from './Login';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/RoadMap" element={<RoadMap />} /> 
        <Route path="/Faq" element={<Faq />} /> 
        <Route path="/Lunch" element={<Lunch />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
   </Router>
  );
}