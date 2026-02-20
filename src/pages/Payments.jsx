import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Payments = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (packageName, priceInPence) => {
    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: packageName,
          amount: priceInPence,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "No URL returned");
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      alert("Checkout failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
       <Link to="/" style={{ color: '#0070f3', textDecoration: 'none', display: 'inline-block', marginBottom: '20px' }}>
        ← Back to Home
      </Link>
      <h1>Book a Session</h1>
      <p>Select your consulting package below.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
        
        {/* Tier 1 */}
        <div style={cardStyle}>
          <h3>Full Strategy Session</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>£2,500</p>
          <button 
            disabled={loading}
            onClick={() => handleCheckout("Full Strategy Session", 250000)}
            style={buttonStyle}
          >
            {loading ? "Loading..." : "Buy Now"}
          </button>
        </div>

        {/* Tier 2 */}
        <div style={cardStyle}>
          <h3>Monthly Support</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>£49</p>
          <button 
            disabled={loading}
            onClick={() => handleCheckout("Monthly Support", 4900)}
            style={buttonStyle}
          >
            {loading ? "Loading..." : "Subscribe"}
          </button>
        </div>

        {/* Tier 3 */}
        <div style={cardStyle}>
          <h3>Initial Consultation</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>£19.99</p>
          <button 
            disabled={loading}
            onClick={() => handleCheckout("Initial Consultation", 1999)}
            style={buttonStyle}
          >
            {loading ? "Loading..." : "Book Now"}
          </button>
        </div>

      </div>
    </div>
  );
};

// Simple styles for the demo
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  width: '250px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const buttonStyle = {
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default Payments;
