import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- THE HOME PAGE ---
const Home = () => (
  <div style={{ 
    backgroundColor: '#2b3034', 
    minHeight: '100vh',
    fontFamily: '"Roboto", sans-serif', 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
    padding: '40px 20px'
  }}>
    {/* Import Roboto via CSS */}
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');`}</style>

    <div style={{
      background: 'linear-gradient(145deg, #1c3359, #162a4a)', 
      padding: '60px 40px',
      borderRadius: '24px',
      boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
      textAlign: 'center',
      maxWidth: '900px',
      width: '100%',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      
      <h1 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '5px', color: '#4a90e2', marginBottom: '15px', fontWeight: '700' }}>
        Nick Warn Consulting
      </h1>

      <h2 style={{ fontSize: '2.5rem', margin: '0', fontWeight: '700', lineHeight: '1.2', letterSpacing: '0.5px' }}>
        Intelligent Agility
      </h2>

      <p style={{ fontSize: '1.2rem', color: '#aab7c4', marginTop: '15px', marginBottom: '45px', fontWeight: '400', fontStyle: 'italic' }}>
        Strategic Consulting for an Uncertain World
      </p>

      <div style={{ marginBottom: '50px', overflow: 'hidden', borderRadius: '15px' }}>
        <img 
          src="./solutions.jpg" 
          alt="Solutions Graphic" 
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', opacity: '0.95', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} 
        />
      </div>

      <div style={{ textAlign: 'left', lineHeight: '1.6', color: '#d1d9e0', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '10px', textAlign: 'center', fontWeight: '700' }}>
          The Dragonfly Model
        </h3>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#4a90e2', marginBottom: '30px', fontWeight: '500' }}>
          Four capabilities. Infinite adaptability.
        </p>
        
        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
          The Model rests on four integrated capabilities that together produce organizational agility no single capability can achieve alone.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '25px' }}>
          <p><strong style={{ color: '#ffffff' }}>Multi-perspective vision</strong> teaches leaders to see systems rather than symptoms...</p>
          <p><strong style={{ color: '#ffffff' }}>Adaptive movement</strong> enables organizations to change direction without creating chaos...</p>
          <p><strong style={{ color: '#ffffff' }}>Purposeful focus</strong> ensures that agility serves meaning rather than merely reacting to noise...</p>
          <p><strong style={{ color: '#ffffff' }}>Collaborative flight</strong> builds the trust-based relationships...</p>
        </div>

        <p style={{ marginTop: '40px', fontSize: '1.2rem', textAlign: 'center', fontStyle: 'italic', color: '#ffffff', fontWeight: '300' }}>
          Not just a framework. A philosophy of leadership.
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link 
          to="/payments" 
          style={{ 
            backgroundColor: '#3d4449', 
            color: '#ffffff', 
            padding: '18px 50px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '700',
            display: 'inline-block',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          If you'd like to learn more, click here.
        </Link>
      </div>
    </div>

    <footer style={{ marginTop: 'auto', padding: '60px 0', color: '#6c757d', fontSize: '0.9rem', textAlign: 'center' }}>
      <p>Strategic Business Solutions & Agility Coaching</p>
      <p>© 2026 Nick Warn Consulting. All rights reserved.</p>
    </footer>
  </div>
);

// --- THE PAYMENTS PAGE (TEMPORARY PLACEHOLDER TO PASS BUILD) ---
const PaymentPage = () => (
  <div style={{ backgroundColor: '#2b3034', minHeight: '100vh', color: '#ffffff', padding: '50px', textAlign: 'center', fontFamily: '"Roboto", sans-serif' }}>
    <h1>Payments & Services</h1>
    <p>We are currently updating our session bookings. Please check back shortly.</p>
    <Link to="/" style={{ color: '#4a90e2' }}>Return Home</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
