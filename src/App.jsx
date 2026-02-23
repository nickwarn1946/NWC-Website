import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Payment from './pages/Payments'; 

const Home = () => (
  <div style={{ 
    backgroundColor: '#ececec', // Warm Grey background
    minHeight: '100vh',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2c3e50', // Deep Charcoal
    padding: '20px'
  }}>
    {/* Futuristic Header Card */}
    <div style={{
      background: 'rgba(28, 51, 89, 0.9)', // Futuristic Deep Blue
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      textAlign: 'center',
      maxWidth: '600px',
      width: '100%'
    }}>
      <h1 style={{ 
        color: '#ffffff', 
        fontSize: '2.5rem', 
        marginBottom: '10px',
        letterSpacing: '1px' 
      }}>
        Intelligent Agility
      </h1>
      <p style={{ color: '#aab7c4', fontSize: '1.1rem', marginBottom: '30px' }}>
        Strategic Consulting for the Modern Era
      </p>

      {/* The Graphic */}
      <img 
        src="./solutions.jpg" 
        alt="Solutions Graphic" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.1)' 
        }} 
      />

      {/* Button with a Laid Back feel */}
      <div style={{ marginTop: '40px' }}>
        <Link 
          to="/payments" 
          style={{ 
            backgroundColor: '#3498db', // Calming Light Blue
            color: 'white',
            padding: '15px 35px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            transition: 'background 0.3s ease',
            display: 'inline-block'
          }}
        >
          Book a Session
        </Link>
      </div>
    </div>
    
    <p style={{ marginTop: '20px', color: '#7f8c8d', fontSize: '0.9rem' }}>
      © 2026 Nick Warn Consulting. All rights reserved.
    </p>
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
