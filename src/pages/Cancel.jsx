import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: '60px' }}>⚠️</div>
      <h1>Payment Cancelled</h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        No worries! If you weren't ready to book yet, you can return to the site 
        to review the packages again.
      </p>
      <Link to="/payments" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Back to Pricing
      </Link>
    </div>
  );
};

export default Cancel;
