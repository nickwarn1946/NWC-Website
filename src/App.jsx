import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './pages/Payments'; 

const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
    <h1>Intelligent Agility</h1>
    <img 
      src="./solutions.jpg" 
      alt="Solutions Graphic" 
      style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} 
    />
    <br />
    <a 
      href="#/payments" 
      style={{ fontSize: '20px', color: 'blue', display: 'inline-block', marginTop: '30px' }}
    >
      Book a Session
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
