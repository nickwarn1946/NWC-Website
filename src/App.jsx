import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

// --- SHARED FOOTER COMPONENT ---
const Footer = () => (
  <footer style={{ marginTop: 'auto', padding: '60px 0', color: '#6c757d', fontSize: '0.9rem', textAlign: 'center' }}>
    <p>Strategic Business Solutions & Agility Coaching</p>
    <p>
      © 2026 Nick Warn Consulting. All rights reserved. | 
      <Link to="/terms" style={{ color: '#6c757d', marginLeft: '5px', textDecoration: 'underline' }}>Privacy & Terms</Link>
    </p>
  </footer>
);

// --- THE HOME PAGE ---
const Home = () => (
  <div style={{ backgroundColor: '#2b3034', minHeight: '100vh', fontFamily: '"Roboto", sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#ffffff', padding: '40px 20px' }}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');`}</style>
    <div style={{ background: 'linear-gradient(145deg, #1c3359, #162a4a)', padding: '60px 40px', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', textAlign: 'center', maxWidth: '900px', width: '100%', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <h1 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '5px', color: '#4a90e2', marginBottom: '15px', fontWeight: '700' }}>Nick Warn Consulting</h1>
      <h2 style={{ fontSize: '2.5rem', margin: '0', fontWeight: '700', lineHeight: '1.2', letterSpacing: '0.5px' }}>Intelligent Agility</h2>
      <p style={{ fontSize: '1.2rem', color: '#aab7c4', marginTop: '15px', marginBottom: '45px', fontWeight: '400', fontStyle: 'italic' }}>Strategic Consulting for an Uncertain World</p>
      <div style={{ marginBottom: '50px', overflow: 'hidden', borderRadius: '15px' }}>
        <img src="./solutions.jpg" alt="Solutions Graphic" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', opacity: '0.95', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
      </div>
      <div style={{ textAlign: 'left', lineHeight: '1.8', color: '#d1d9e0', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '10px', textAlign: 'center', fontWeight: '700' }}>The Dragonfly Model</h3>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#4a90e2', marginBottom: '30px', fontWeight: '500' }}>Four capabilities. Infinite adaptability.</p>
        <p style={{ marginBottom: '30px', fontSize: '1.1rem', fontWeight: '400' }}>The Model rests on four integrated capabilities, together producing organisational agility that no single capability can achieve alone.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          <p>Multi-perspective vision teaches leaders to see systems rather than symptoms, to detect weak signals before they become obvious trends, to perceive threats and opportunities that narrower vision would miss entirely.</p>
          <p>Adaptive movement enables organisations to change direction without creating chaos—to pivot with precision rather than lurch from crisis to crisis, to move faster than competitors while maintaining strategic coherence.</p>
          <p>Purposeful focus ensures that agility serves meaning rather than merely reacting to noise—that organizations know what matters, pursue it relentlessly, and resist the distractions that fragment attention and dissipate energy.</p>
          <p>Collaborative flight builds the trust-based relationships—across cultures, sectors, and stakeholder groups—that enable coordinated action in environments too complex for any single actor to navigate alone.</p>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/payments" style={{ backgroundColor: '#3d4449', color: '#ffffff', padding: '18px 50px', borderRadius: '10px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '700', display: 'inline-block', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>Explore Consulting Options</Link>
      </div>
    </div>
    <Footer />
  </div>
);

// --- THE PAYMENTS PAGE (NOW WITH EMBEDDED CALENDLY) ---
const PaymentPage = () => {
  const [isBooked, setIsBooked] = useState(false);

  // Detects when the user finishes the booking and payment
  useCalendlyEventListener({
    onEventScheduled: (e) => setIsBooked(true),
  });

  return (
    <div style={{ backgroundColor: '#2b3034', minHeight: '100vh', fontFamily: '"Roboto", sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#ffffff', padding: '40px 20px' }}>
      <div style={{ background: 'linear-gradient(145deg, #1c3359, #162a4a)', padding: '60px 40px', borderRadius: '24px', maxWidth: '1000px', width: '100%', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
        
        {!isBooked ? (
          <>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '20px' }}>Dragonfly Strategy Sessions</h2>
            <p style={{ color: '#aab7c4', marginBottom: '40px' }}>Select a time below. Payment is required to secure your session.</p>
            
            <div style={{ backgroundColor: '#ffffff', borderRadius: '15px', overflow: 'hidden', minHeight: '650px' }}>
              
              <InlineWidget url="https://calendly.com/nickwarn-nickwarnconsulting/30min" styles={{ height: '650px' }} />
            </div>
            
            <div style={{ marginTop: '40px' }}>
                <Link to="/" style={{ color: '#aab7c4', textDecoration: 'none' }}>← Back to Home</Link>
            </div>
          </>
        ) : (
          <div style={{ padding: '60px 20px' }}>
            <h2 style={{ fontSize: '3rem', color: '#4a90e2', marginBottom: '20px' }}>🎉 Thank You!</h2>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Your session is confirmed.</h3>
            <p style={{ fontSize: '1.2rem', color: '#d1d9e0', lineHeight: '1.6' }}>
              We have received your payment. A calendar invitation with your 
              <strong> Microsoft Teams link</strong> has been sent to your email address.
            </p>
            <Link to="/" style={{ backgroundColor: '#ffffff', color: '#1c3359', padding: '15px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', display: 'inline-block', marginTop: '40px' }}>Return Home</Link>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

// --- THE TERMS & PRIVACY PAGE ---
const TermsPage = () => (
  <div style={{ backgroundColor: '#2b3034', minHeight: '100vh', fontFamily: '"Roboto", sans-serif', color: '#ffffff', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ background: '#1c3359', padding: '60px 40px', borderRadius: '24px', maxWidth: '800px', width: '100%', textAlign: 'left', lineHeight: '1.6' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Privacy & Terms of Service</h2>
      
      <h3 style={{ color: '#4a90e2' }}>1. Privacy Notice 🛡️</h3>
      <p>We collect your <strong>name and email address</strong> to manage your booking. Data is processed via Calendly and Stripe. We do not store credit card details; these are encrypted by Stripe. You have the right to access or delete your data by contacting <strong>nickwarn1946@gmail.com</strong>.</p>
      
      <h3 style={{ color: '#4a90e2', marginTop: '30px' }}>2. Cancellation Policy ⏳</h3>
      <p>Cancellations or rescheduling requests made more than <strong>48 hours</strong> before your session are eligible for a full refund. Requests made within 48 hours are non-refundable but may be eligible for rescheduling at our discretion.</p>
      
      <h3 style={{ color: '#4a90e2', marginTop: '30px' }}>3. Intellectual Property 🧠</h3>
      <p>The <strong>Dragonfly Strategy Model</strong> and all related materials are the intellectual property of Nick Warn Consulting. Materials are for internal business use and may not be redistributed or used commercially without written consent.</p>
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'underline' }}>Return to Home</Link>
      </div>
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
