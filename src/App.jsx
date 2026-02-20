import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './pages/Payments'; 

const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
    <h1>Intelligent Agility</h1>
    <img 
      src="./solutions.jpg" 
      alt="Solutions Graphic" 
      style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px' }} 
    />
    <br />
    <a href="#/payments" style={{ fontSize: '20px', color: 'blue', display: 'inline-block', marginTop: '20px', textDecoration: 'none', border: '1px solid blue', padding: '10px 20px', borderRadius: '5px' }}>
      Book a Session
    </a>
  </div>
);
