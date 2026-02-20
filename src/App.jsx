import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// This line below connects your real payment file!
import Payment from './pages/payments'; 

const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Intelligent Agility</h1>
    <img 
      src="/solutions.jpg" 
      alt="Solutions Graphic" 
      style={{ maxWidth: '100%', height: 'auto' }} 
    />
    <br />
    {/* We use #/payment to help GitHub find the page easier */}
    <a href="/payment" style={{ fontSize: '20px', color: 'blue', display: 'block', marginTop: '20px' }}>
      Book a Session
    </a>
  </div>
);

function App() {
  return (
    <Router basename="/NWC-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
