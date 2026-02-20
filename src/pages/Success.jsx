import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: '60px' }}>✅</div>
      <h1 style={{ color: '#0070f3' }}>Payment Successful!</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '20px auto' }}>
        Thank you for booking your strategy session. I have received your payment 
        and will reach out to you personally within 24 hours to finalize our calendar date.
      </p>
      <Link to="/" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Return to Nick Warn Consulting
      </Link>
    </div>
  );
};

export default Success;
