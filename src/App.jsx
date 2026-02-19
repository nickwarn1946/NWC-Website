import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple Home Component (Your Landing Page)
const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Intelligent Agility</h1>
    <img 
      src="/solutions-graphic.png" 
      alt="Solutions Graphic" 
      style={{ maxWidth: '100%', height: 'auto' }} 
    />
    <br />
    <a href="/payment" style={{ fontSize: '20px', color: 'blue' }}>Book a Session</a>
  </div>
);

// Simple Payment Component (Your Stripe Page)
const Payment = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Secure Payment</h1>
    <p>Connecting to Stripe...</p>
    {/* Your Stripe Elements code will go here eventually */}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
